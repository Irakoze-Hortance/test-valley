import { SearchIcon, ArrowDownIcon,MenuAlt1Icon } from '@heroicons/react/solid';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 text-gray-800 py-4 px-8 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center">
        <h1 className="text-green-300 font-bold text-xl">Testvalley </h1><MenuAlt1Icon className='h-6 w-6 text-green-300'/><span className='text-green-300 font-bold text-sl'>카테고리</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">  
            <SearchIcon className="absolute left-1 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
          <input
            type="text"
            placeholder=" 구매할지 망설이고 있다면, 검색해보세요!"
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 "
          />
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <ArrowDownIcon className="h-6 w-6 text-gray-400" />
          <p className='text-grey-300'>| 로그인 / 회원가입</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
