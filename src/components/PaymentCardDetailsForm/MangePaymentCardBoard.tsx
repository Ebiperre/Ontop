import { useContext } from "react"
import "../../../src/obfuscated.css"
import { AppContext } from "../../context/AppContext"

type MangePaymentCardBoardProps = {
    openEditModal: () => void
    openAddCardModal: () => void
    openManageCardModal: () => void
}

const MangePaymentCardBoard = ({
    openEditModal,
    openAddCardModal,
    openManageCardModal
}: MangePaymentCardBoardProps) => {

    const { paymentCards } = useContext(AppContext)

    return (
        <div className="flex lgqw8 f0dty l66z3 d1k81 k3u76 ">
            <div className="h-full p-6">
                <h2 className="text-xl kxhcs v7056 text-left">Payment methods</h2>
                <p className="mt-2 dtjcu fyxhw mb-6 text-left">Add and manage your payment methods using our secure payment system.</p>

                <ul className="mt-4 flex lgqw8 l66z3 d1k81 k3u76 -space-y-px">
                    {paymentCards.map((card, index) => {
                        return (
                            <li key={index} className="p-3 lz37y d1k81 x6keb">
                                <div className="flex gap-x-3">
                                    <div>
                                        <div className="py-2.5 vrf2y l66z3 nq4w8 h-10 w-16">
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
                    })}
                </ul>
            </div>

            <div className="flex -space-x-px lz37y d1k81 hl4p4 gdqph">
                <button type="button" onClick={openManageCardModal} className="py-3 pgrdw w-full pqrvw pdrgo items-center dqqs4 dtjcu eass7 e0g5v f0dty v7056 tgfrq cjy9h kko9e tk4f7 focus:outline-none focus:bg-gray-50" data-hs-overlay="#hs-pro-dmcm">
                    Manage cards
                </button>
                <button type="button" onClick={openAddCardModal} className="py-3 pgrdw w-full pqrvw pdrgo items-center dqqs4 dtjcu eass7 v9zg6 f0dty v7056 tgfrq cjy9h kko9e tk4f7 focus:outline-none focus:bg-gray-50" data-hs-overlay="#hs-pro-dmacm">
                    <svg className="flex-shrink-0 sfo8l h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                    Add new card
                </button>
            </div>
        </div>
    )
}

export default MangePaymentCardBoard