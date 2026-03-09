import React, { useState, useEffect } from "react";
import { DummyProducts } from "../dummyproducts/DummyProducts";
import { ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../store/slices/productSlice.js";

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

  const [cartItems, setCartItems] = useState([]);

  const dispatch = useDispatch();

  const { products: storeProducts } = useSelector((state) => state.products);

  const totalAmount = storeProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const filterHandler = (filter) => {
    setFilters((prev) =>
      prev.includes(filter.value)
        ? prev.filter((item) => item !== filter.value)
        : [...prev, filter.value],
    );
  };

  useEffect(() => {
    if (filters.length === 0) {
      setProducts(DummyProducts);
    } else {
      const filteredProducts = DummyProducts.filter((product) =>
        filters.includes(product.category),
      );
      setProducts(filteredProducts);
    }
  }, [filters]);

  return (
    <div id="products" className="bg-[#F3F4F6] min-h-screen relative">
      <div className="py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Store Products
        </h2>
        <div className="grid grid-cols-6 gap-1">
          <div className="mt-3 col-span-1 shadow-md rounded-md p-4 bg-white w-50 space-y-3">
            <h3 className="text-lg font-medium text-gray-900">Categories</h3>
            {Categories.map((category) => {
              return (
                <div key={category.id}>
                  <h1>{category.name}</h1>
                  <div>
                    {category?.subCategories?.map((subcategory) => {
                      return (
                        <div key={subcategory.value}>
                          <input
                            type="checkbox"
                            name={subcategory.value}
                            id={subcategory.value}
                            onChange={() => filterHandler(subcategory)}
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
          <div className="col-span-5 w-275 2">
            <div className="mt-3 grid grid-cols-6 gap-x-3 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
              {products.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="col-span-1 group relative bg-white shadow-md rounded-md p-4"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    />
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.weight}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-[#009F7F]">
                        ${product.price}
                      </p>
                    </div>
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="mt-3 w-full items-center justify-center rounded-md border border-[#019376] bg-white px-8 py-2 text-sm font-medium text-[#019376] hover:bg-[#019376] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#019376] focus:ring-offset-2 cursor-pointer"
                    >
                      <svg
                        className="h-4 w-4 inline-block mr-1"
                        fill="none"
                        stroke="currentcolor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <button
        command="show-modal"
        commandfor="drawer"
        className="absolute top-80 right-4"
      >
        {storeProducts.length > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center rounded-full bg-[#019376] text-white text-xs w-5 h-5">
            {storeProducts.length}
          </span>
        )}
        <ShoppingBag className="text-[#1F2937] hover:text-[#019376] m-2" />
      </button>
      <el-dialog>
        <dialog
          id="drawer"
          aria-labelledby="drawer-title"
          className="fixed inset-0 size-auto max-h-none max-w-none overflow-hidden bg-transparent not-open:hidden backdrop:bg-transparent"
        >
          <el-dialog-backdrop class="absolute inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"></el-dialog-backdrop>

          <div
            tabIndex="0"
            className="absolute inset-0 pl-10 focus:outline-none sm:pl-16"
          >
            <el-dialog-panel class="group/dialog-panel relative ml-auto block size-full max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700">
              <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out group-data-closed/dialog-panel:opacity-0 sm:-ml-10 sm:pr-4">
                <button
                  type="button"
                  command="close"
                  commandfor="drawer"
                  className="relative rounded-md text-gray-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <span className="absolute -inset-2.5"></span>
                  <span className="sr-only">Close panel</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    className="size-6"
                  >
                    <path
                      d="M6 18 18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  {storeProducts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full">
                      <svg
                        className="h-12 w-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <p className="mt-2 text-sm text-gray-500">
                        Your cart is empty
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-4">
                      {storeProducts.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between border-b border-gray-200 py-4"
                        >
                          <div className="flex items-center">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-16 w-16 object-cover rounded-md"
                            />
                            <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">
                                {item.name}
                              </h3>
                              <p className="text-sm font-medium text-[#009F7F]">
                                Price: $
                                {(item.price * item.quantity).toFixed(2)}
                              </p>

                              <div className="flex items-center mt-2 space-x-3">
                                <button
                                  onClick={() =>
                                    dispatch(decreaseQuantity({ id: item.id }))
                                  }
                                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                  -
                                </button>

                                <span className="text-sm font-medium text-gray-900">
                                  {item.quantity}
                                </span>

                                <button
                                  onClick={() =>
                                    dispatch(increaseQuantity({ id: item.id }))
                                  }
                                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <button
                              onClick={() => dispatch(removeFromCart(item.id))}
                              className="text-red-500 hover:text-red-700"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white">
                    <button className="w-full flex items-center justify-between bg-[#019376] hover:bg-[#017a63] text-white font-semibold py-3 px-4 rounded-md transition">
                      <span>Total Amount</span>

                      <span>
                        {storeProducts.length} Items | ${totalAmount.toFixed(2)}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </el-dialog-panel>
          </div>
        </dialog>
      </el-dialog>
    </div>
  );
};

export default Products;
