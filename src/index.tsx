import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'
import {App} from "./App";
import {Store} from "./data/Store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={Store}>
        <ChakraProvider>
            <App />
        </ChakraProvider>,
    </Provider>,
  document.getElementById('root')
);
