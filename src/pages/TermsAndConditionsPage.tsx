import React from 'react'
import LandingPageLayout from '../components/LandingPageLayout/LandingPageLayout'
import TermsAndConditions from '../containers/TermsAndConditions/TermsAndConditions'

const TermsAndConditionsPage = () => {
    return (
        <LandingPageLayout notDisplayHeader>
            <TermsAndConditions />
        </LandingPageLayout>
    )
}

export default TermsAndConditionsPage