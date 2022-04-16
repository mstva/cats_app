import React, {useCallback, useEffect, useRef, useState} from "react";
import * as chakra from '@chakra-ui/react'
import logout from '../../images/logout.png'
import favorite from '../../images/favorite.png'
import un_favorite from '../../images/un_favorite.png'
import my_favorite from '../../images/my_favorite.png'
import {API_KEY, AUTH_PATH, FAVORITE_PATH} from "../../utils/constants";
import {useNavigate} from "react-router-dom";
import {CheckAuthContainer} from "../custom/CheckAuthContainer";
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../data/Store";
import {FetchImagesAction} from "../../data/feed_redux/FeedHelpers";
import {ImageType} from "../../data/feed_redux/FeedActions";
import {AddImageToFavoriteAction} from "../../data/favorite_redux/FavoriteActions";


export const FeedScreen = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const imagesState = useSelector((state: RootStore) => state.imagesReducer)
    const favoriteState = useSelector((state: RootStore) => state.favoriteReducer)
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

    const onAddFavorite = (image: ImageType) => {
        dispatch(AddImageToFavoriteAction(image))
    }

    const isFavourite = (image: ImageType) => {
        return favoriteState.images.includes(image)
    }

    return (
        <CheckAuthContainer>
            <chakra.Flex flexDir={"column"} width={"100%"}>
                <chakra.Flex
                    flexDir={"row"}
                    justifyContent={"space-between"}
                    py={"16px"}
                    px={"30px"}
                    mb={"10px"}
                    boxShadow='md'
                    position={"sticky"}
                    top={"0"}
                    width={"100%"}
                    zIndex={"20"}
                    backgroundColor={"#ffffff"}
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
                        onClick={() => navigate(FAVORITE_PATH)}
                    />
                </chakra.Flex>
                <chakra.Wrap spacing='10px' justify='center' >
                    {
                        imagesState.images.map((image: ImageType, index: number) => {
                            return <chakra.WrapItem key={image.id}>
                                <chakra.Box
                                    position={"relative"}
                                    display={"inline-flex"}
                                    width={"320px"}
                                    height={"320px"}
                                >
                                    {
                                        imagesState.images.length === index + 1
                                            ?
                                            <chakra.Image
                                                src={image.url}
                                                mx={"10px"}
                                                mb={"7px"}
                                                borderRadius={"5px"}
                                                ref={lastImageRef}
                                                width={"100%"}
                                            />
                                            :
                                            <chakra.Image
                                                src={image.url}
                                                mx={"10px"}
                                                mb={"7px"}
                                                borderRadius={"5px"}
                                                width={"100%"}
                                            />
                                    }
                                    <chakra.Image
                                        src={isFavourite(image) ? my_favorite : un_favorite}
                                        alt={isFavourite(image) ? "my_favorite" : "un_favorite"}
                                        width={"30px"}
                                        height={"30px"}
                                        position={"absolute"}
                                        bottom={"20px"}
                                        right={"5px"}
                                        zIndex={"1"}
                                        onClick={() => onAddFavorite(image)}
                                    />
                                </chakra.Box>
                            </chakra.WrapItem>
                        })
                    }
                </chakra.Wrap>
                {imagesState.is_images_fetch_loading && (
                    <chakra.Center>
                        <chakra.CircularProgress m={"20px"} isIndeterminate color={"#62CC6D"}/>
                    </chakra.Center>
                )}
            </chakra.Flex>
        </CheckAuthContainer>
    )
}
