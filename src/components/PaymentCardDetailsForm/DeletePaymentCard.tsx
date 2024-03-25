import "../../../src/obfuscated.css"

type DeletePaymentCardProps = {
    closeModal: () => void
}

const DeletePaymentCard = ({ closeModal }: DeletePaymentCardProps) => {
    return (
        <div className="relative fagtz w-full max-w-2xl m-4 bx801 flex lgqw8 f0dty k3u76 jpq01 shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]">
            <div className="absolute yfxdb uhq4v z-10">
                <button type="button" onClick={closeModal} className="w-8 gpe5b pqrvw pdrgo items-center dqqs4 iwtls l66z3 yj6bp em545 v7056 gk940 kko9e tk4f7 focus:outline-none focus:bg-gray-200" data-hs-overlay="#hs-pro-dlcam">
                    <span className="sr-only">Close modal</span>
                    <svg className="flex-shrink-0 sfo8l h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                </button>
            </div>

            <div className="p-4">
                <h3 className="text-lg eass7 v7056">
                    Are you sure?
                </h3>
                <p className="mt-1 fyxhw">
                    Are you sure you want to delete this card?
                </p>

                <div className="mt-4 flex prqc8 gap-x-3">
                    <button type="button" onClick={closeModal} className="py-2 vrf2y pqrvw items-center dqqs4 dtjcu eass7 nq4w8 l66z3 d1k81 f0dty v7056 tgfrq cjy9h kko9e tk4f7 focus:outline-none focus:bg-gray-50" data-hs-overlay="#hs-pro-dlcam">
                        Cancel
                    </button>
                    <button type="button" onClick={closeModal} className="py-2 vrf2y pqrvw items-center dqqs4 dtjcu kxhcs nq4w8 l66z3 yj6bp ii7lz dafkk w9mr4 kko9e tk4f7 bg-deleteRed">
                        Yes, I’m sure
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletePaymentCard