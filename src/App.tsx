import React from 'react'
import * as chakra from '@chakra-ui/react'
import {AuthScreen} from "./ui/auth/AuthScreen";


export const App = () => {
  return (
      <chakra.Center>
          <AuthScreen/>
      </chakra.Center>
  )
}
