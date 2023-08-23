import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signedup = () => {
    return (
        <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
            <form>
                <VStack alignItems={"stretch"} spacing={"8"} w={["full", "96"]} m={"auto"} my={"16"}>
                    <Heading>VIDEO HUB</Heading>
                    <Avatar alignSelf={"center"} boxSize={"32"} />
                    <Input placeholder='Name' type='text' focusBorderColor={'purple.500'} required />
                    <Input placeholder='E-mail' type='e-mail' focusBorderColor={'purple.500'} required />
                    <Input placeholder='Password' type='password' focusBorderColor={'purple.500'} required />
                    <Button colorScheme='purple' type='submit'>SignUp</Button>
                    <Text textAlign={"right"}>
                        Already Signed Up?{"  "}
                        <Button variant={'link'} colorScheme='purple'>
                            <Link to={"/login"} >login</Link>
                        </Button>
                    </Text>

                </VStack>
            </form>
        </Container >
    )
}


export default Signedup