import LandingPageLayout from '../containers/LandingPage/LandingPageLayout/LandingPageLayout'
import SignInPageContainer from '../containers/LandingPage/SignInPageContainer/SignInPageContainer'

const SignInPage = () => {
    return (
        <LandingPageLayout notDisplayFooter changeHeaderBg='#fff'>
            <SignInPageContainer />
        </LandingPageLayout>
    )
}

export default SignInPage