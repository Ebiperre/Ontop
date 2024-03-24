import {
  FormControl,
  FormLabel,
  Grid,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useState } from 'react';

function ManagePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleForgotPassword = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Manage Pin */}
      <div>
        <div className='text-left mb-10'>
          <h2 className='font-medium text-lg md:text-2xl text-dark mb-2'>Manage pin</h2>
          <p className="text-gray-600">Keep your transaction secure. Update your transfer pin here.</p>
        </div>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={8}
        >
          <FormControl id="currentPin">
            <FormLabel>Current Pin</FormLabel>
            <Input
              focusBorderColor="brand.dark"
              type="password"
              placeholder="Enter current pin"
              onChange={() => { }}
            />
          </FormControl>
          <FormControl id="newPin">
            <FormLabel>New pin</FormLabel>
            <Input
              focusBorderColor="brand.dark"
              type="password"
              placeholder="Enter new pin"
              onChange={() => { }}
            />
          </FormControl>
          <FormControl id="confirmNewPin">
            <FormLabel>Confirm New Pin</FormLabel>
            <Input
              focusBorderColor="brand.dark"
              type="password"
              placeholder="Confirm new pin"
              onChange={() => { }}
            />
          </FormControl>
        </Grid>
      </div>

      {/* Manage Password */}
      <div>
        <div className='text-left mt-16 mb-10'>
          <h2 className='font-medium text-lg md:text-2xl text-dark mb-2'>Manage password</h2>
          <p className="text-gray-600">Keep your account secure. Update your password here.</p>
        </div>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={8}
        >
          <FormControl id="currentPassword">
            <FormLabel>Current Password</FormLabel>
            <Input
              focusBorderColor="brand.dark"
              type="password"
              placeholder="Enter current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </FormControl>
          <FormControl id="newPassword">
            <FormLabel>New Password</FormLabel>
            <Input
              focusBorderColor="brand.dark"
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </FormControl>
          <FormControl id="confirmNewPassword">
            <FormLabel>Confirm New Password</FormLabel>
            <Input
              focusBorderColor="brand.dark"
              type="password"
              placeholder="Confirm new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </FormControl>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Forgot Password?</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <p>Enter your email address to reset your password.</p>
                <Input
                  type="email"
                  focusBorderColor="brand.dark"
                  placeholder="Enter your email address"
                />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Reset Password
                </Button>
                <Button variant="ghost" onClick={closeModal}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Grid>
        <div className="flex flex-wrap mt-10 text-left">
          <p className="text-sm text-gray-600 mb-2">
            If you have forgotten your password, click the button below to reset it. Please provide your email address.
          </p>
          <Button variant={'link'} onClick={handleForgotPassword}>
            Forgot Password?
          </Button>
        </div>
      </div>
    </>
  )
}

export default ManagePassword;
