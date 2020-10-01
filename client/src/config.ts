// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'kr2mnsf8rd'
export const apiEndpoint = `https://kr2mnsf8rd.execute-api.eu-west-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-l1t4mrdg.us.auth0.com',            // Auth0 domain
  clientId: 'IzfdS1VV7RLRAjdlKg2AsZmEXO64yR0T',          // Auth0 client id
  clientSecret: '5d6Pp1zWfGLu6FTC8xAit8S0J_iw628OoWFH5ag9J0jEkzQ_87dpK_m72pbJE3Gt',// Auth0 client secret
  callbackUrl: 'http://localhost:3000/callback'
}
