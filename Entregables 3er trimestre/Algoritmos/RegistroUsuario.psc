Proceso RegistroUsuario
    Definir nombres, apellidos, email, contrase�a, confirmacionContrase�a Como Caracter
	Definir usuario_nom, usuario_apels, usuario_email, usuario_pass Como Caracter
	usuario_nom = "Dilan"
	usuario_apels = "Lopez"
	usuario_email = "dilanfantas@gmail.com"
	usuario_pass = "123456789"
	Escribir "Ingrese nombres"
	Leer nombres
	Escribir "Ingrese apellidos"
	Leer apellidos
	Escribir "Ingrese email"
	Leer email
	Escribir "Ingrese contrase�a"
	Leer contrase�a
	Escribir "Confirmar contrase�a"
	Leer confirmacionContrase�a
	
	Si email = usuario_email Entonces
		Escribir "El usuario ya existe"
	SiNo
		Si contrase�a <> confirmacionContrase�a Entonces
			Escribir "Las contrase�as no coinciden"
		SiNo
			Si Longitud(contrase�a) < 8 Entonces
				Escribir "La contrase�a debe tener un minimo de 8 caracteres"
			SiNo
				Escribir "Usuario registrado con exito"
			FinSi
		FinSi
	FinSi
	

	
FinProceso

