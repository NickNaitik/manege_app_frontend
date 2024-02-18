export  interface TokenResponse {

    access_token?: string,
    refresh_token?: string,
    secretImageUri?: string,
    twoFactorEnabled?: boolean
    message?: string
}