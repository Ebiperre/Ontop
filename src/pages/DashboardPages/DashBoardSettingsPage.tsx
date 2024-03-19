import { ChakraProvider } from "@chakra-ui/react"
import DashboardLayout from "../../containers/DashBoard/DashboardLayout/DashboardLayout"
import SettingsMain from "../../containers/DashBoard/DashboardSettingsPageContainer/SettingsMain"
import { theme } from "../../chakraTheme"

const DashBoardSettingsPage = () => {
    return (
        <ChakraProvider theme={theme}>
            <DashboardLayout>
                <SettingsMain />
            </DashboardLayout>
        </ChakraProvider>
    )
}

export default DashBoardSettingsPage