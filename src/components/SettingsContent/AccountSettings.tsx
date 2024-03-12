import { FormControl, FormLabel, Grid, Input } from '@chakra-ui/react'

function AccountSettings() {
  return (
    <>
      <div className='text-left mb-10'>
        <h2 className='font-medium text-lg md:text-2xl text-dark mb-2'>Contact Information</h2>
        <p className="text-gray-600">Tell us about yourself so we can know you better. <br />Share more information with us if you’d like.</p>
      </div>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        <FormControl id="firstName">
          <FormLabel>First Name</FormLabel>
          <Input focusBorderColor="brand.dark" type="text" placeholder="John" />
        </FormControl>
        <FormControl id="lastName">
          <FormLabel>Last Name</FormLabel>
          <Input focusBorderColor="brand.dark" type="text" placeholder="Doe" />
        </FormControl>
        <FormControl id="emailAddress">
          <FormLabel>Email Address</FormLabel>
          <Input
            focusBorderColor="brand.dark"
            type="email"
            placeholder="johndoe@email.com"
          />
        </FormControl>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input
            focusBorderColor="brand.dark"
            type="text"
            placeholder="johndoe2024"
          />
        </FormControl>
        <FormControl id="phoneNumber">
          <FormLabel>Phone Number</FormLabel>
          <Input
            focusBorderColor="brand.dark"
            type="tel"
            placeholder="(000) 999–1010"
          />
        </FormControl>
        <FormControl id="occupation">
          <FormLabel>Occupation</FormLabel>
          <Input
            focusBorderColor="brand.dark"
            type="tel"
            placeholder="Civil Worker"
          />
        </FormControl>
        <FormControl id="dateOfBirth">
          <FormLabel>Date of Birth</FormLabel>
          <Input
            focusBorderColor="brand.dark"
            type="date"
            placeholder="Select date"
          />
        </FormControl>
        <FormControl id="address">
          <FormLabel>Address</FormLabel>
          <Input
            focusBorderColor="brand.dark"
            type="text"
            placeholder="Enter your address"
          />
        </FormControl>
      </Grid>
    </>
  )
}

export default AccountSettings
