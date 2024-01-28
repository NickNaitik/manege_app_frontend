export  interface TokenResponse {

    access_token?: string,
    refreshToken?: string,
    secretImageUri?: string,
    twoFactorEnabled?: boolean
    message?: string
}