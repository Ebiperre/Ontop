import LandingPageLayout from '../components/LandingPageLayout/LandingPageLayout'
import SignInPageContainer from '../containers/SignInPageContainer/SignInPageContainer'

const SignInPage = () => {
    return (
        <LandingPageLayout notDisplayFooter changeHeaderBg='#fff'>
            <SignInPageContainer />
        </LandingPageLayout>
    )
}

export default SignInPage