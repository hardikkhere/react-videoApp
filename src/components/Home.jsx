import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import img6 from '../assets/6.jpeg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.webp';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'upprcase',
  p: '4',
  size: '4xl',
};
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderRadius={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          py={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img9} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            molestiae similique doloribus atque impedit a itaque non sequi.
            Placeat enim non quod rerum temporibus praesentium delectus
            assumenda sunt iste voluptas iure nisi optio atque a reprehenderit
            quibusdam distinctio asperiores possimus ratione sint saepe cum,
            dolores accusamus! Mollitia maiores quas et voluptate optio, qui
            dicta aspernatur accusantium harum obcaecati, cum debitis incidunt!
            Eligendi praesentium rem ab voluptatem ad ducimus debitis velit
            cumque reiciendis explicabo deleniti, rerum ea eum vero odio cum
            natus blanditiis libero, illum iure quisquam mollitia fugiat.
            Accusamus laborum vitae facilis praesentium est expedita reiciendis
            earum animi quam dolorum!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color="white" {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.600'} color="black" {...headingOptions}>
        Gaming Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color="black" {...headingOptions}>
        Gaming Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img7} />
      <Heading bgColor={'whiteAlpha.600'} color="black" {...headingOptions}>
        Gaming Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img5} />
      <Heading bgColor={'whiteAlpha.600'} color="black" {...headingOptions}>
        Gaming Future
      </Heading>
    </Box>
  </Carousel>
);
// export default MyCarousel;
export default Home;
