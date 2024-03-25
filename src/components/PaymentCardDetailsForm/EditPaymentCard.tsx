type EditPaymentCardProps = {
  closeModal: () => void
  openDeleteModal: () => void
}

const EditPaymentCard = ({ closeModal, openDeleteModal }: EditPaymentCardProps) => {
  return (
    <div className="max-h-full w-full max-w-2xl m-4 flex lgqw8 f0dty k3u76 jpq01 shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]">
      <div className="p-4 flex azaj8 items-center bg8gm d1k81">
        <h3 className="font-semibold v7056">
          Edit card details
        </h3>

        <button type="button" onClick={closeModal} className="w-8 gpe5b pqrvw pdrgo items-center dqqs4 iwtls l66z3 yj6bp em545 v7056 gk940 kko9e tk4f7 focus:outline-none focus:bg-gray-200" data-hs-overlay="#hs-pro-deacm">
          <span className="sr-only">Close modal</span>
          <svg className="flex-shrink-0 sfo8l h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
        </button>
      </div>

      <div className="p-4 pk1vk mws46 szov1 bp4e4 m2y1i">
        <div className="space-y-5">
          <div className="flex azaj8 items-center">
            <label htmlFor="hs-pro-decmcd" className="block tn07p dtjcu eass7 v7056">
              Card details
            </label>

            <div className="flex gap-x-2">
              <svg className="w-8 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 32" width="56" height="32" fill="none">
                <path d="M34.482 9a8.17 8.17 0 0 1 3.052.577l-.463 2.926-.308-.143a5.638 5.638 0 0 0-2.534-.52c-1.343 0-1.946.591-1.96 1.168 0 .635.73 1.053 1.92 1.673 1.96.966 2.868 2.148 2.855 3.69C37.016 21.184 34.692 23 31.122 23c-1.526-.015-2.996-.347-3.794-.721l.476-3.043.448.217c1.106.505 1.834.72 3.192.72.98 0 2.03-.418 2.043-1.325 0-.592-.447-1.024-1.763-1.688-1.288-.649-3.01-1.73-2.982-3.676.014-2.639 2.38-4.484 5.74-4.484ZM21.798 22.798H25.2l2.128-13.552h-3.402l-2.128 13.552Z" fill="#00579F"></path>
                <path clip-rule="evenodd" d="M46.255 9.246h-2.631c-.812 0-1.428.245-1.779 1.124l-5.053 12.428h3.57l.714-2.033h4.368c.098.476.406 2.033.406 2.033H49L46.255 9.246Zm-4.2 8.75 1.36-3.79c-.007.01.038-.116.104-.305.098-.28.243-.693.343-.993l.237 1.167s.645 3.244.785 3.922h-2.828Z" fill="#00579F" fill-rule="evenodd"></path>
                <path d="m15.624 18.487 3.332-9.241h3.598l-5.348 13.538h-3.598l-3.052-11.852c2.156 1.168 4.088 3.518 4.704 5.68l.364 1.875Z" fill="#00579F"></path>
                <path d="M12.53 9.246H7.056L7 9.519c4.27 1.125 7.098 3.836 8.26 7.094l-1.19-6.228c-.196-.866-.798-1.11-1.54-1.14Z" fill="#FAA61A"></path>
                <rect height="31" rx="5.5" stroke="currentColor" className="stroke-gray-300" width="55" x=".5" y=".5"></rect>
              </svg>
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <div className="absolute vt6s4 atruh flex items-center ootlu c8qx6 cursor-pointer">
                <svg className="flex-shrink-0 sfo8l qcpnt fyxhw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
              </div>
              <input id="hs-pro-decmcd" type="text" className="py-2 xumsi m9su6 block w-full d1k81 nq4w8 dtjcu ggbym focus:border-blue-500 focus:ring-blue-500 kko9e tk4f7" placeholder="Card number" value="8267 3927 2924 9016" />
            </div>

            <div className="grid zvyci gap-x-2">
              <div>
                <input type="text" className="py-2 vrf2y block w-full d1k81 nq4w8 dtjcu ggbym focus:border-blue-500 focus:ring-blue-500 kko9e tk4f7" placeholder="Expiration" value="12/25" />
              </div>
              <div>
                <input type="text" className="py-2 vrf2y block w-full d1k81 nq4w8 dtjcu v7056 focus:z-10" placeholder="CVV" value="808" />
              </div>
            </div>

            <p className="inline-flex items-center azej2 rvi38 fyxhw">
              <svg className="flex-shrink-0 pmkhf h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              This is a secure form
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="hs-pro-decmba" className="block tn07p dtjcu eass7 v7056">
              Billing address
            </label>

            <input id="hs-pro-decmba" type="text" className="py-2 vrf2y block w-full d1k81 nq4w8 dtjcu ggbym focus:border-blue-500 focus:ring-blue-500 kko9e tk4f7" placeholder="Street address" />
            <input type="text" className="py-2 vrf2y block w-full d1k81 nq4w8 dtjcu ggbym focus:border-blue-500 focus:ring-blue-500 kko9e tk4f7" placeholder="Apt or suite number" />
            <input type="text" className="py-2 vrf2y block w-full d1k81 nq4w8 dtjcu ggbym focus:border-blue-500 focus:ring-blue-500 kko9e tk4f7" placeholder="City" />

            <div className="grid zvyci gap-x-2">
              <div>
                <input type="text" className="py-2 vrf2y block w-full d1k81 nq4w8 dtjcu ggbym focus:border-blue-500 focus:ring-blue-500 kko9e tk4f7" placeholder="State" />
              </div>
              <div>
                <input type="text" className="py-2 vrf2y block w-full d1k81 nq4w8 dtjcu ggbym focus:border-blue-500 focus:ring-blue-500 kko9e tk4f7" placeholder="ZIP code" />
              </div>
            </div>

          </div>

          <div className="flex">
            <input type="checkbox" className="shrink-0 jhf5t fw1pc sg5ei m7g7n focus:ring-blue-500 kko9e tk4f7" id="hs-pro-decmnrva" />
            <label htmlFor="hs-pro-decmnrva" className="text-sm v7056 q9djf">
              Set as default payment method
            </label>
          </div>
        </div>
      </div>

      <div className="p-4 flex prqc8 gap-x-2">
        <div className="w-full">
          <button type="button" onClick={openDeleteModal} className="py-2 vrf2y pqrvw items-center dqqs4 dtjcu eass7 nq4w8 l66z3 d1k81 f0dty dh17g tgfrq cjy9h kko9e tk4f7 focus:outline-none focus:bg-gray-50" data-hs-overlay="#hs-pro-dlcam">
            Delete card
          </button>
        </div>

        <div className="w-full flex prqc8 items-center gap-x-2">
          <button type="button" onClick={closeModal} className="py-2 vrf2y pqrvw items-center dqqs4 dtjcu eass7 nq4w8 l66z3 d1k81 f0dty v7056 tgfrq cjy9h kko9e tk4f7 focus:outline-none focus:bg-gray-50" data-hs-overlay="#hs-pro-deacm">
            Cancel
          </button>

          <button type="button" onClick={closeModal} className="py-2 vrf2y pqrvw items-center dqqs4 dtjcu kxhcs nq4w8 l66z3 yj6bp wpeco dafkk nkmbv kko9e tk4f7 focus:ring-orange bg-orange2 hover:bg-orange" data-hs-overlay="#hs-pro-deacm">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditPaymentCard