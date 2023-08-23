import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {
    const videoArr = [
        'https://www.youtube.com/watch?v=Gx0iyEyD6Xo',
        'https://www.youtube.com/watch?v=gYl2uIsXi08',
        'https://www.youtube.com/watch?v=D5mMm8Z6e4E',
        'https://www.youtube.com/watch?v=tpmJGNjKW6g',
        'https://www.youtube.com/watch?v=Y1glVhCWxGo',
        'https://www.youtube.com/watch?v=vz1RlUyrc3w',
        'https://www.youtube.com/watch?v=mRURWfSYBrg'
    ]
    const [videoSrc, setvideoSrc] = useState(videoArr[0])
    return (
        <Stack direction={["column", "row"]} h={"100vh"}>
            <VStack w={"full"}>
                <video src={videoSrc} style={{ width: "100%" }} controls controlsList='nodownload' >

                </video>
                <VStack alignItems={"flex-start"} p={"8"} w={'full'} overflowY={"auto"}>
                    <Heading>Sample video</Heading>
                    <Text>
                        This is a sample video for testing and demo. this is called discription.
                    </Text>
                </VStack>
            </VStack>
            <VStack w={["full", "xl"]} alignItems={"stretch"} p={"8"} spacing={"8"} overflowY={"auto"}>
                {videoArr.map((item, index) => (
                    <Button variant={"ghost"} colorScheme={'purple'} onClick={() => setvideoSrc(item)}>Lecture {index + 1}</Button>))}
            </VStack>
        </Stack>
    )
}

export default Videos