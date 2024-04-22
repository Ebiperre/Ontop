import { Container } from '@chakra-ui/layout'
import SettingsSidebar from '../../../components/SettingsSidebar/SettingsSidebar'
import SettingsContent from '../../../components/SettingsContent/SettingsContent'
import Profile from '../../../components/SettingsSidebar/Profile'

export default function SettingsMain() {
  return (
    <>
      <div className='relative h-[350px] mb-32'>
        <div className="bg-accountProfilePattern brightness-90 h-full w-full bg-[100%]" />
        <div className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2'><Profile /></div>
      </div>
      <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
        <SettingsSidebar />
        <SettingsContent />
      </Container>
    </>
  )
}
