/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-jfbzc2c3.us', // the auth0 domain prefix
    audience: 'magueye-coffee', // the audience set for the auth0 app
    clientId: 'DFn0PEA2T6lX5F9TrT6ibrr6j7TIuGY7', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
