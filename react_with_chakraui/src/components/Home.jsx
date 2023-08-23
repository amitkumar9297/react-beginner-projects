import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";



const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: "4",
    size: "xl",
};

const Home = () => {

    return (
        <Box>
            <MyCarousel />
            <Container minH={"100vh"} maxW={"container.xl"} p={"16"}>
                <Heading
                    textTransform={"uppercase"}
                    py={"2"}
                    w={"fit-content"}
                    borderBottom={"2px solid"}
                    m={"auto"}
                >
                    Services
                </Heading>
                <Stack
                    h={"full"}
                    p={"4"}
                    alignItems={"center"}
                    direction={["column", "row"]}
                >
                    <Image src={img5} filter={"hue-rotate(-130deg)"} h={["40", "400"]} />
                    <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, at fuga earum error, in eveniet repellendus id repellat neque distinctio quaerat, nam aliquid reiciendis! Unde vitae cum amet, maiores et architecto itaque maxime odio adipisci placeat laborum fugit similique velit reiciendis voluptatibus eius veniam, minima quam dicta. Laudantium nihil rem, quis quia doloribus similique iste beatae saepe porro illum corporis eum error optio nobis, alias quidem praesentium ad iure maxime dolores ea et enim repudiandae? Quia excepturi aperiam eveniet voluptate voluptatum libero necessitatibus nemo saepe repudiandae facilis! Nam quas dolor asperiores, ducimus aliquam iusto accusantium quam ipsa perspiciatis, sed magnam, corporis labore expedita iste perferendis modi consequuntur.
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
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
        <Box w="full" h={"100vh"}>
            <Image src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Look At The Future</Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img2} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Gaming Is The Future</Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img3} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Gaming on Console</Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img4} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Night Life is Cool</Heading>
        </Box>
    </Carousel>
)


export default Home