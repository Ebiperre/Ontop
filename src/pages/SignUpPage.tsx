import LandingPageLayout from '../containers/LandingPage/LandingPageLayout/LandingPageLayout'
import SignUpPageContainer from '../containers/LandingPage/SignUpPageContainer/SignUpPageContainer'

const SignUpPage = () => {
    return (
        <LandingPageLayout notDisplayFooter changeHeaderBg='#fff'>
            <SignUpPageContainer />
        </LandingPageLayout>
    )
}

export default SignUpPage