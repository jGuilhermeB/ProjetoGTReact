import React, { useState } from 'react'
import { Logo } from './Logo'
import { SearchField } from './SearchField'
import { Sing } from './Sing'
import { Cart } from './Cart'
import { Navigator } from './Navigator'

const Header = () => {

  const [searchInput, setSearchInput] = useState('')
  return (
    <header className='bg-white'>
      <div className='w-[86%] mx-auto'>
        <div className="flex justify-between w-full gap-4 items-center">
          <Logo/>
          <SearchField searchInput={searchInput} setSearchInput={setSearchInput}/>
          <Sing/>
          <Cart/>
        </div>
        <Navigator/>
      </div>

    </header>
  )
}

export default Header