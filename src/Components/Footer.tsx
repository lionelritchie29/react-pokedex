/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@emotion/react'

import React from 'react'
import 'twin.macro'

const Footer = () => {
  return (
    <div tw='flex justify-end text-white border-t border-gray-700 mt-5'>
      <a tw='block mt-5 hover:underline mb-2' target='_blank' rel='noreferrer' href="https://lionelritchie.my.id">About me</a>
    </div>
  )
}

export default Footer
