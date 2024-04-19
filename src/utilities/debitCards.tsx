import visa from "../../src/assets/icons/visa.svg";
import verve from "../../src/assets/icons/verve.svg";
import ameXp from "../../src/assets/icons/ameXp.svg";
import discover from "../../src/assets/icons/discover.svg";
import mastercard from "../../src/assets/icons/mastercard.svg";

export type debitCardType = {
    id: string;
    default: boolean;
    cardNumber: string;
    cardholderName: string;
    expirationDate: string;
    cvv: string;
    issuingBank: string;
    cardType: string;
    cardTypeImg: string;
}[];

export const debitCards: debitCardType = [
    {
        id: "01",
        default: false,
        cardNumber: "5061 4604 9123 4567",
        cardholderName: "Chinwe Okonkwo",
        expirationDate: "11/25",
        cvv: "789",
        issuingBank: "Guaranty Trust Bank (GTBank)",
        cardType: "mastercard",
        cardTypeImg: mastercard,
    },
    {
        id: "02",
        default: false,
        cardNumber: "5399 7100 1234 5678",
        cardholderName: "Emeka Eze",
        expirationDate: "09/24",
        cvv: "234",
        issuingBank: "First Bank of Nigeria",
        cardType: "verve",
        cardTypeImg: verve,
    },
    {
        id: "03",
        default: false,
        cardNumber: "5370 1234 5678 9012",
        cardholderName: "Aisha Yusuf",
        expirationDate: "05/23",
        cvv: "456",
        issuingBank: "Zenith Bank",
        cardType: "visa",
        cardTypeImg: visa,
    },
    {
        id: "04",
        default: true,
        cardNumber: "5061 4604 9876 5432",
        cardholderName: "Abubakar Musa",
        expirationDate: "03/25",
        cvv: "321",
        issuingBank: "United Bank for Africa (UBA)",
        cardType: "mastercard",
        cardTypeImg: ameXp,
    },
    {
        id: "05",
        default: false,
        cardNumber: "5399 7100 8765 4321",
        cardholderName: "Chinyere Nwachukwu",
        expirationDate: "08/23",
        cvv: "678",
        issuingBank: "Access Bank",
        cardType: "visa",
        cardTypeImg: discover,
    },
];