import LandingPageLayout from '../../containers/LandingPagesContainer/LandingPageLayout/LandingPageLayout'
import SignInPageContainer from '../../containers/LandingPagesContainer/SignInPageContainer/SignInPageContainer'

const SignInPage = () => {
    return (
        <LandingPageLayout notDisplayFooter changeHeaderBg='#fff'>
            <SignInPageContainer />
        </LandingPageLayout>
    )
}

export default SignInPage