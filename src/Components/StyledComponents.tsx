import tw from 'twin.macro'

const Card = tw.div`bg-gray-800 text-white p-3 rounded-md`
const GridContainer = tw.div`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2` 
const Heading = tw.h1`text-xl text-white mb-2`

export {Card, GridContainer, Heading}