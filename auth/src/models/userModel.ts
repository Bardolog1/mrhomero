export interface User {
    id_user: number;
    user_nom: string;
    user_apels: string;
    user_email: string;
    user_pass: string;
    id_rol: number;
    user_reset_code?: string;
    user_reset_code_expiration?: string;
}
