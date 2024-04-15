export type debitCardType = {
    cardNumber: string;
    cardholderName: string;
    expirationDate: string;
    cvv: string;
    issuingBank: string;
    cardType: string;
}[];

export const debitCards: debitCardType = [
    {
        cardNumber: "5061 4604 9123 4567",
        cardholderName: "Chinwe Okonkwo",
        expirationDate: "11/25",
        cvv: "789",
        issuingBank: "Guaranty Trust Bank (GTBank)",
        cardType: "Mastercard"
    },
    {
        cardNumber: "5399 7100 1234 5678",
        cardholderName: "Emeka Eze",
        expirationDate: "09/24",
        cvv: "234",
        issuingBank: "First Bank of Nigeria",
        cardType: "Visa"
    },
    {
        cardNumber: "5370 1234 5678 9012",
        cardholderName: "Aisha Yusuf",
        expirationDate: "05/23",
        cvv: "456",
        issuingBank: "Zenith Bank",
        cardType: "Visa"
    },
    {
        cardNumber: "5061 4604 9876 5432",
        cardholderName: "Abubakar Musa",
        expirationDate: "03/25",
        cvv: "321",
        issuingBank: "United Bank for Africa (UBA)",
        cardType: "Mastercard"
    },
    {
        cardNumber: "5399 7100 8765 4321",
        cardholderName: "Chinyere Nwachukwu",
        expirationDate: "08/23",
        cvv: "678",
        issuingBank: "Access Bank",
        cardType: "Visa"
    },
    {
        cardNumber: "5061 4604 5555 1234",
        cardholderName: "Oluwaseun Okeke",
        expirationDate: "02/24",
        cvv: "890",
        issuingBank: "First City Monument Bank (FCMB)",
        cardType: "Mastercard"
    },
    {
        cardNumber: "5370 1234 5678 2222",
        cardholderName: "Fatima Ibrahim",
        expirationDate: "07/23",
        cvv: "567",
        issuingBank: "Union Bank of Nigeria",
        cardType: "Visa"
    },
    {
        cardNumber: "5061 4604 3333 9999",
        cardholderName: "Nnamdi Obi",
        expirationDate: "12/24",
        cvv: "432",
        issuingBank: "Sterling Bank",
        cardType: "Mastercard"
    },
    {
        cardNumber: "5399 7100 4444 8888",
        cardholderName: "Amina Ahmed",
        expirationDate: "10/23",
        cvv: "345",
        issuingBank: "Stanbic IBTC Bank",
        cardType: "Visa"
    },
    {
        cardNumber: "5061 4604 7777 6666",
        cardholderName: "Yakubu Bello",
        expirationDate: "06/25",
        cvv: "901",
        issuingBank: "Polaris Bank",
        cardType: "Mastercard"
    },
];