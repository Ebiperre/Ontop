import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import AccountSettings from './AccountSettings'
import Actions from './Actions'
import ManagePassword from './ManagePassword'
import Notifications from './Notifications'
import AccountDeletion from './AccountDeletion'

const SettingsContent = () => {
  const tabs = ['Account', 'Password', 'Notifications', 'Security']

  return (
    <Box
      as="main"
      flex={3}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      pt={5}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="gray.200"
      style={{ transform: 'translateY(-100px)', overflow: 'auto', width: '100%' }}
    >
      <Tabs>
        <TabList px={5} overflow={'auto'}>
          {tabs.map(tab => (
            <Tab
              key={tab}
              mx={3}
              px={0}
              py={3}
              fontWeight="semibold"
              color="brand.cadet"
              borderBottomWidth={1}
              _active={{ bg: 'transparent' }}
              _selected={{ color: 'brand.dark', borderColor: 'brand.orange' }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels px={3} mt={5}>
          <TabPanel>
            <AccountSettings />
          </TabPanel>
          <TabPanel>
            <ManagePassword />
          </TabPanel>
          <TabPanel>
            <Notifications />
          </TabPanel>
          <TabPanel>
            <AccountDeletion />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Actions />
    </Box>
  )
}

export default SettingsContent
