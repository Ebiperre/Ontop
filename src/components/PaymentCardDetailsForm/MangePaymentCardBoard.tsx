import { useContext } from "react"
import "../../../src/obfuscated.css"
import { AppContext } from "../../context/AppContext"
import { CiCreditCard1 } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";

type MangePaymentCardBoardProps = {
    openEditModal: () => void
    openAddCardModal: () => void
}

const MangePaymentCardBoard = ({
    openEditModal,
    openAddCardModal,
}: MangePaymentCardBoardProps) => {

    const { paymentCards } = useContext(AppContext)

    return (
        <div className="flex lgqw8 f0dty l66z3 d1k81 k3u76 ">
            <div className="h-full p-6">
                <h2 className="text-xl kxhcs v7056 text-left">Payment methods ({paymentCards.length})</h2>
                <p className="mt-2 dtjcu fyxhw mb-6 text-left">Add and manage your payment methods using our secure payment system.</p>

                <ul className="mt-4 flex lgqw8 l66z3 d1k81 k3u76 -space-y-px">
                    {paymentCards.length === 0 ? (
                        <div className="flex flex-col gap-2 items-center justify-center px-4 py-20">
                            <div className="p-1 h-[70px] w-[70px] lg:h-20 lg:w-20 border border-gray-300 rounded-full flex items-center justify-center mb-4 lg:mb-6">
                                <CiCreditCard1 className="text-4xl lg:text-5xl text-dark" />
                            </div>
                            <h2 className="text-dark text-xl lg:text-2xl font-medium">No Payment Methods Added</h2>
                            <p className="text-grey text-sm lg:text-base font-normal max-w-xl">You haven't added any payment methods yet. Securely store your payment details with us for easy and convenient transactions. Click below to add a payment method.</p>
                            <button type="button" onClick={openAddCardModal} className="flex items-center justify-center gap-1 text-sm lg:text-base py-2 px-4 border border-gray-300 rounded-lg mt-3">
                                <IoAdd /> Add New Card
                            </button>
                        </div>
                    ) : (
                        paymentCards.map((card, index) => {
                            return (
                                <li key={index} className="p-3 lz37y d1k81 x6keb">
                                    <div className="flex gap-x-3">
                                        <div>
                                            <div className="p-1 flex items-center justify-center l66z3 nq4w8 h-10 w-16">
                                                <img src={card.cardTypeImg} alt={card.cardType} />
                                            </div>
                                        </div>

                                        <div className="grow jjege knnnf ftz41 vj9gl sm:gap-x-3 text-left">
                                            <div>
                                                <p className="text-sm eass7 v7056 ">
                                                    <span className="capitalize">{card.cardType}</span> •••• <span>{card.cardNumber.slice(-4)}</span>
                                                </p>
                                                <p className="text-xs fyxhw ">
                                                    Debit - Expires <span>{card.expirationDate}</span>
                                                </p>
                                            </div>

                                            <div className="flex gap-x-2">
                                                <div>
                                                    {card.default ?
                                                        <button type="button" className="py-2 kdz1q pqrvw items-center dqqs4 rvi38 eass7 nq4w8 l66z3 d1k81 f0dty v7056 tgfrq cjy9h kko9e tk4f7 focus:outline-none focus:bg-gray-50">
                                                            Default
                                                        </button> :
                                                        <button type="button" className="py-2 kdz1q pqrvw items-center dqqs4 rvi38 eass7 nq4w8 l66z3 d1k81 f0dty v7056 tgfrq cjy9h kko9e tk4f7 focus:outline-none focus:bg-gray-50" disabled={true}>
                                                            Set as default
                                                        </button>
                                                    }
                                                </div>
                                                <div>
                                                    <button type="button" onClick={openEditModal} className="py-2 kdz1q pqrvw items-center dqqs4 rvi38 kxhcs nq4w8 l66z3 yj6bp hr03e v7056 bwuzh kko9e tk4f7 focus:outline-none focus:bg-gray-300" data-hs-overlay="#hs-pro-deacm">
                                                        Edit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    )}
                </ul>
            </div>
        </div>
    )
}

export default MangePaymentCardBoard