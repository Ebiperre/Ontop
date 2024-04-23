import { useState } from 'react';
import { LuLock } from 'react-icons/lu';
import { IoCardOutline } from "react-icons/io5";
import visa from "../../../src/assets/icons/visa.svg";
import verve from "../../../src/assets/icons/verve.svg";
import ameXp from "../../../src/assets/icons/ameXp.svg";
import discover from "../../../src/assets/icons/discover.svg";
import mastercard from "../../../src/assets/icons/mastercard.svg";

type AddCardDetailsFormProps = {
    closeModal: () => void;
}

const AddCardDetailsForm = ({ closeModal }: AddCardDetailsFormProps) => {
    const [card, setCard] = useState({
        cardno: "",
        cardtype: "",
        expirydt: "",
        pin: "",
        cvv: "",
        name: ""
    });

    const [errors, setErrors] = useState({
        cardno: "",
        expirydt: "",
        pin: "",
        cvv: "",
        name: ""
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const cartypeNew = cardnumber(e.target.value);
        setCard({
            ...card,
            cardno: e.target.value,
            cardtype: cartypeNew
        });
    };

    const cardnumber = (inputtxt: string): string => {
        const matches = inputtxt.match(/(\d+)/);
        let cardno = "";
        if (matches) {
            cardno = inputtxt.split(" - ").join("");
        }
        let cardtype1 = card.cardtype;
        const visa = /^(?:4[0-9]{2}?)$/;
        const mastercardRegEx = /^(?:5[1-5][0-9]{3})$/;
        const amexpRegEx = /^(?:3[47][0-9]{3})$/;
        const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{5})$/;
        const verveRegEx = /^(?:506[0-9]{0,14}|650[0-9]{0,13}|6512[0-9]{0,12}|652[0-9]{0,13}|653[0-9]{0,14})$/;
        if (visa.test(cardno)) {
            cardtype1 = "visa";
        } else if (mastercardRegEx.test(cardno)) {
            cardtype1 = "mastercard";
        } else if (amexpRegEx.test(cardno)) {
            cardtype1 = "amexp";
        } else if (discovRegEx.test(cardno)) {
            cardtype1 = "discover";
        } else if (verveRegEx.test(cardno)) {
            cardtype1 = "verve";
        }
        return cardtype1;
    };

    const ccFormat = (value: string): string => {
        const v = value.replace(/[^0-9]/gi, "").substr(0, 19);
        const parts = [];
        for (let i = 0; i < v.length; i += 4) {
            parts.push(v.substr(i, 4));
        }
        return parts.join(" - ");
    };

    const expiryFormat = (value: string): string => {
        const expdate = value;
        const expDateFormatter =
            expdate.replace(/\//g, "").substring(0, 2) +
            (expdate.length > 2 ? "/" : "") +
            expdate.replace(/\//g, "").substring(2, 4);

        return expDateFormatter;
    };

    const onChangeExp = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCard({
            ...card,
            expirydt: e.target.value
        });
    };

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCard({
            ...card,
            name: e.target.value
        });
    };

    const validate = (): boolean => {
        let valid = true;
        const newErrors = { ...errors };

        if (!card.cardno.match(/^\d{16,19}$/)) {
            newErrors.cardno = "Please enter a valid card number (16-19 digits).";
            valid = false;
        } else {
            newErrors.cardno = "";
        }

        if (!card.name) {
            newErrors.name = "Please enter your account name.";
            valid = false;
        } else {
            newErrors.name = "";
        }

        if (!card.expirydt.match(/^\d{2}\/\d{2}$/)) {
            newErrors.expirydt = "Please enter a valid expiration date (MM/YY).";
            valid = false;
        } else {
            newErrors.expirydt = "";
        }

        if (!card.pin.match(/^\d{4}$/)) {
            newErrors.pin = "Please enter a valid PIN (4 digits).";
            valid = false;
        } else {
            newErrors.pin = "";
        }

        if (!card.cvv.match(/^\d{3}$/)) {
            newErrors.cvv = "Please enter a valid CVV (3 digits).";
            valid = false;
        } else {
            newErrors.cvv = "";
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSave = () => {
        if (validate()) {
            console.log("Card Data:", card);
            closeModal();
        }
    };


    const getCardIcon = (): JSX.Element | null => {
        switch (card.cardtype) {
            case "visa":
                return <img src={visa} alt="Visa" />;
            case "mastercard":
                return <img src={mastercard} alt="Mastercard" />;
            case "amexp":
                return <img src={ameXp} alt="American Express" />;
            case "discover":
                return <img src={discover} alt="Discover" />;
            case "verve":
                return <img src={verve} alt="Verve" />;
            default:
                return <IoCardOutline size={20} />;
        }
    };

    return (
        <form action="" className='w-full'>
            <div className="max-h-full w-full max-w-2xl m-4 mx-auto flex lgqw8 f0dty k3u76 jpq01 shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]">
                <div className="p-4 flex azaj8 items-center bg8gm d1k81">
                    <h3 className="font-semibold v7056 ">
                        Add card details
                    </h3>
                    <button type="button" onClick={closeModal} className="w-8 gpe5b pqrvw pdrgo items-center dqqs4 iwtls l66z3 yj6bp em545 v7056 gk940 kko9e tk4f7 focus:outline-none focus:bg-gray-200" data-hs-overlay="#hs-pro-dmacm">
                        <span className="sr-only">Close modal</span>
                        <svg className="flex-shrink-0 sfo8l h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                    </button>
                </div>
                <div className="p-4 pk1vk mws46 szov1 bp4e4 m2y1i">
                    <div className="space-y-5">
                        <div className="flex azaj8 items-center">
                            <label htmlFor="hs-pro-decmcd" className="block tn07p dtjcu eass7 v7056 ">
                                Card details
                            </label>
                            {getCardIcon()}
                        </div>
                        <div className="space-y-2">
                            <div>
                                <div className="relative">
                                    <div className="absolute vt6s4 atruh flex items-center ootlu c8qx6 cursor-pointer">
                                        <svg className="flex-shrink-0 sfo8l qcpnt fyxhw " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                                    </div>
                                    <input
                                        required
                                        type="text"
                                        className={`py-2 xumsi m9su6 block w-full d1k81 nq4w8 dtjcu ggbym input-focus kko9e tk4f7 ${errors.cardno ? 'border-red-500' : ''}`}
                                        placeholder="Card number (i.e Enter the 16 - 19 digit card number)"
                                        data-mask="0000 0000 0000 0000"
                                        value={ccFormat(card.cardno)}
                                        onChange={onChange}
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                                        }}
                                    />
                                </div>
                                {errors.cardno && <p className="text-red-500 text-xs mt-1">{errors.cardno}</p>}
                            </div>
                            <div className="grid zvyci gap-2">
                                <div>
                                    <input
                                        required
                                        type="text"
                                        className={`py-2 vrf2y block w-full d1k81 nq4w8 dtjcu ggbym input-focus kko9e tk4f7 ${errors.name ? 'border-red-500' : ''}`}
                                        placeholder="Account Holder Name"
                                        value={card.name}
                                        onChange={onChangeName}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <input
                                        required
                                        type="password"
                                        className={`py-2 vrf2y block w-full d1k81 nq4w8 dtjcu v7056 input-focus ${errors.pin ? 'border-red-500' : ''}`}
                                        placeholder="Pin (i.e Enter your card pin)"
                                        data-mask="000"
                                        maxLength={4}
                                        pattern="[0-9][0-9][0-9]"
                                        onChange={(e) => setCard({ ...card, pin: e.target.value })}
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                                        }}
                                    />
                                    {errors.pin && <p className="text-red-500 text-xs mt-1">{errors.pin}</p>}
                                </div>
                                <div>
                                    <input
                                        required
                                        type="text"
                                        className={`py-2 vrf2y block w-full d1k81 nq4w8 dtjcu ggbym input-focus kko9e tk4f7 ${errors.expirydt ? 'border-red-500' : ''}`}
                                        placeholder="Expiration (MM/YY)"
                                        onChange={onChangeExp}
                                        value={expiryFormat(card.expirydt)}
                                    />
                                    {errors.expirydt && <p className="text-red-500 text-xs mt-1">{errors.expirydt}</p>}
                                </div>
                                <div>
                                    <input
                                        required
                                        type="text"
                                        className={`py-2 vrf2y block w-full d1k81 nq4w8 dtjcu v7056 input-focus ${errors.cvv ? 'border-red-500' : ''}`}
                                        placeholder="CVV (i.e 000)"
                                        data-mask="000"
                                        maxLength={3}
                                        pattern="[0-9][0-9][0-9]"
                                        onChange={(e) => setCard({ ...card, cvv: e.target.value })}
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                                        }}
                                    />
                                    {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                                </div>
                            </div>
                            <p className="inline-flex items-center azej2 rvi38 fyxhw ">
                                <LuLock />
                                This is a secure form
                            </p>
                        </div>
                        <div className="flex">
                            <input
                                type="checkbox"
                                className="shrink-0 jhf5t border-orange sg5ei active:text-orange4  focus:ring-orange kko9e tk4f7 !text-orange3"
                                id="hs-pro-dacmnrva"
                            />
                            <label htmlFor="hs-pro-dacmnrva" className="text-sm v7056 q9djf ">
                                Set as default payment method
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full p-4 flex prqc8 items-center gap-x-2">
                    <button type="button" onClick={closeModal} className="py-2 vrf2y pqrvw items-center dqqs4 dtjcu eass7 nq4w8 l66z3 d1k81 f0dty v7056 tgfrq cjy9h kko9e tk4f7 focus:outline-none focus:bg-gray-50 hover:bg-slate-300" data-hs-overlay="#hs-pro-dmacm">
                        Cancel
                    </button>
                    <button type="submit" onClick={handleSave} className="py-2 vrf2y pqrvw items-center dqqs4 dtjcu kxhcs nq4w8 l66z3 yj6bp wpeco dafkk nkmbv kko9e tk4f7 focus:outline-none focus:ring-2 focus:ring-orange bg-orange2 hover:bg-orange" data-hs-overlay="#hs-pro-dmacm">
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddCardDetailsForm;
