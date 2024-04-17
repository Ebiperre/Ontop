
// import { useEffect } from "react";
import DashboardLayout from "../../containers/DashBoard/DashboardLayout/DashboardLayout"
import WithdrawalContainer from '../../containers/DashBoard/DashboardWithdrawalContainer/WithdrawalContainer'


const WithdrawalPage = () => {

  
  return (
    <>
      <DashboardLayout showSideBar={false}>
       <WithdrawalContainer />
      </DashboardLayout>
    </>
  )
}

export default WithdrawalPage