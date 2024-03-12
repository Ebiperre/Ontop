import { ChakraProvider } from "@chakra-ui/react"
import DashboardLayout from "../../containers/DashBoard/DashboardLayout/DashboardLayout"
import SettingsMain from "../../containers/DashBoard/DashboardSettingsPageContainer/SettingsMain"
import { theme } from "../../chakraTheme"

const DashBoardSettingsPage = () => {
    return (
        // <SimpleBar style={{ maxHeight: '100vh' }}>
        <ChakraProvider theme={theme}>
            <DashboardLayout>
                <SettingsMain />
            </DashboardLayout>
        </ChakraProvider>
        // </SimpleBar>
    )
}

export default DashBoardSettingsPage