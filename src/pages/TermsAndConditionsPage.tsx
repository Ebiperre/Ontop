import LandingPageLayout from '../containers/LandingPageLayout/LandingPageLayout'
import TermsAndConditions from '../containers/TermsAndConditions/TermsAndConditions'

const TermsAndConditionsPage = () => {
    return (
        <LandingPageLayout notDisplayHeader>
            <TermsAndConditions />
        </LandingPageLayout>
    )
}

export default TermsAndConditionsPage