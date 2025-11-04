import { countryList } from "../../data/countries";
import React, { useState } from "react";
interface filterStudentsProps {
  onFilterName: (name: string) => void;
  onFilterCountry: (country: string) => void;
  onFilterDorm: (dorm: string) => void;
}

export default function FilterStudents({
  onFilterCountry,
  onFilterName,
  onFilterDorm,
}: filterStudentsProps) {
  const [filterName, setFilterName] = useState("");
  const [filterCountry, setFilterCountry] = useState("");
  const [filterDorm, setFilterDorm] = useState("");
  const handleFilterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilterName(value);
    onFilterName(value);
  };
  const handleFilterCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterCountry(value);
    onFilterCountry(value);
  };
  const handleFilterDorm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterDorm(value);
    onFilterDorm(value);
  };
  return (
    <>
      <form className="flex gap-4 items-center">
        <input
          className="bg-amber-50 w-2xs text-black px-2 py-1 rounded"
          type="search"
          placeholder="Поиск по имени..."
          value={filterName}
          onChange={handleFilterName}
        />

        <select
          value={filterCountry}
          onChange={handleFilterCountry}
          className="text-black px-2 py-1 rounded bg-white"
        >
          <option value="">Все страны</option>
          {countryList.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <select
          value={filterDorm}
          onChange={handleFilterDorm}
          name="dormitory"
          id="dormitory"
        >
          <option className="text-black" value="">
            Все общежития
          </option>
          {Array.from({ length: 11 }, (_, i) => {
            const num = i + 1;
            const stringedNum = num.toString();
            return (
              <option
                className="text-black"
                key={stringedNum}
                value={stringedNum}
              >
                {num}
              </option>
            );
          })}
          <option className="text-black" value="Без общежития">
            Без общежития
          </option>
        </select>
      </form>
    </>
  );
}
