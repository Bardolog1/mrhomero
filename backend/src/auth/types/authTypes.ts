
export interface MailOptions {
    from: string;
    to: string;
    subject: string;
    html: string;
}

export interface JwtPayload {
    userId: number;
    role: string;
}
