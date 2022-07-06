import { useState } from 'react'
import '../components/styles/styleLogin.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function Login(){
	const [emailUser, setEmailUser] = useState('')
	const [passwordUser, setPasswordUser] = useState('')

	return (
		<section className="containerGeral">
			<div className="containerLogin">
				<header className="containerCirclePizzaiolo">
					<div className="">IMG</div>
				</header>

				<section className="containerLoginDados">
					<h1>Bem vindo!</h1>
					<div className="mb-4">
						<TextField id="outlined-basic" label="E-mail" variant="outlined" />
					</div>
					<div className="mb-4">
						<TextField id="outlined-basic" label="Senha" variant="outlined" />
					</div>

					<Button variant="contained">Login</Button>
				</section>
			</div>
		</section>

	)
}

export default Login;
