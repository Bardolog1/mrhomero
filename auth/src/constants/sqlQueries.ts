export const SELECT_USER_BY_EMAIL = 'SELECT * FROM usuarios WHERE user_email = ?';
export const INSERT_USER = 'INSERT INTO usuarios (user_nom, user_apels, user_email, user_pass, id_rol) VALUES (?, ?, ?, ?, 3)';
export const UPDATE_USER_RESET_CODE = 'UPDATE usuarios SET user_reset_code = ?, user_reset_code_expiration = ? WHERE id_user = ?';
export const SELECT_USER_BY_RESET_CODE = 'SELECT * FROM usuarios WHERE user_reset_code = ? AND user_reset_code_expiration > ?';
export const UPDATE_USER_PASSWORD = 'UPDATE usuarios SET user_pass = ?, user_reset_code = NULL, user_reset_code_expiration = NULL WHERE id_user = ?';
