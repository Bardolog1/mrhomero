Proceso RegistroUsuario
    Definir email, contrase�a, confirmacionContrase�a Como Caracter
    Definir arroba, punto, esEmailValido, esContrase�aValida Como Logico
    
    esEmailValido = Falso
    esContrase�aValida = Falso
    
    Mientras No esEmailValido Hacer
        Escribir "Ingresa tu correo electr�nico: "
        Leer email
        
        // Verificar si el email contiene "@" y "."
        arroba = Falso
        punto = Falso
        
        Para i = 1 Hasta Longitud(email) Hacer
            Si Subcadena(email, i, i) = "@" Entonces
                arroba = Verdadero
            FinSi
            Si Subcadena(email, i, i) = "." Entonces
                Si arroba Entonces
                    punto = Verdadero
                FinSi
            FinSi
        FinPara
        
        Si arroba Y punto Entonces
            esEmailValido = Verdadero
        Sino
            Escribir "El correo electr�nico no es v�lido. Int�ntalo de nuevo."
        FinSi
    FinMientras
    
    Mientras No esContrase�aValida Hacer
        Escribir "Ingresa tu contrase�a: "
        Leer contrase�a
        Escribir "Confirma tu contrase�a: "
        Leer confirmacionContrase�a
        
        Si Longitud(contrase�a) >= 8 Y contrase�a = confirmacionContrase�a Entonces
            esContrase�aValida = Verdadero
        Sino
            Escribir "La contrase�a debe tener al menos 8 caracteres y coincidir. Int�ntalo de nuevo."
        FinSi
    FinMientras
    Escribir "Registro completado con �xito."
    Escribir "Tu correo electr�nico es: ", email
	Proceso RegistroUsuario
		Definir email, contrase�a, confirmacionContrase�a Como Caracter
		Definir arroba, punto, esEmailValido, esContrase�aValida Como Logico
		
		esEmailValido = Falso
		esContrase�aValida = Falso
		
		Mientras No esEmailValido Hacer
			Escribir "Ingresa tu correo electr�nico: "
			Leer email
			
			// Verificar si el email contiene "@" y "."
			arroba = Falso
			punto = Falso
			
			Para i = 1 Hasta Longitud(email) Hacer
				Si Subcadena(email, i, i) = "@" Entonces
					arroba = Verdadero
				FinSi
				Si Subcadena(email, i, i) = "." Entonces
					Si arroba Entonces // El punto debe estar despu�s de la arroba
						punto = Verdadero
					FinSi
				FinSi
			FinPara
			
			Si arroba Y punto Entonces
				esEmailValido = Verdadero
			Sino
				Escribir "El correo electr�nico no es v�lido. Int�ntalo de nuevo."
			FinSi
		FinMientras
		
		Mientras No esContrase�aValida Hacer
			Escribir "Ingresa tu contrase�a: "
			Leer contrase�a
			Escribir "Confirma tu contrase�a: "
			Leer confirmacionContrase�a
			
			Si Longitud(contrase�a) >= 8 Y contrase�a = confirmacionContrase�a Entonces
				esContrase�aValida = Verdadero
			Sino
				Escribir "La contrase�a debe tener al menos 8 caracteres y coincidir. Int�ntalo de nuevo."
			FinSi
		FinMientras
		
		Escribir "Registro completado con �xito."
		Escribir "Tu correo electr�nico es: ", email
FinProceso

