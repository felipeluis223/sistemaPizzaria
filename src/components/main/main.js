import { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import './styleMain.css'
import Header from './components/Header.js'
import LightTheme from '../../themes/light.js'
import * as React from 'react';

function Main(){
	return (
		<ThemeProvider theme={LightTheme}>
			<Header />
		</ThemeProvider>
	)
}

export default Main;
