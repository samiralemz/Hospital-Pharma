import { Input } from "@windmill/react-ui";
import React from "react";
import { FaSearch } from "react-icons/fa";

function Search({onchange}) {
  return (
    <div className="container flex items-center justify-between h-full text-purple-600 ">
      <div className="flex justify-center flex-1 ">
        <div className="relative  w-full mr-2">
          <div className="absolute inset-y-0 flex items-center pl-2">
            <FaSearch className="w-4 h-4" />
          </div>
          <Input
            className="pl-8 text-gray-700 bg-gray-200 p-3 "
            placeholder="Pesquisar"
            onChange={onchange}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
