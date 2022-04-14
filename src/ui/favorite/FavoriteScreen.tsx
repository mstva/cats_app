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
            <chakra.Center>
                <chakra.Flex flexDir={"column"} width={"320px"}>
                    <chakra.Flex
                        flexDir={"row"}
                        justifyContent={"space-between"}
                        p={"16px"}
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
                    {
                        favoriteState.images.map((image: ImageType) => {
                            return <chakra.Box
                                key={image.id}
                                position={"relative"}
                                display={"inline-flex"}
                            >
                                <chakra.Image
                                    src={image.url}
                                    width={"320px"}
                                    mx={"10px"}
                                    mb={"7px"}
                                    borderRadius={"5px"}
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
                        })
                    }
                </chakra.Flex>
            </chakra.Center>
        </CheckAuthContainer>
    )
}
