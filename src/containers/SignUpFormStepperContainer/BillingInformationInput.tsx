import React from 'react';
import { IoHome } from 'react-icons/io5';
import { RiBuilding2Fill } from 'react-icons/ri';
import { MdOutlineApartment } from 'react-icons/md';
import { FaMapMarkedAlt, FaMapPin } from 'react-icons/fa';

const BillingInformationInput: React.FC = () => {
    return (
        <div className="font-author text-left flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-medium">Billing Information</h3>
            <p className="text-sm md:text-base mb-5 text-grey2">Please provide your billing information below. This information will be used for billing and shipping purposes.</p>

            <form>
                <div className="space-y-4 h-[100px] overflow-auto">
                    <div className="flex items-center relative">
                        <input required id="streetAddress" type="text" className="py-3 pl-10 vrf2y block w-full d1k81 nq4w8 dtjcu ggbym input-focus kko9e tk4f7" placeholder="Street address" />
                        <IoHome className="absolute left-3 top-3 text-lg text-gray-500" />
                    </div>
                    <div className="flex items-center relative">
                        <input required id="aptNumber" type="number" className="py-3 pl-10 vrf2y block w-full d1k81 nq4w8 dtjcu ggbym input-focus kko9e tk4f7" placeholder="Apt or suite number" />
                        <MdOutlineApartment className="absolute left-3 top-3 text-lg text-gray-500" />
                    </div>
                    <div className="flex items-center relative">
                        <input required id="city" type="text" className="py-3 pl-10 vrf2y block w-full d1k81 nq4w8 dtjcu ggbym input-focus kko9e tk4f7" placeholder="City" />
                        <RiBuilding2Fill className="absolute left-3 top-3 text-lg text-gray-500" />
                    </div>

                    <div className="grid zvyci gap-x-4">
                        <div className="flex items-center relative">
                            <input required id="state" type="text" className="py-3 pl-10 vrf2y block w-full d1k81 nq4w8 dtjcu ggbym input-focus kko9e tk4f7" placeholder="State" />
                            <FaMapMarkedAlt className="absolute left-3 top-3 text-lg text-gray-500" />
                        </div>
                        <div className="flex items-center relative">
                            <input required id="zipCode" type="number" className="py-3 pl-10 vrf2y block w-full d1k81 nq4w8 dtjcu ggbym input-focus kko9e tk4f7" placeholder="ZIP code" />
                            <FaMapPin className="absolute left-3 top-3 text-lg text-gray-500" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BillingInformationInput;
