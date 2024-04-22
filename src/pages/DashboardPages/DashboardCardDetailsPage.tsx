import DashboardLayout from "../../containers/DashBoard/DashboardLayout/DashboardLayout";
import CardDetails from '../../containers/DashBoard/DashBoardGiftCardPageContainer/CardDetails'


export default function() {
    return (
        <DashboardLayout showSideBar>
            <CardDetails/>
        </DashboardLayout>
    );
};