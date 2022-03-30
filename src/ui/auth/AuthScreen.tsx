import React, {useEffect, useState} from "react";
import * as chakra from '@chakra-ui/react'
import instagram from '../../images/instagram.png'
import cat from '../../images/cat.png'
import book from '../../images/book.png'
import youtube from '../../images/youtube.png'
import {AuthData} from "../../data/auth_redux/AuthActions";
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../data/Store";
import {SetAuthDataAction} from "../../data/auth_redux/AuthHelper";
// @ts-ignore
import {Shake} from 'reshake'
import {API_KEY, FEED_PATH} from "../../utils/constants";
import {useNavigate} from "react-router-dom";

export const AuthScreen = () => {

    const initialAuthData: AuthData = {
        apiKey: "",
        isGUIDValidPattern: false
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authState = useSelector((state: RootStore) => state.authReducer)
    const [authData, setAuthData] = useState<AuthData>(initialAuthData)

    useEffect(() => {
        dispatch(SetAuthDataAction(authData))
    }, [authData])

    const checkGUIDPattern = (key: string): boolean => {
        const regex = "^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$"
        const GUIDPattern = new RegExp(regex)
        return GUIDPattern.test(key)
    }

    const onApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newAuthData: AuthData = {
            ...authData,
            apiKey: event.target.value,
            isGUIDValidPattern: checkGUIDPattern(event.target.value)
        }
        setAuthData(newAuthData)
    }

    const inputBorderColor = () : string => {
        return authState.isGUIDValidPattern
            ? "#62CC6D"
            : !authState.isGUIDValidPattern && authState.apiKey !== ""
                ? "#ff0000"
                : "#E7E7E7"
    }

    const inputFocusBorderColor = () : string => {
        return authState.isGUIDValidPattern
            ? "#62CC6D"
            : !authState.isGUIDValidPattern && authState.apiKey !== ""
                ? "#ff0303"
                : "#E7E7E7"
    }

    const buttonBackgroundColor = () : string => {
        return authState.isGUIDValidPattern
            ? "#62CC6D"
            : !authState.isGUIDValidPattern && authState.apiKey !== ""
                ? "#a1daa7"
                : "#525252"
    }

    const onSignIn = () => {
        if (authState.isGUIDValidPattern && authState.apiKey !== "") {
            localStorage.setItem(API_KEY, authState.apiKey)
            setTimeout(() => navigate(FEED_PATH), 100)
        }
    }

    return (
        <chakra.Center>
            <chakra.Flex flexDir={"column"}>

                {/* Images Grid */}
                <chakra.Center>
                    <chakra.Grid
                        templateRows='repeat(2, 1fr)'
                        templateColumns='repeat(2, 1fr)'
                        gap={4}
                        my={"50px"}
                    >
                        <chakra.GridItem>
                            <chakra.Image
                                src={instagram}
                                alt='instagram'
                                width={"85px"}
                                height={"85px"}
                            />
                        </chakra.GridItem>
                        <chakra.GridItem>
                            <chakra.Image
                                src={cat}
                                alt='cat'
                                width={"95px"}
                                height={"85px"}
                            />
                        </chakra.GridItem>
                        <chakra.GridItem>
                            <chakra.Image
                                src={book}
                                alt='book'
                                width={"83px"}
                                height={"64px"}
                            />
                        </chakra.GridItem>
                        <chakra.GridItem>
                            <chakra.Image
                                src={youtube}
                                alt='youtube'
                                width={"93px"}
                                height={"64px"}
                            />
                        </chakra.GridItem>
                    </chakra.Grid>
                </chakra.Center>

                {/* API Key Input */}
                <Shake
                    h={5}
                    v={0}
                    r={0}
                    dur={300}
                    int={10}
                    max={100}
                    fixed={true}
                    fixedStop={false}
                    freez={false}
                    active={!authState.isGUIDValidPattern && authState.apiKey !== ""}
                >
                    <chakra.Input
                        placeholder='Enter your API key ...'
                        width='400px'
                        height='40px'
                        mb={"20px"}
                        defaultValue={authState.apiKey}
                        onChange={event => onApiKeyChange(event)}
                        borderWidth={'1px'}
                        borderRadius={'4px'}
                        borderColor={inputBorderColor()}
                        focusBorderColor={inputFocusBorderColor()}
                    />
                </Shake>

                {/* Sign In Button */}
                <chakra.Text
                    width='400px'
                    height='48px'
                    borderRadius='4px'
                    color={"white"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    px={"40px"}
                    py={"25px"}
                    fontFamily={'Roboto'}
                    fontStyle={'normal'}
                    fontWeight={'bold'}
                    fontSize={'18px'}
                    lineHeight={'21px'}
                    backgroundColor={buttonBackgroundColor()}
                    cursor={authState.isGUIDValidPattern ? "pointer" : "default"}
                    onClick={onSignIn}
                >
                    Sign In
                </chakra.Text>

            </chakra.Flex>
        </chakra.Center>
    )
}
