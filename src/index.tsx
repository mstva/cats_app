import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'
import {Store} from "./data/Store";
import {Provider} from "react-redux";
import {AppRouter} from "./router/AppRouter";

ReactDOM.render(
    <Provider store={Store}>
        <ChakraProvider>
            <AppRouter />
        </ChakraProvider>,
    </Provider>,
  document.getElementById('root')
);
