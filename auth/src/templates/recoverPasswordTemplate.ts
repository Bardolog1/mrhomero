export const recoverPasswordTemplate = (verificationCode: string): string => {
    return `
      <div class="container" style="background-color: #212529; color: #fff; padding: 80px;">
          <div class="imagen" style="text-align: center;">
              <img src="https://mrhomero.onrender.com/logo.png" alt="Logo" style="width: 20%; height: 20%;">
          </div>
          <h1>Recuperación de Contraseña</h1>
          <p style="font-size: 25px;">Tu código de verificación es:</p>
          <h2 style="font-size: 40px; font-weight: bold; color: #FFC107;">${verificationCode}</h2>
          <p>Por favor, ingrésalo en el formulario de recuperación de contraseña.</p>
          <p>Este código caducará en 1 hora.</p>
          <p>Si no solicitaste este cambio, ignora este mensaje.</p>
          <p>Gracias,</p>
          <p>El equipo de soporte</p>
      </div>
    `;
  };
  