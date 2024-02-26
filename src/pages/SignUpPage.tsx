import LandingPageLayout from '../components/LandingPageLayout/LandingPageLayout'
import SignUpPageContainer from '../containers/SignUpPageContainer/SignUpPageContainer'

const SignUpPage = () => {
    return (
        <LandingPageLayout notDisplayFooter changeHeaderBg='#fff'>
            <SignUpPageContainer />
        </LandingPageLayout>
    )
}

export default SignUpPage