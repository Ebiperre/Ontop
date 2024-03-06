import SteamImage from "../../../assets/images/card_steam.png"
import AmazonImage from "../../../assets/images/card_amazon.png"
import GoogleImage from "../../../assets/images/card_google.png"
import AppleImage from "../../../assets/images/card_apple.png"
import VisaImage from "../../../assets/images/card_visa.png"
import RazerImage from "../../../assets/images/card_razer.png"
import SephoraImage from "../../../assets/images/card_sephora.png"


interface GiftCard {
    id: number;
    image: string;
    title: string;
}


const cards = [
    {   
        id: 1,
        image: AmazonImage,
        title: 'Amazon'
    },
    {
        id: 2,
        image: SteamImage,
        title: 'Steam'
    },
    {
        image: GoogleImage,
        title: 'Google'
    },
    {
        id: 3,
        image: AppleImage,
        title: 'Apple'
    },
    {
        id: 4,
        image: VisaImage,
        title: 'Visa'
    },
    {
        id: 5,
        image: RazerImage,
        title: 'Razer'
    },
    {
        id: 6,
        image: SephoraImage,
        title: 'Sephora'
    },
]
