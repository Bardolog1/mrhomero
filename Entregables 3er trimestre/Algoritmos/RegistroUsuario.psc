Proceso RegistroUsuario
    Definir nombres, apellidos, email, contraseņa, confirmacionContraseņa Como Caracter
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
	Escribir "Ingrese contraseņa"
	Leer contraseņa
	Escribir "Confirmar contraseņa"
	Leer confirmacionContraseņa
	
	Si email = usuario_email Entonces
		Escribir "El usuario ya existe"
	SiNo
		Si contraseņa <> confirmacionContraseņa Entonces
			Escribir "Las contraseņas no coinciden"
		SiNo
			Si Longitud(contraseņa) < 8 Entonces
				Escribir "La contraseņa debe tener un minimo de 8 caracteres"
			SiNo
				Escribir "Usuario registrado con exito"
			FinSi
		FinSi
	FinSi
	

	
FinProceso

