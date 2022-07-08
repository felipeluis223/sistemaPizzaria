import { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import '../components/styles/styleLogin.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import LightTheme from '../themes/light.js'

function Login(){
	const [emailUser, setEmailUser] = useState('')
	const [passwordUser, setPasswordUser] = useState('')

	return (
		<ThemeProvider theme={LightTheme}>
			<section className="containerGeral">
				<div className="containerLogin">
					<div className="containerCirclePizzaiolo">
					</div>

					<section className="containerLoginDados">
						<h1>Bem vindo!</h1>
						<div className="mb-4">
							<TextField id="outlined-basic" label="E-mail" variant="outlined" />
						</div>
						<div className="mb-4">
							<TextField id="outlined-basic" label="Senha" variant="outlined" color="primary"/>
						</div>

						<Button variant="contained">Login</Button>
					</section>
				</div>
			</section>
		</ThemeProvider>
	)
}

export default Login;
