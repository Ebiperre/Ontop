import { Box } from '@chakra-ui/react'

import Actions from './Actions'
import Data from './Data'

function SettingsSidebar() {
  return (
    <Box
      as="aside"
      flex={1}
      mr={{ base: 0, md: 5 }}
      mb={{ base: 5, md: 0 }}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="brand.light"
      className='py-5 h-fit'
      style={{ transform: 'translateY(-100px)' }}
    >
      <Data />
      <Actions />
    </Box>
  )
}

export default SettingsSidebar
