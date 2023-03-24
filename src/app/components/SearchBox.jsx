"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto flex justify-between items-center px-4 "
    >
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm outline-none placeholder-gray-500 bg-transparent flex-1"
      />
      <button
        type="submit"
        disabled={!search}
        className=" text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
