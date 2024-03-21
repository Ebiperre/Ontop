import DashboardLayout from "../../containers/DashBoard/DashboardLayout/DashboardLayout"
import WithdrawalContainer from '../../containers/DashBoard/DashboardWithdrawalContainer/WithdrawalContainer'


const WithdrawalPage = () => {
  return (
    <>
      <DashboardLayout>
       <WithdrawalContainer />
      </DashboardLayout>
    </>
  )
}

export default WithdrawalPage