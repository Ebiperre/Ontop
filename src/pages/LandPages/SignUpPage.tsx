import LandingPageLayout from '../../containers/LandingPagesContainer/LandingPageLayout/LandingPageLayout'
import SignUpPageContainer from '../../containers/LandingPagesContainer/SignUpPageContainer/SignUpPageContainer'

const SignUpPage = () => {
    return (
        <LandingPageLayout notDisplayFooter changeHeaderBg='#fff'>
            <SignUpPageContainer />
        </LandingPageLayout>
    )
}

export default SignUpPage