import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiSolidCreditCardAlt } from 'react-icons/bi'
import AddCardDetailsForm from '../../../components/PaymentCardDetailsForm/AddCardDetailsForm';
import MangePaymentCardBoard from '../../../components/PaymentCardDetailsForm/MangePaymentCardBoard';
import EditPaymentCard from '../../../components/PaymentCardDetailsForm/EditPaymentCard';
import DeletePaymentCard from '../../../components/PaymentCardDetailsForm/DeletePaymentCard';

const DashboardPaymentPageContainer: React.FC = () => {

    const [isAddNewCardModalOpen, setIsAddNewCardModalOpen] = useState(false);
    const [isEditCardModalOpen, setIsEditCardModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const closeModal = () => {
        setIsAddNewCardModalOpen(false);
        setIsEditCardModalOpen(false);
        setDeleteModalOpen(false);
    };
    return (
        <div className="px-4 lg:px-8 pt-14 pb-24">
            <div className=" flex flex-col gap-16 relative">
                <div className="bg-white p-4 md:p-6 lg:py-10 lg:px-8 rounded-lg shadow-sm flex flex-wrap items-start justify-between gap-10">
                    <div className='text-left w-full max-w-xl'>
                        <h2 className="text-3xl lg:text-5xl text-dark font-medium mb-3">Manage Payments</h2>
                        <p className="text-grey text-sm lg:text-base">
                            Stay on top of your payments. Monitor, analyze, and manage your transactions seamlessly with our intuitive platform.
                        </p>
                    </div>
                    <button onClick={() => { setIsAddNewCardModalOpen(true) }} className="bg-orange2 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-orange flex items-center gap-1 cursor-pointer">
                        <BiSolidCreditCardAlt size={30} />
                        <span>Add Card</span>
                    </button>
                </div>

                <div className="w-full max-w-4xl mx-auto">
                    <MangePaymentCardBoard
                        openAddCardModal={() => { setIsAddNewCardModalOpen(true) }}
                        openEditModal={() => { setIsEditCardModalOpen(true) }}
                    />
                </div>

                <Modal isOpen={isAddNewCardModalOpen} onClose={closeModal}>
                    <ModalOverlay>
                        <ModalContent>
                            <ModalBody>
                                <div className='w-full mx-auto flex items-center justify-center bg-black bg-opacity-30 py-24 h-screen'>
                                    <AddCardDetailsForm closeModal={closeModal} />
                                </div>
                            </ModalBody>
                        </ModalContent>
                    </ModalOverlay>
                </Modal>

                <Modal isOpen={isEditCardModalOpen} onClose={closeModal}>
                    <ModalOverlay>
                        <ModalContent>
                            <ModalBody>
                                <div className='w-full mx-auto flex items-center justify-center bg-black bg-opacity-30 py-24 h-screen'>
                                    <EditPaymentCard
                                        closeModal={closeModal}
                                        openDeleteModal={() => {
                                            setDeleteModalOpen(true)
                                            setIsEditCardModalOpen(false);
                                        }}
                                    />
                                </div>
                            </ModalBody>
                        </ModalContent>
                    </ModalOverlay>
                </Modal>
                <Modal isOpen={deleteModalOpen} onClose={closeModal}>
                    <ModalOverlay>
                        <ModalContent>
                            <ModalBody>
                                <div className='w-full mx-auto flex items-center justify-center bg-black bg-opacity-30 py-24 h-screen'>
                                    <DeletePaymentCard closeModal={closeModal} />
                                </div>
                            </ModalBody>
                        </ModalContent>
                    </ModalOverlay>
                </Modal>
            </div>
        </div>
    )
}

export default DashboardPaymentPageContainer