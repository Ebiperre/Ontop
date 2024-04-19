import React, { useState } from "react";
import visa from "../../../src/assets/icons/visa.svg";
import verve from "../../../src/assets/icons/verve.svg";
import ameXp from "../../../src/assets/icons/ameXp.svg";
import discover from "../../../src/assets/icons/discover.svg";
import mastercard from "../../../src/assets/icons/mastercard.svg";

export default function CardDetails(): JSX.Element {
    const [card, setCard] = useState({
        cardno: "",
        cardtype: "",
        expirydt: ""
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
                return null;
        }
    };

    return (
        <div className="cardetails-wrapper">
            <div className="cardetails-payment">
                <h2 className="carddetails-head">Card Details</h2>

                <div className="cardetails-form">
                    <div className="cardetails-card cardetails-space cardetails-icon-relative">
                        <label className="cardetails-label">Card Number:</label>
                        <input
                            type="text"
                            className="cardetails-input"
                            data-mask="0000 0000 0000 0000"
                            placeholder="XXXX-XXXX-XXXX-XXXX"
                            value={ccFormat(card.cardno)}
                            onChange={onChange}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                        />
                        {getCardIcon()}
                    </div>

                    <div className="cardetails-card-grp cardetails-space">
                        <div className="cardetails-card-item cardetails-icon-relative">
                            <label className="cardetails-label">Expiry date:</label>

                            <input
                                type="text"
                                name="expiry-data"
                                className="cardetails-input"
                                placeholder="mm / yy"
                                onChange={onChangeExp}
                                value={expiryFormat(card.expirydt)}
                            />
                            <i className="far fa-calendar-alt"></i>
                        </div>
                        <div className="cardetails-card-item cardetails-icon-relative">
                            <label className="cardetails-label">Cvv:</label>
                            <input
                                type="password"
                                className="cardetails-input"
                                data-mask="000"
                                placeholder="000"
                                maxLength={3}
                                pattern="[0-9][0-9][0-9]"
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                            />
                            <i className="fas fa-lock"></i>
                        </div>
                    </div>
                    <div className="cardetails-card cardetails-space cardetails-icon-relative">
                        <label className="cardetails-label">Name on Card:</label>
                        <input type="text" className="cardetails-input" placeholder="" />
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="cardetails-btn">Pay</div>
                </div>
            </div>
        </div>
    );
}
