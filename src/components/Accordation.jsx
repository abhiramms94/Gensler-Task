import React, { memo, useState } from "react";

const Accordion = ({ categories, onCategorySelect }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
      <div className="container mx-auto md:w-52">
          <div className="bg-white max-w-full mx-auto border border-gray-200 w-[100%]">
            <ul className="shadow-box">
              {categories.map((category, index) => (  //mapping the main categories
                <li
                  key={category.id}
                  className="relative border-b border-gray-200 min-w[100%]"
                >
                  <button
                    type="button"
                    className="w-full px-4 py-4 text-left"
                    onClick={() => toggle(index)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{category.name}</span>
                      <svg
                        className={`ml-5 w-5 h-5 text-gray-500 transition-transform duration-300 ${
                          selected === index ? "transform rotate-0" : ""
                        }`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d={
                            selected === index ? "M5 12h14" : "M12 5v14m-7-7h14"
                          }
                        ></path>
                      </svg>
                    </div>
                  </button>
                  <div
                    className="relative overflow-hidden transition-all duration-700"
                    style={{
                      maxHeight: selected === index ? "1000px" : "0px",
                    }}
                  >
                    {category.subcategories.map((subcategory, index) => ( //mapping the sub categories
                      <div key={subcategory.id} className="">
                        <button
                          className="mt-2 px-4 py-2  "
                          onClick={() => onCategorySelect(subcategory)} 
                        >
                          {subcategory.name}
                        </button>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
    
  );
};

export default memo(Accordion); //memo to prevent unwanted re-rendering
