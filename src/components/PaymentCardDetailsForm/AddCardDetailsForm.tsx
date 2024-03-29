import "../../../src/obfuscated.css"

type AddCardDetailsFormProps = {
    closeModal: () => void;
}

const AddCardDetailsForm = ({ closeModal }: AddCardDetailsFormProps) => {
    return (
        <div className="max-h-full w-full max-w-2xl m-4 flex lgqw8 f0dty k3u76 jpq01 shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]">
            <div className="p-4 flex azaj8 items-center bg8gm d1k81">
                <h3 className="font-semibold v7056 ">
                    Add card details
                </h3>

                <button type="button" onClick={closeModal} className="w-8 gpe5b pqrvw pdrgo items-center dqqs4 iwtls l66z3 yj6bp em545 v7056 gk940 kko9e tk4f7 focus:outline-none focus:bg-gray-200" data-hs-overlay="#hs-pro-dmacm">
                    <span className="sr-only">Close modal</span>
                    <svg className="flex-shrink-0 sfo8l h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                </button>
            </div>

            <div className="p-4 pk1vk mws46 szov1 bp4e4 m2y1i">
                <div className="space-y-5">
                    <div className="flex azaj8 items-center">
                        <label htmlFor="hs-pro-decmcd" className="block tn07p dtjcu eass7 v7056 ">
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

                            <svg className="w-8 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 32" width="56" height="32" fill="none">
                                <path d="M28.017 22.85A9.137 9.137 0 0 1 22.108 25C17.078 25 13 20.97 13 16s4.078-9 9.108-9c2.255 0 4.318.81 5.909 2.15A9.137 9.137 0 0 1 33.925 7c5.03 0 9.108 4.03 9.108 9s-4.078 9-9.108 9a9.137 9.137 0 0 1-5.908-2.15Z" fill="#ED0006"></path>
                                <path d="M28.017 22.85a8.937 8.937 0 0 0 3.2-6.85c0-2.743-1.242-5.2-3.2-6.85A9.137 9.137 0 0 1 33.925 7c5.03 0 9.108 4.03 9.108 9s-4.078 9-9.108 9a9.137 9.137 0 0 1-5.908-2.15Z" fill="#F9A000"></path>
                                <path d="M28.017 22.85c1.958-1.65 3.2-4.107 3.2-6.85 0-2.743-1.242-5.2-3.2-6.85a8.937 8.937 0 0 0-3.2 6.85c0 2.743 1.241 5.2 3.2 6.85Z" fill="#FF5E00"></path>
                                <rect height="31" rx="5.5" stroke="currentColor" className="stroke-gray-300" width="55" x=".5" y=".5"></rect>
                            </svg>

                            <svg className="w-8 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 32" width="56" height="32" fill="none">
                                <path d="M17.69 5.001h8.528c1.19 0 1.93 1 1.652 2.228L23.9 24.775C23.62 26.001 22.43 27 21.239 27H12.71c-1.188 0-1.93-1-1.653-2.225L15.03 7.23c.278-1.229 1.469-2.228 2.66-2.228Z" fill="#E21836"></path>
                                <path d="M25.507 5h9.806c1.19 0 .654.999.374 2.228l-3.97 17.546C31.44 26 31.526 27 30.333 27h-9.806c-1.192 0-1.93-1-1.65-2.225l3.969-17.546C23.128 5.998 24.316 5 25.507 5Z" fill="#00447C"></path>
                                <path d="M34.925 5h8.527c1.192 0 1.932.999 1.652 2.228l-3.969 17.546C40.855 26 39.662 27 38.47 27h-8.523c-1.192 0-1.932-1-1.653-2.225l3.97-17.546C32.542 5.998 33.732 5 34.924 5Z" fill="#007B84"></path>
                                <path d="M19.917 10.623c-.877.01-1.136 0-1.219-.02-.032.155-.623 2.965-.625 2.967-.127.569-.22.974-.535 1.236a.937.937 0 0 1-.63.225c-.388 0-.615-.198-.653-.575l-.007-.13.119-.766s.62-2.56.732-2.899a.246.246 0 0 0 .009-.038c-1.21.01-1.423 0-1.438-.02-.008.027-.038.186-.038.186l-.634 2.886-.055.245-.105.8c0 .238.045.432.135.596.29.52 1.113.597 1.58.597.6 0 1.164-.131 1.544-.37.661-.403.834-1.031.988-1.59l.072-.286s.64-2.66.748-3.006c.005-.019.006-.029.012-.038Zm2.177 2.145a1.65 1.65 0 0 0-.69.166c-.091.05-.178.105-.27.161l.083-.307-.046-.052c-.537.112-.657.127-1.152.198l-.042.029c-.058.492-.109.861-.322 1.827-.082.356-.166.715-.25 1.07l.022.046c.509-.028.663-.028 1.104-.02l.036-.04c.056-.296.064-.366.188-.965.058-.284.18-.908.24-1.13.11-.053.22-.105.323-.105.248 0 .218.222.208.31-.01.15-.1.635-.193 1.052l-.062.27c-.043.198-.09.391-.133.588l.019.04c.5-.028.653-.028 1.081-.02l.05-.04c.078-.463.1-.586.238-1.26l.069-.308c.134-.605.2-.912.1-1.162-.108-.28-.365-.348-.601-.348Zm2.431.634c-.266.052-.436.088-.605.11-.167.028-.33.053-.588.09l-.02.019-.018.015c-.027.197-.046.368-.082.568-.03.207-.076.443-.151.781-.059.26-.09.35-.122.441-.033.091-.069.18-.134.435l.015.023.013.022c.24-.012.398-.02.56-.022.161-.006.328 0 .587.002l.023-.02.024-.02c.038-.23.043-.292.066-.404.023-.12.062-.287.158-.731.045-.21.096-.417.143-.63.048-.213.1-.422.148-.63l-.007-.026-.01-.023Zm.006-.854c-.242-.147-.667-.1-.953.102-.284.2-.317.482-.076.63.238.144.664.101.948-.104.284-.203.32-.483.08-.628Zm1.463 3.404c.49 0 .991-.14 1.369-.551.29-.334.424-.832.47-1.036.15-.679.033-.996-.114-1.189-.223-.294-.618-.388-1.027-.388-.246 0-.832.025-1.29.46-.329.313-.48.738-.572 1.146-.093.415-.2 1.163.469 1.442.206.09.503.116.695.116Zm-.038-1.527c.113-.514.246-.946.586-.946.266 0 .286.322.167.837-.021.115-.118.54-.25.721-.092.134-.2.215-.32.215-.036 0-.249 0-.252-.325a2.27 2.27 0 0 1 .069-.502Zm3.1 1.46.038-.04c.055-.295.064-.365.184-.964.06-.284.184-.908.243-1.13.11-.053.217-.105.324-.105.246 0 .216.222.207.31-.01.15-.1.635-.194 1.052l-.058.27c-.045.198-.093.391-.136.588l.018.04c.503-.028.65-.028 1.08-.02l.052-.04c.075-.463.096-.586.237-1.259l.067-.31c.135-.604.203-.911.104-1.161-.11-.28-.37-.348-.603-.348-.154 0-.438.039-.69.167-.09.048-.18.104-.268.16l.077-.307-.041-.052c-.537.112-.66.127-1.155.199l-.038.028c-.06.492-.109.86-.322 1.827-.081.356-.166.716-.25 1.07l.023.046c.509-.028.66-.028 1.101-.02Zm3.693.02.22-1.099s.16-.69.17-.715c0 0 .05-.072.1-.1h.075c.698 0 1.486 0 2.104-.469.42-.32.708-.795.836-1.37.034-.142.058-.31.058-.478 0-.22-.043-.438-.167-.609-.315-.454-.943-.462-1.667-.466l-.357.004c-.927.012-1.3.008-1.452-.011l-.037.193-.332 1.587-.832 3.528c.81-.01 1.141-.01 1.28.006Zm.615-2.814.352-1.575.011-.082.005-.061.141.015.745.066c.288.114.406.41.324.794-.076.352-.298.648-.583.791-.234.121-.522.131-.818.131h-.191l.014-.08Zm2.199 1.363c-.094.41-.2 1.158.464 1.424.212.093.402.12.595.11.204-.01.393-.116.568-.268l-.047.188.03.04c.478-.021.626-.021 1.144-.017l.047-.037c.076-.458.147-.902.344-1.778.096-.42.191-.835.29-1.253l-.016-.046c-.535.102-.678.124-1.192.199l-.04.032-.015.125a.741.741 0 0 0-.375-.318c-.229-.093-.766.027-1.228.46-.325.31-.48.733-.57 1.14Zm1.123.025c.115-.505.246-.932.587-.932.216 0 .33.205.306.554l-.061.283c-.034.15-.071.299-.107.447-.037.102-.08.198-.126.262-.088.128-.297.208-.417.208-.034 0-.244 0-.252-.32-.001-.159.03-.322.07-.502Zm5.868-1.666-.042-.049c-.529.11-.625.128-1.111.196l-.036.036-.006.024-.001-.008c-.362.86-.352.674-.646 1.35l-.004-.082-.073-1.467-.047-.049c-.554.11-.567.128-1.08.196l-.04.036c-.005.018-.005.037-.008.058l.003.008c.064.336.049.261.113.793.03.26.07.523.1.78.05.432.078.644.14 1.302-.346.587-.428.81-.76 1.325l.002.005-.235.382c-.027.04-.05.068-.085.08a.344.344 0 0 1-.154.022h-.13l-.193.661.663.012c.389-.002.633-.189.765-.44l.416-.735H40.1l.043-.052c.28-.621 2.412-4.384 2.412-4.384Zm-6.991 8.682h-.281l1.04-3.54h.345l.11-.366.01.406c-.013.25.179.473.682.436h.582l.2-.681h-.218c-.127 0-.185-.033-.178-.103l-.01-.413h-1.078v.002c-.349.008-1.39.034-1.6.092-.256.068-.524.267-.524.267l.105-.365H33.74l-.21.724-1.054 3.595h-.205l-.2.678h2.008l-.067.225h.99l.065-.226h.278l.218-.73Zm-.824-2.821c-.162.046-.462.185-.462.185l.267-.905h.801l-.193.66s-.248.015-.413.06Zm.015 1.293s-.252.032-.417.07c-.164.052-.47.212-.47.212l.277-.942h.805l-.195.66Zm-.449 1.537h-.804l.233-.795h.801l-.23.795Zm1.936-2.197h1.158l-.166.555h-1.174l-.176.607h1.027l-.778 1.127a.322.322 0 0 1-.158.136.45.45 0 0 1-.208.062h-.285l-.196.664h.745c.388 0 .617-.181.785-.42l.534-.75.114.762a.357.357 0 0 0 .192.26c.075.038.152.104.26.114.117.005.202.009.258.009h.366l.22-.744h-.145c-.082 0-.225-.014-.25-.04-.024-.033-.024-.083-.037-.16l-.116-.764h-.476l.209-.256h1.171l.18-.607h-1.084l.169-.555h1.081l.2-.684h-3.223l-.197.684Zm-9.785 2.351.27-.926h1.111l.204-.688h-1.113l.17-.57h1.087l.201-.667h-2.72l-.197.667h.618l-.165.57h-.62l-.204.7h.617l-.36 1.225c-.049.162.023.224.068.3a.299.299 0 0 0 .199.149c.109.025.183.04.285.04h1.253l.223-.763-.555.079c-.108 0-.405-.014-.372-.116Zm.127-4.433-.281.524a.606.606 0 0 1-.164.219c-.043.027-.128.039-.251.039h-.147l-.197.67h.488c.235 0 .415-.088.501-.133.093-.05.117-.022.188-.093l.165-.147h1.524l.202-.697h-1.115l.195-.382h-1.108Zm2.25 4.447c-.026-.039-.007-.107.032-.248l.417-1.419h1.482c.216-.003.372-.006.473-.013a.95.95 0 0 0 .356-.124.675.675 0 0 0 .26-.246c.063-.09.167-.29.255-.596l.524-1.796-1.538.009s-.473.072-.682.151c-.21.089-.51.336-.51.336l.138-.492h-.95l-1.33 4.54a2.886 2.886 0 0 0-.086.38c-.002.083.102.165.17.227.079.062.197.052.31.062.118.01.287.015.52.015h.73l.224-.779-.654.064a.17.17 0 0 1-.141-.071Zm.718-2.625h1.556l-.099.319c-.014.007-.047-.016-.206.003h-1.347l.096-.322Zm.311-1.071h1.57l-.113.384s-.74-.007-.858.015c-.521.093-.826.38-.826.38l.227-.78Zm1.18 2.459a.172.172 0 0 1-.06.098c-.032.021-.084.029-.16.029H30.6l.013-.389h-.922l-.037 1.9c-.002.138.011.217.109.28.097.08.397.09.802.09h.578l.208-.711-.503.028-.167.01c-.023-.01-.045-.019-.07-.044-.02-.022-.056-.008-.05-.146l.004-.487.527-.022c.285 0 .407-.096.511-.187.1-.087.132-.187.169-.322l.088-.431h-.725l-.092.304Z" fill="#FEFEFE"></path>
                                <rect height="31" rx="5.5" stroke="currentColor" className="stroke-gray-300" width="55" x=".5" y=".5"></rect>
                            </svg>

                            <svg className="w-8 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 32" width="56" height="32" fill="none">
                                <path d="M19.648 15.984c0 2.074 1.629 3.683 3.725 3.683.592 0 1.1-.117 1.726-.411v-1.62c-.55.55-1.038.772-1.662.772-1.386 0-2.37-1.005-2.37-2.434 0-1.355 1.015-2.424 2.306-2.424.656 0 1.153.235 1.726.794v-1.62c-.604-.306-1.101-.433-1.694-.433-2.085 0-3.757 1.642-3.757 3.693ZM16.116 14.27c0 .382.242.584 1.068.89 1.566.572 2.03 1.08 2.03 2.2 0 1.366-1.003 2.317-2.434 2.317-1.047 0-1.809-.412-2.443-1.343l.89-.856c.316.612.845.94 1.501.94.614 0 1.069-.423 1.069-.995 0-.296-.138-.55-.413-.73-.138-.085-.412-.212-.951-.402-1.293-.465-1.736-.962-1.736-1.935 0-1.155.952-2.022 2.2-2.022.774 0 1.482.265 2.074.783l-.72.943c-.359-.402-.698-.572-1.11-.572-.593 0-1.025.338-1.025.783Z" fill="#231F20"></path>
                                <path clip-rule="evenodd" d="M8.02 12.451H6v7.057h2.01c1.068 0 1.84-.252 2.518-.815a3.54 3.54 0 0 0 1.28-2.709c0-2.082-1.555-3.533-3.788-3.533Zm1.608 5.301c-.432.39-.994.561-1.883.561h-.37v-4.666h.37c.89 0 1.429.159 1.883.57.476.424.763 1.081.763 1.757 0 .677-.287 1.354-.763 1.778Z" fill="#231F20" fill-rule="evenodd"></path>
                                <path d="M13.819 12.451h-1.377v7.057h1.377V12.45ZM34.13 12.451l1.882 4.74 1.906-4.74h1.492l-3.048 7.238h-.74l-2.995-7.238h1.503ZM40.033 19.508h3.903v-1.195h-2.528v-1.905h2.435v-1.195h-2.435v-1.566h2.528V12.45h-3.903v7.057Z" fill="#231F20"></path>
                                <path clip-rule="evenodd" d="M46.889 12.451c1.587 0 2.497.762 2.497 2.083 0 1.08-.57 1.79-1.607 2L50 19.509h-1.693l-1.905-2.835h-.18v2.835h-1.374V12.45h2.04Zm-.666 3.249h.402c.879 0 1.345-.382 1.345-1.091 0-.687-.466-1.046-1.323-1.046h-.424V15.7Z" fill="#231F20" fill-rule="evenodd"></path>
                                <path d="M29.302 19.758a3.754 3.754 0 1 0 0-7.508 3.754 3.754 0 0 0 0 7.508Z" fill="#F48120"></path>
                                <path d="M56 20c-1.492 1.035-12.661 8.428-32 12h28.85c1.74 0 3.15-1.39 3.15-3.104V20Z" fill="#F47216"></path>
                                <rect height="31" rx="5.5" stroke="currentColor" className="stroke-gray-300" width="55" x=".5" y=".5"></rect>
                            </svg>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="relative">
                            <div className="absolute vt6s4 atruh flex items-center ootlu c8qx6 cursor-pointer">
                                <svg className="flex-shrink-0 sfo8l qcpnt fyxhw " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                            </div>
                            <input type="text" className="py-2 xumsi m9su6 block w-full d1k81 nq4w8 dtjcu ggbym focus:border-blue-500 focus:ring-blue-500 kko9e tk4f7" placeholder="Card number" />
                        </div>

                        <div className="grid zvyci gap-x-2">
                            <div>
                                <input type="text" className="py-2 vrf2y block w-full d1k81 nq4w8 dtjcu ggbym focus:border-blue-500 focus:ring-blue-500 kko9e tk4f7" placeholder="Expiration" />
                            </div>
                            <div>
                                <input type="text" className="py-2 vrf2y block w-full d1k81 nq4w8 dtjcu v7056 focus:z-10" placeholder="CVV" />
                            </div>
                        </div>

                        <p className="inline-flex items-center azej2 rvi38 fyxhw ">
                            <svg className="flex-shrink-0 pmkhf h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            This is a secure form
                        </p>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="hs-pro-dacmba" className="block tn07p dtjcu eass7 v7056 ">
                            Billing address
                        </label>

                        <input id="hs-pro-dacmba" type="text" className="py-2 vrf2y block w-full d1k81 nq4w8 dtjcu ggbym focus:border-blue-500 focus:ring-blue-500 kko9e tk4f7" placeholder="Street address" />
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
                        <input type="checkbox" className="shrink-0 jhf5t border-orange sg5ei active:text-orange4  focus:ring-orange kko9e tk4f7 !text-orange3" id="hs-pro-dacmnrva" />
                        <label htmlFor="hs-pro-dacmnrva" className="text-sm v7056 q9djf ">
                            Set as default payment method
                        </label>
                    </div>
                </div>
            </div>

            <div className="p-4 flex azaj8 gap-x-2">
                <div className="w-full hidden">
                    <button type="button" className="py-2 vrf2y pqrvw items-center dqqs4 dtjcu eass7 nq4w8 l66z3 d1k81 f0dty dh17g tgfrq cjy9h kko9e tk4f7 focus:outline-none focus:bg-gray-50" data-hs-overlay="#hs-pro-dlcam">
                        Delete card
                    </button>
                </div>

                <div className="w-full flex prqc8 items-center gap-x-2">
                    <button type="button" onClick={closeModal} className="py-2 vrf2y pqrvw items-center dqqs4 dtjcu eass7 nq4w8 l66z3 d1k81 f0dty v7056 tgfrq cjy9h kko9e tk4f7 focus:outline-none focus:bg-gray-50" data-hs-overlay="#hs-pro-dmacm">
                        Cancel
                    </button>
                    <button type="button" onClick={closeModal} className="py-2 vrf2y pqrvw items-center dqqs4 dtjcu kxhcs nq4w8 l66z3 yj6bp wpeco dafkk nkmbv kko9e tk4f7 focus:outline-none focus:ring-2 focus:ring-orange bg-orange2 hover:bg-orange" data-hs-overlay="#hs-pro-dmacm">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddCardDetailsForm