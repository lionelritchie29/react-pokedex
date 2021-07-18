/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from '@emotion/react'

import React from 'react'
import 'twin.macro'
import { Card } from './StyledComponents'

const Loading = () => {
  return (
    <div tw='flex justify-center items-center w-full mt-12'>
      <Card tw='w-full text-center py-10'>Fetching data, please wait ...</Card>
    </div>
  )
}

export default Loading
