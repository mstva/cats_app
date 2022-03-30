import React from "react";
import * as chakra from '@chakra-ui/react'
import logout from '../../images/logout.png'
import favorite from '../../images/favorite.png'
import {API_KEY, AUTH_PATH} from "../../utils/constants";
import {useNavigate} from "react-router-dom";
import {CheckAuthContainer} from "../custom/CheckAuthContainer";


export const FeedScreen = () => {

    const navigate = useNavigate()

    const onLogout = () => {
        localStorage.removeItem(API_KEY)
        setTimeout(() => navigate(AUTH_PATH), 100)
    }

    return (
        <CheckAuthContainer>
            <chakra.Center>
                <chakra.Flex flexDir={"column"}  width={"320px"}>
                    <chakra.Flex flexDir={"row"} justifyContent={"space-between"} p={"20px"}>
                        <chakra.Image
                            src={logout}
                            alt='logout'
                            width={"18px"}
                            height={"20px"}
                            cursor={"pointer"}
                            onClick={onLogout}
                        />
                        <chakra.Text
                            fontFamily={'Roboto'}
                            fontStyle={'normal'}
                            fontWeight={'400'}
                            fontSize={'16px'}
                            lineHeight={'16px'}
                            display={'flex'}
                            alignItems={'center'}
                            color={'#000000'}
                            cursor={"pointer"}
                        >
                            instacatbooktube
                        </chakra.Text>
                        <chakra.Image
                            src={favorite}
                            alt='favorite'
                            width={"23px"}
                            height={"20px"}
                        />
                    </chakra.Flex>
                </chakra.Flex>
            </chakra.Center>
        </CheckAuthContainer>
    )
}
