import { Input } from '@/components/ui/input'
import { useState } from "react";
import {
  IconSearch,
} from '@tabler/icons-react'

  

const Search = ({ setQuery }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    setQuery({ search });
    //setSearch("");
  };

  return (
    <form
      className="text-[14px] flex flex-row items-center justify-center"
      onSubmit={handleSubmit}
    >
      <Input
        type='search'
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search...'
        value={search}
        className='md:w-[100px] lg:w-[300px]'
      />
      <button
        type="submit"
        className="-ml-[32px] z-[1]"
      >
        <IconSearch />
      </button>
    </form>
  );
};

export { Search };

