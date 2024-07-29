import { useSearchParams } from "react-router-dom";
import { cityOpt, sortOpt } from "../../constants";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

const Filter = () => {
  const [params, setParams] = useSearchParams();
  const [title, setTitle] = useState<string>("");
  const debouncedSearchTerm = useDebounce(title, 400);

  useEffect(() => {
    handleChange("title", debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleChange = (name: string, value: string) => {
    params.set(name, value);

    setParams(params);
  };

  return (
    <form className="lg:mt-28 flex flex-col gap-4 lg:gap-10">
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="destination">
          Nereye?
        </label>
        <select
          onChange={(e) => handleChange("location", e.target.value)}
          className="border py-1 px-4 rounded-md"
          id="destination"
        >
          <option value="">Seçiniz</option>
          {cityOpt.map((i, key) => (
            <option value={i.value} key={key}>
              {i.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="place">
          Konaklama yeri adına göre ara
        </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="border py-1 px-4 rounded-md"
          type="text"
          id="place"
          placeholder="Ör: Seaside Villa"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="order">
          Sıralama Ölçütü ?
        </label>
        <select
          onChange={(e) => handleChange("order", e.target.value)}
          className="border py-1 px-4 rounded-md"
          id="order"
        >
          <option value="">Seçiniz</option>
          {sortOpt.map((i, key) => (
            <option value={i.value} key={key}>
              {i.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => setParams({})}
          className="bg-indigo-500 rounded-md hover:bg-indigo-700 transition text-white py-1 px-4 w-fit flex justify-end"
          type="reset"
        >
          Filtreleri Temizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
