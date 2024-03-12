import { useEffect, useRef } from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  VStack,
  useClipboard,
} from '@chakra-ui/react';

const Actions: React.FC = () => {
  const value = 'https://ontop.com/kizitech';
  const { hasCopied, onCopy } = useClipboard(value);

  const profileUrl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (hasCopied && profileUrl.current) {
      profileUrl.current.focus();
      profileUrl.current.select();
    }
  }, [hasCopied]);

  return (
    <VStack py={8} px={5} spacing={3}>
      <h4 className='text-sm'>Copy profile Link</h4>
      <InputGroup>
        <Input
          ref={profileUrl}
          type="url"
          color="brand.orange"
          value={value}
          userSelect="all"
          readOnly
          _focus={{ borderColor: 'brand.orange' }}
        />
        <InputRightAddon bg="transparent" px={0} overflow="hidden">
          <Button onClick={onCopy} variant="link">
            <svg width="1.2em" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
          </Button>
        </InputRightAddon>
      </InputGroup>
    </VStack>
  );
};

export default Actions;
