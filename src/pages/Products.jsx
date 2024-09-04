import React, { useCallback, useState } from "react";
import Header from "../components/Header";
import Accordion from "../components/Accordation";
import { categories, products } from "../utils/db";
import ProductTile from "../components/ProductTile";
import CategoryTitle from "../components/CategoryTitle";

export default function Products() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = useCallback((categoryObj) => {
    setSelectedCategory(categoryObj);
  }, []); // with useCallback prevented unwanted re-rendering of child components on every state change

  const handleAddToCart = useCallback(() => {
    setCartCount((prevCount) => prevCount + 1);
  }, []); //prevented unwanted re-rendering of products on every state change

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.subcategoryId === selectedCategory.id
      )
    : products; //initially showing all products if there is no category selected

  return (
    <div className="h-screen bg-gray-100">
      <Header cartCount={cartCount} />
      <div className=" flex flex-col md:flex-row p-4">
        <Accordion
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />
        <div className="flex-1 mt-5 md:mt-0">
          <CategoryTitle categoryname={selectedCategory?.name}  />
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-0 md:ml-5 mt-5">
            {filteredProducts.map((product) => (
              <ProductTile
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
