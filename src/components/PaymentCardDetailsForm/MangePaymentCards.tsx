import "../../../src/obfuscated.css"

type MangePaymentCardsProps = {
    closeModal: () => void
    openEditModal: () => void
}

const MangePaymentCards = ({
    closeModal,
    openEditModal
}: MangePaymentCardsProps) => {
    return (
        <div className="max-h-full w-full max-w-2xl m-4 flex lgqw8 f0dty k3u76 jpq01 shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]">
            <div className="p-4 flex azaj8 items-center bg8gm d1k81">
                <h3 className="font-semibold v7056">
                    Manage Cards
                </h3>

                <button type="button" onClick={closeModal} className="w-8 gpe5b pqrvw pdrgo items-center dqqs4 iwtls l66z3 yj6bp em545 v7056 gk940 kko9e tk4f7 focus:outline-none focus:bg-gray-200" data-hs-overlay="#hs-pro-dmcm">
                    <span className="sr-only">Close modal</span>
                    <svg className="flex-shrink-0 sfo8l h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                </button>
            </div>

            <form className="h-full overflow-auto">
                <div className="p-4">
                    <ul className="flex lgqw8 fngso phe4g gdqph">
                        <li className="pt-4 first:pt-0">
                            <div className="flex gap-x-3">
                                <div>
                                    <div className="py-2.5 vrf2y l66z3 nq4w8">
                                        <svg className="flex-shrink-0 kbkb7 h-auto" width="35" height="22" viewBox="0 0 35 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_666_270977asdjn12" maskUnits="userSpaceOnUse" x="0" y="5" width="35" height="12">
                                                <path d="M34.5 5.4751H0.5V16.5081H34.5V5.4751Z" fill="white"></path>
                                            </mask>
                                            <g mask="url(#mask0_666_270977asdjn12)">
                                                <path d="M15.239 16.3211H12.468L14.202 5.6621H16.973L15.239 16.3211ZM10.139 5.6621L7.487 12.9891L7.181 11.4081L6.246 6.6311C6.246 6.6311 6.127 5.6791 4.937 5.6791H0.551L0.5 5.8491C0.5 5.8491 1.843 6.1211 3.407 7.0731L5.821 16.3381H8.711L13.131 5.6791L10.139 5.6621ZM31.95 16.3211H34.5L32.273 5.6621H30.046C29.009 5.6621 28.771 6.4611 28.771 6.4611L24.64 16.3211H27.53L28.108 14.7401H31.627L31.95 16.3211ZM28.907 12.5471L30.369 8.5521L31.185 12.5471H28.907ZM24.844 8.2291L25.235 5.9341C25.235 5.9341 24.011 5.4751 22.736 5.4751C21.359 5.4751 18.095 6.0701 18.095 9.0111C18.095 11.7651 21.937 11.7991 21.937 13.2441C21.937 14.6891 18.503 14.4341 17.364 13.5161L16.956 15.9131C16.956 15.9131 18.197 16.5081 20.084 16.5081C21.971 16.5081 24.827 15.5221 24.827 12.8531C24.827 10.0821 20.951 9.8271 20.951 8.6201C20.951 7.4131 23.654 7.5661 24.844 8.2291Z" fill="#2566AF"></path>
                                                <path d="M7.181 11.4252L6.246 6.6312C6.246 6.6312 6.127 5.6792 4.937 5.6792H0.551L0.5 5.8492C0.5 5.8492 2.608 6.2912 4.614 7.9232C6.552 9.4702 7.181 11.4252 7.181 11.4252Z" fill="#E6A540"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex justify-between w-full gap-5 flex-wrap">
                                    <div>
                                        <p className="text-sm eass7 v7056">
                                            Visa •••• 9016
                                        </p>
                                        <p className="text-xs fyxhw">
                                            Debit - Expires 12/25
                                        </p>
                                    </div>

                                    <div className="flex gap-x-2">
                                        <div>
                                            <button type="button" className="py-2.5 px-4 pqrvw pdrgo items-center dqqs4 in9y1 f0dty l66z3 d1k81 v7056 rvi38 eass7 nq4w8 tgfrq ja4wp cjy9h kko9e tk4f7 g80vr focus:outline-none focus:bg-gray-100" disabled={true}>
                                                Default
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button" onClick={openEditModal} className="py-2.5 px-4 pqrvw pdrgo items-center dqqs4 in9y1 bfddl l66z3 wb00i dafkk rvi38 eass7 nq4w8 tgfrq ja4wp nim3u text-dark border-none hover:bg-neutral-400 bg-neutral-300" data-hs-overlay="#hs-pro-deacm">
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="pt-4 first:pt-0">
                            <div className="flex gap-x-3">
                                <div>
                                    <div className="py-2.5 vrf2y l66z3 nq4w8">
                                        <svg className="flex-shrink-0 kbkb7 h-auto" width="35" height="22" viewBox="0 0 35 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_666_271011ca2nkas1" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="22">
                                                <path d="M34.5 0.375H0.5V21.387H34.5V0.375Z" fill="white"></path>
                                            </mask>
                                            <g mask="url(#mask0_666_271011ca2nkas1)">
                                                <path d="M22.0899 19.1431H12.9099V2.61914H22.0899V19.1431Z" fill="#FF5F00"></path>
                                                <path d="M13.488 10.881C13.488 7.532 15.052 4.54 17.5 2.619C15.647 1.157 13.369 0.375 11.006 0.375C5.209 0.375 0.5 5.084 0.5 10.881C0.5 16.678 5.209 21.387 11.006 21.387C13.369 21.387 15.647 20.605 17.5 19.143C15.052 17.222 13.488 14.23 13.488 10.881Z" fill="#EB001B"></path>
                                                <path d="M34.5 10.881C34.5 16.678 29.791 21.387 23.994 21.387C21.631 21.387 19.353 20.605 17.5 19.143C19.948 17.222 21.512 14.23 21.512 10.881C21.512 7.532 19.948 4.54 17.5 2.619C19.353 1.157 21.631 0.375 23.994 0.375C29.791 0.375 34.5 5.084 34.5 10.881Z" fill="#F79E1B"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex justify-between w-full gap-5 flex-wrap">
                                    <div>
                                        <p className="text-sm eass7 v7056">
                                            MasterCard •••• 4242
                                        </p>
                                        <p className="text-xs fyxhw">
                                            Debit - Expires 04/24
                                        </p>
                                    </div>

                                    <div className="flex gap-x-2">
                                        <div>
                                            <button type="button" className="py-2.5 px-4 pqrvw pdrgo items-center dqqs4 in9y1 f0dty l66z3 d1k81 v7056 rvi38 eass7 nq4w8 tgfrq ja4wp cjy9h kko9e tk4f7 g80vr focus:outline-none focus:bg-gray-100">
                                                Set as default
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button" onClick={openEditModal} className="py-2.5 px-4 pqrvw pdrgo items-center dqqs4 in9y1 bfddl l66z3 wb00i dafkk rvi38 eass7 nq4w8 tgfrq ja4wp nim3u text-dark border-none hover:bg-neutral-400 bg-neutral-300" data-hs-overlay="#hs-pro-deacm">
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="pt-4 first:pt-0">
                            <div className="flex gap-x-3">
                                <div>
                                    <div className="py-2.5 vrf2y l66z3 nq4w8">
                                        <svg className="flex-shrink-0 kbkb7 h-auto" width="35" height="22" viewBox="0 0 35 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_666_271011sd1-dk122j" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="22">
                                                <path d="M34.5 0.375H0.5V21.387H34.5V0.375Z" fill="white"></path>
                                            </mask>
                                            <g mask="url(#mask0_666_271011sd1-dk122j)">
                                                <path d="M22.0899 19.1431H12.9099V2.61914H22.0899V19.1431Z" fill="#FF5F00"></path>
                                                <path d="M13.488 10.881C13.488 7.532 15.052 4.54 17.5 2.619C15.647 1.157 13.369 0.375 11.006 0.375C5.209 0.375 0.5 5.084 0.5 10.881C0.5 16.678 5.209 21.387 11.006 21.387C13.369 21.387 15.647 20.605 17.5 19.143C15.052 17.222 13.488 14.23 13.488 10.881Z" fill="#EB001B"></path>
                                                <path d="M34.5 10.881C34.5 16.678 29.791 21.387 23.994 21.387C21.631 21.387 19.353 20.605 17.5 19.143C19.948 17.222 21.512 14.23 21.512 10.881C21.512 7.532 19.948 4.54 17.5 2.619C19.353 1.157 21.631 0.375 23.994 0.375C29.791 0.375 34.5 5.084 34.5 10.881Z" fill="#F79E1B"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex justify-between w-full gap-5 flex-wrap">
                                    <div>
                                        <p className="text-sm eass7 v7056">
                                            MasterCard •••• 0232
                                        </p>
                                        <p className="text-xs fyxhw">
                                            Debit - <span className="text-red-600">Expired</span> 01/20
                                        </p>
                                    </div>

                                    <div className="flex gap-x-2">
                                        <div>
                                            <button type="button" className="py-2.5 px-4 pqrvw pdrgo items-center dqqs4 in9y1 f0dty l66z3 d1k81 v7056 rvi38 eass7 nq4w8 tgfrq ja4wp cjy9h kko9e tk4f7 g80vr focus:outline-none focus:bg-gray-100" disabled={true}>
                                                Set as default
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button" onClick={openEditModal} className="py-2.5 px-4 pqrvw pdrgo items-center dqqs4 in9y1 bfddl l66z3 wb00i dafkk rvi38 eass7 nq4w8 tgfrq ja4wp nim3u text-dark border-none hover:bg-neutral-400 bg-neutral-300" data-hs-overlay="#hs-pro-deacm">
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="pt-4 first:pt-0">
                            <div className="flex gap-x-3">
                                <div>
                                    <div className="py-2.5 vrf2y l66z3 nq4w8">
                                        <svg className="flex-shrink-0 kbkb7 h-auto" width="35" height="22" viewBox="0 0 35 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_666_270977zsc1kk1kk" maskUnits="userSpaceOnUse" x="0" y="5" width="35" height="12">
                                                <path d="M34.5 5.4751H0.5V16.5081H34.5V5.4751Z" fill="white"></path>
                                            </mask>
                                            <g mask="url(#mask0_666_270977zsc1kk1kk)">
                                                <path d="M15.239 16.3211H12.468L14.202 5.6621H16.973L15.239 16.3211ZM10.139 5.6621L7.487 12.9891L7.181 11.4081L6.246 6.6311C6.246 6.6311 6.127 5.6791 4.937 5.6791H0.551L0.5 5.8491C0.5 5.8491 1.843 6.1211 3.407 7.0731L5.821 16.3381H8.711L13.131 5.6791L10.139 5.6621ZM31.95 16.3211H34.5L32.273 5.6621H30.046C29.009 5.6621 28.771 6.4611 28.771 6.4611L24.64 16.3211H27.53L28.108 14.7401H31.627L31.95 16.3211ZM28.907 12.5471L30.369 8.5521L31.185 12.5471H28.907ZM24.844 8.2291L25.235 5.9341C25.235 5.9341 24.011 5.4751 22.736 5.4751C21.359 5.4751 18.095 6.0701 18.095 9.0111C18.095 11.7651 21.937 11.7991 21.937 13.2441C21.937 14.6891 18.503 14.4341 17.364 13.5161L16.956 15.9131C16.956 15.9131 18.197 16.5081 20.084 16.5081C21.971 16.5081 24.827 15.5221 24.827 12.8531C24.827 10.0821 20.951 9.8271 20.951 8.6201C20.951 7.4131 23.654 7.5661 24.844 8.2291Z" fill="#2566AF"></path>
                                                <path d="M7.181 11.4252L6.246 6.6312C6.246 6.6312 6.127 5.6792 4.937 5.6792H0.551L0.5 5.8492C0.5 5.8492 2.608 6.2912 4.614 7.9232C6.552 9.4702 7.181 11.4252 7.181 11.4252Z" fill="#E6A540"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex justify-between w-full gap-5 flex-wrap">
                                    <div>
                                        <p className="text-sm eass7 v7056">
                                            MasterCard •••• 0232
                                        </p>
                                        <p className="text-xs fyxhw">
                                            Debit - <span className="text-red-600">Expired</span> 06/20
                                        </p>
                                    </div>

                                    <div className="flex gap-x-2">
                                        <div>
                                            <button type="button" className="py-2.5 px-4 pqrvw pdrgo items-center dqqs4 in9y1 f0dty l66z3 d1k81 v7056 rvi38 eass7 nq4w8 tgfrq ja4wp cjy9h kko9e tk4f7 g80vr focus:outline-none focus:bg-gray-100" disabled={true}>
                                                Set as default
                                            </button>
                                        </div>
                                        <div>
                                            <button type="button" className="py-2.5 px-4 pqrvw pdrgo items-center dqqs4 in9y1 bfddl l66z3 wb00i dafkk rvi38 eass7 nq4w8 tgfrq ja4wp nim3u text-dark border-none hover:bg-neutral-400 bg-neutral-300" data-hs-overlay="#hs-pro-dmcm">
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    )
}

export default MangePaymentCards