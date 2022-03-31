import React, {useEffect, useState, useRef, useCallback} from "react";
import * as chakra from '@chakra-ui/react'
import logout from '../../images/logout.png'
import favorite from '../../images/favorite.png'
import un_favorite from '../../images/un_favorite.png'
import {API_KEY, AUTH_PATH} from "../../utils/constants";
import {useNavigate} from "react-router-dom";
import {CheckAuthContainer} from "../custom/CheckAuthContainer";
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../data/Store";
import {FetchImagesAction} from "../../data/feed_redux/FeedHelpers";
import {ImageType} from "../../data/feed_redux/FeedActions";


export const FeedScreen = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const imagesState = useSelector((state: RootStore) => state.imagesReducer)
    const [page, setPage] = useState<number>(1)

    const observer = useRef()
    const lastImageRef = useCallback(node => {
        if (imagesState.is_images_fetch_loading) return
        if (observer.current) {
            // @ts-ignore
            observer.current.disconnect()
        }
        // @ts-ignore
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPage(prevPage => prevPage + 1)
            }
        })
        if (node) {
            // @ts-ignore
            observer.current.observe(node)
        }
    }, [])

    useEffect(() => {
        dispatch(FetchImagesAction(page, 10))
    }, [page])

    const onLogout = () => {
        localStorage.removeItem(API_KEY)
        setTimeout(() => navigate(AUTH_PATH), 100)
    }

    return (
        <CheckAuthContainer>
            <chakra.Center>
                <chakra.Flex flexDir={"column"} width={"320px"}>
                    <chakra.Flex
                        flexDir={"row"}
                        justifyContent={"space-between"}
                        p={"16px"}
                    >
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
                    {
                        imagesState.images.map((image: ImageType, index: number) => {
                            if (imagesState.images.length === index + 1) {
                                return <chakra.Box
                                    key={image.id}
                                    position={"relative"}
                                    display={"inline-flex"}
                                >
                                    <chakra.Image
                                        src={image.url}
                                        mx={"10px"}
                                        mb={"7px"}
                                        borderRadius={"5px"}
                                        ref={lastImageRef}
                                    />
                                    <chakra.Image
                                        src={un_favorite}
                                        alt="un_favorite"
                                        width={"30px"}
                                        height={"30px"}
                                        position={"absolute"}
                                        bottom={"20px"}
                                        right={"5px"}
                                        zIndex={"1"}
                                    />
                                </chakra.Box>
                            } else {
                                return <chakra.Box
                                    key={image.id}
                                    position={"relative"}
                                    display={"inline-flex"}
                                >
                                    <chakra.Image
                                        src={image.url}
                                        mx={"10px"}
                                        mb={"7px"}
                                        borderRadius={"5px"}
                                    />
                                    <chakra.Image
                                        src={un_favorite}
                                        alt="un_favorite"
                                        width={"30px"}
                                        height={"30px"}
                                        position={"absolute"}
                                        bottom={"20px"}
                                        right={"5px"}
                                        zIndex={"1"}
                                    />
                                </chakra.Box>
                            }
                        })
                    }
                    {imagesState.is_images_fetch_loading && (
                        <chakra.Center>
                            <chakra.CircularProgress isIndeterminate color={"#0640af"}/>
                        </chakra.Center>
                    )}
                </chakra.Flex>
            </chakra.Center>
        </CheckAuthContainer>
    )
}
