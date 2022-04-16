import React from "react";
import * as chakra from '@chakra-ui/react'
import {CheckAuthContainer} from "../custom/CheckAuthContainer";
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../data/Store";
import {ImageType} from "../../data/feed_redux/FeedActions";
import my_favorite from "../../images/my_favorite.png";
import back_arrow from "../../images/back_arrow.png";
import {useNavigate} from "react-router-dom";
import {FEED_PATH} from "../../utils/constants";
import {RemoveImageFromFavoriteAction} from "../../data/favorite_redux/FavoriteActions";

export const FavoriteScreen = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const favoriteState = useSelector((state: RootStore) => state.favoriteReducer)

    const onRemoveFavorite = (image: ImageType) => {
        dispatch(RemoveImageFromFavoriteAction(image))
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
                        src={back_arrow}
                        alt='back_arrow'
                        width={"18px"}
                        height={"20px"}
                        cursor={"pointer"}
                        onClick={() => navigate(FEED_PATH)}
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
                        Favorites
                    </chakra.Text>
                    <chakra.Box/>
                </chakra.Flex>
                <chakra.Wrap spacing='10px' justify='center' >
                    {
                        favoriteState.images.map((image: ImageType) => {
                            return <chakra.WrapItem key={image.id}>
                                <chakra.Box
                                    position={"relative"}
                                    display={"inline-flex"}
                                    width={"320px"}
                                    height={"320px"}
                                >
                                    <chakra.Image
                                        src={image.url}
                                        mx={"10px"}
                                        mb={"7px"}
                                        borderRadius={"5px"}
                                        width={"100%"}
                                    />
                                    <chakra.Image
                                        src={my_favorite}
                                        alt="my_favorite"
                                        width={"30px"}
                                        height={"30px"}
                                        position={"absolute"}
                                        bottom={"20px"}
                                        right={"5px"}
                                        zIndex={"1"}
                                        onClick={() => onRemoveFavorite(image)}
                                    />
                                </chakra.Box>
                            </chakra.WrapItem>
                        })
                    }
                </chakra.Wrap>
            </chakra.Flex>
        </CheckAuthContainer>
    )
}
