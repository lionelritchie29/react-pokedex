/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@emotion/react'

import React from 'react'
import {Link} from 'react-router-dom'
import 'twin.macro'

const Navbar = () => {
  return (
    <nav tw='text-white'>
      <ul tw='grid grid-cols-2 text-center'>
          <Link to="/" tw='py-2 bg-pink-700 hover:bg-pink-600'>
        <li tw='border-r'>
            Home
        </li>
          </Link>
          <Link to="/favorites" tw='py-2 bg-pink-700 hover:bg-pink-600'>
        <li>
            Favorites
        </li>
          </Link>
      </ul>
    </nav>
  )
}

export default Navbar
