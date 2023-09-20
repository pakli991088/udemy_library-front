export const oktaConfig = {
    clientId : "0oabeo2sn8SUiLAek5d7",
    issuer : "https://dev-06175362.okta.com/oauth2/default",
    redirectUri : "http://localhost:3001/login/callback",
    scopes: ['openid','profile','email'],
    pkce : true,
    disableHttpCheck: true,
}