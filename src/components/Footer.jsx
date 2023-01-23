import React from 'react';

import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subcribes to get updates{' '}
          </Heading>

          <HStack borderBottom={'2px solid white'} py={'2px'}>
            <Input
              placeholder="Enter Email Here"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              color={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All rights reserved 2023</Text>
          <span>By Hardik</span>
          {/* <Text>By Hardik</Text> */}
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media{' '}
          </Heading>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'blank'} href="https://youtube.com">
              {' '}
              YouTube
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'blank'} href="https://instagram.com/hardikkhere">
              Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'blank'} href="https://github.com/hardikkhere">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
