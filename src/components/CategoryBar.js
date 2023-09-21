import React, { useState } from 'react';

function CategoryBar() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: "All" },
    { name: "Skincare" },
    { name: "Makeup" },
    { name: "Vaseline" }
  ];

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
      {categories.map((category) => (
        <button
          key={category.name}
          type="button"
          className={`text-gray-900 border-white hover:border-gray-200 hover:text-brown bg-white  text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 ${
            selectedCategory === category ? "text-brown" : "dark:text-white"
          }`}
          onClick={() => handleClick(category)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
export default CategoryBar;
