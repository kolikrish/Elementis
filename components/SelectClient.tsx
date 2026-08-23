"use client";
import { useState } from "react";

interface SelectClientProps {
  options: string[];
  defaultSelection: string;
}

export default function SelectClient({
  defaultSelection,
  options,
}: SelectClientProps) {
  const [selectedOption, setSelectedOption] =
    useState<string>(defaultSelection);
  return (
    <div className="cursor-pointer border-b border-[#66BB6A] bg-[#E8F5E9] px-4 py-3 text-[#0F1E16] md:px-6">
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="cursor-pointer bg-[#E8F5E9] text-xs text-[#0F1E16] outline-none md:text-base"
      >
        {options.map((option, i) => (
          <option key={option + i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
