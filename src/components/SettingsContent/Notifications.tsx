import { Grid, FormControl, FormLabel, Switch } from '@chakra-ui/react'

function Notifications() {
  return (
    <>
      <div className='text-left mb-10'>
        <h2 className='font-medium text-lg md:text-2xl text-dark mb-2'>Manage Notifications</h2>
        <p className="text-gray-600">Customize your email notifications. Easily manage your preferences.</p>
      </div>
      <Grid
        templateColumns={'repeat(1, 1fr)'}
        gap={8}
      >
        <FormControl
          borderBottom="1px solid #E2E8F0"
          pb={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <FormLabel
            htmlFor="newsletters"
            mb={0}
            cursor="pointer"
            userSelect="none"
          >
            Newsletters
          </FormLabel>
          <Switch id="newsletters" colorScheme="yellow" />
        </FormControl>
        <FormControl
          borderBottom="1px solid #E2E8F0"
          pb={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <FormLabel
            htmlFor="pushNotifications"
            mb={0}
            cursor="pointer"
            userSelect="none"
          >
            Push Notifications
          </FormLabel>
          <Switch id="pushNotifications" colorScheme="yellow" />
        </FormControl>
        <FormControl
          borderBottom="1px solid #E2E8F0"
          pb={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <FormLabel
            htmlFor="emailNotifications"
            mb={0}
            cursor="pointer"
            userSelect="none"
          >
            Email Notifications
          </FormLabel>
          <Switch id="emailNotifications" colorScheme="yellow" />
        </FormControl>
        <FormControl
          borderBottom="1px solid #E2E8F0"
          pb={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <FormLabel
            htmlFor="dailyRateUpdates"
            mb={0}
            cursor="pointer"
            userSelect="none"
          >
            Daily Rate Updates
          </FormLabel>
          <Switch id="dailyRateUpdates" colorScheme="yellow" />
        </FormControl>
      </Grid>
    </>
  )
}

export default Notifications
