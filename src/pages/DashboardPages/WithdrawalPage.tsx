
// import { useEffect } from "react";
import DashboardLayout from "../../containers/DashBoardContainers/DashboardLayout/DashboardLayout"
import WithdrawalContainer from '../../containers/DashBoardContainers/DashboardWithdrawalContainer/WithdrawalContainer'


const WithdrawalPage = () => {


  return (
    <>
      <DashboardLayout showSideBar>
        <WithdrawalContainer />
      </DashboardLayout>
    </>
  )
}

export default WithdrawalPage