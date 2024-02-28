import React from 'react'
import LandingPageLayout from '../components/LandingPageLayout/LandingPageLayout'
import ServicePageContainer from '../containers/ServicePageContainer/ServicePageContainer'

const ServicePage = () => {
  return (
    <LandingPageLayout>
        <ServicePageContainer />
    </LandingPageLayout>
  )
}

export default ServicePage