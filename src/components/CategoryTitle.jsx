import React, { memo } from "react";

function CategoryTitle({ categoryname }) {
  return (
    <div className="flex ml-0 md:ml-5 items-center justify-between bg-blue-500 p-4 text-white">
      {categoryname ? categoryname : "All Products"}
    </div>
  );
}

export default memo(CategoryTitle)