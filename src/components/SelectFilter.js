import React from "react";

function SelectFilter({ onchange }) {
  return (
    <div className="w-full px-3 mb-6 md:mb-0">
      <span className="text-base font-semibold text-gray-600">Gênero</span>
      <div className="relative">
        <select
          className="w-full mb-5 h-12 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg focus:outline-none"
          onChange={onchange}
        >
          <option value={"todos"} selected>
            Todos
          </option>
          <option value={"female"}>Feminino</option>
          <option value={"male"}>Masculino</option>
        </select>
      </div>
    </div>
  );
}

export default SelectFilter;
