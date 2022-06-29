

import { Links } from './Links'
import { useDebounce } from 'use-debounce';

import { useStateContext } from '../context/StateContextProvider';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {

  const { setSearchTerm, searchTerm, getResults }: any = useStateContext();
  // const [text, setText] = useState('Elon Musk');
  // const [debouncedValue] = useDebounce(text, 500);

  // useEffect(() => {
  //   if (debouncedValue) setSearchTerm(debouncedValue);
  // }, [debouncedValue]);

  const location = useLocation();

  const handleSearch = () => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }

  return (
    <div className='relative sm:ml-56 md:ml-72 sm:-mt-10 mt-3'>
      <input
        value={searchTerm}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search Vexgle"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm !== '' && (
        <button type="button" className="absolute top-1.5 right-16 text-2xl text-gray-500 dark:text-gray-300" onClick={() => setSearchTerm('')}>
          x
        </button>
      )}
      <button type="button" className="absolute top-2 right-4 text-2xl text-gray-500 " onClick={() => handleSearch()}>
        🔎
      </button>
      <Links/>
    </div>
  )
}

export default Search