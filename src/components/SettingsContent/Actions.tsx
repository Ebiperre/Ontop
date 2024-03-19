import { Box, Button } from '@chakra-ui/react'

function Actions() {
  return (
    <Box py={5} px={8} justifyContent={'flex-end'} display={'flex'} alignItems={'center'} borderTopWidth={1} borderColor="brand.light">
      <Button fontWeight={500} px={8}>Update</Button>
    </Box>
  )
}

export default Actions
