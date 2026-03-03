import React, { useState, useEffect } from "react";
import { DummyProducts } from "../dummyproducts/DummyProducts";

const Categories = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    subCategories: [
      {
        name: "Fruits",
        value: "fruits",
      },
      {
        name: "Vegetables",
        value: "vegetables",
      },
    ],
  },
  {
    id: 2,
    name: "Meat & Fish",
    subCategories: [
      {
        name: "Meat",
        value: "meat",
      },
      {
        name: "Fish",
        value: "fish",
      },
    ],
  },
  {
    id: 3,
    name: "Fish & Seafood",
    subCategories: [
      {
        name: "Fish",
        value: "fish",
      },
      {
        name: "Seafood",
        value: "seafood",
      },
    ],
  },
];

const Products = () => {
  const [filters, setFilters] = useState([]);
  const [products, setProducts] = useState(DummyProducts);


  const filterHandler = (filter) => {
    setFilters([...filters, filter.value]);
  };

  useEffect(() => {
    if (filters.length !== 0) {
      const filteredProducts = DummyProducts.filter((product) =>
      filters.includes(product.category)
    );
    setProducts(filteredProducts);
  }
  }, [filters]);

  console.log(filters);

  return (
    <div className="bg-[#F3F4F6]">
      <div className="py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Store Products
        </h2>
        <div className="grid grid-cols-5 gap-1">
          <div className="col-span-1 shadow-md rounded-md p-4 bg-white">
            <h3 className="text-lg font-medium text-gray-900">Categories</h3>
            {Categories.map((category) => {
              return (
                <div>
                  <h1>{category.name}</h1>
                  <div>
                    {category?.subCategories?.map((subcategory) => {
                      return (
                        <div>
                          <input
                            type="checkbox"
                            name={subcategory.value}
                            id={subcategory.value}
                            onClick={() => filterHandler(subcategory)}
                          />
                          <label htmlFor={subcategory.value}>
                            {subcategory.name}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-span-4">
            <div className="mt-6 grid grid-cols-6 gap-x-3 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
              {products.map((product) => {
                return (
                  <>
                    <div className="col-span-1 group relative bg-white shadow-md rounded-md p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                      />
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            <a href="#">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              ></span>
                              {product.name}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.weight}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-[#009F7F]">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
