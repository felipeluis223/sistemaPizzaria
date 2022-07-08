import { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import '../components/styles/styleLogin.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import LightTheme from '../themes/light.js'

function Login(){
	const [emailUser, setEmailUser] = useState('')
	const [passwordUser, setPasswordUser] = useState('')

	// Função responsável por receber valores do login (user e password) e verificar se o funcionário conseguiu acessar o sistema.
	// User: admin
	// Password: admin
	const ValidateFuncionario = ()=>{
		if((emailUser === "admin")&&(passwordUser === "admin")){
			console.log("acessou")
			return true
		}
		else{
			console.log("acesso negado")
			return false
		}
	}

	return (
		<ThemeProvider theme={LightTheme}>
			<section className="containerGeral">
				<div className="containerLogin">
					<div className="containerCirclePizzaiolo">
					</div>

					<section className="containerLoginDados">
						<h1>Olá, seja bem vindo!</h1>
						<div className="mb-4">
							<TextField 
								id="outlined-basic" 
								onChange={(e)=>setEmailUser(e.target.value)}
								label="E-mail" 
								variant="outlined" />
						</div>
						<div className="mb-4">
							<TextField 
								id="outlined-basic"
								type="password"
								onChange={(e)=>setPasswordUser(e.target.value)}
								label="Senha" 
								variant="outlined" 
								color="primary"/>
						</div>
						<Button variant="contained" onClick={ValidateFuncionario}>Login</Button>
					</section>
				</div>
			</section>
		</ThemeProvider>
	)
}

export default Login;
