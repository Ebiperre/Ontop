import React, { useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import deleteAccount from '../../../src/assets/images/delete-account.svg'
import { ListItem, UnorderedList, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton } from '@chakra-ui/react';

const AccountDeletion: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Utils
    const closeDisclaimers = [
        "Deleting your account will revoke your access to the platform.",
        "Any associated roles and permissions will be removed.",
        "You will no longer be able to log in or perform any actions.",
        "Please not that the account can not be retrived after deletion"
    ];

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className='text-left mb-10'>
                <h2 className='font-medium text-lg md:text-2xl text-dark mb-2'>Account Deletion</h2>
                <p className="text-gray-600">Deleting your account will permanently remove all data associated with it.</p>
            </div>
            <div className="flex flex-col items-start gap-4 text-left">
                <h4 className='font-medium text-xl text-deleteRed'>Warning</h4>
                <UnorderedList>
                    {closeDisclaimers.map((data, i) => {
                        return <ListItem key={i}>{data}</ListItem>;
                    })}
                </UnorderedList>
                <button
                    className='mt-5 text-white bg-deleteRed py-2.5 px-8 rounded-md font-medium text-lg flex items-center'
                    onClick={() => setIsOpen(true)}
                >
                    Delete account
                    <RiDeleteBin6Line className="ml-2" />
                </button>
            </div>

            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <ModalOverlay />
                <ModalContent>
                    <div className='border'>
                        <ModalHeader>Confirm Account Deletion</ModalHeader>
                        <ModalCloseButton />
                    </div>
                    <ModalBody>
                        <img className='m-4 p-4 w-full object-cover' src={deleteAccount} alt="Delete account" />
                        <div className='flex flex-col gap-3 mt-5'>
                            <p>Are you sure you want to delete your account? This action cannot be undone.</p>
                            <p>Deleting your account will result in the permanent loss of all data associated with your account, including your profile information, settings, and transaction history.</p>
                            <p> This action cannot be undone, and we will not be able to recover any of your data once the account deletion is confirmed.</p>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className='mt-5 mr-4 mb-5 text-white bg-deleteRed py-2 px-6 rounded-md font-bold text-lg'>
                            Delete
                        </button>
                        <Button variant="ghost" onClick={handleCloseModal}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AccountDeletion;
