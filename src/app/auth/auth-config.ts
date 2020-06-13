import { Configuration } from 'msal';
import { MsalAngularConfiguration } from '@azure/msal-angular';

export namespace Auth {
     export const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

     export const config : Configuration = {
        auth: {
          clientId: 'b67ad60b-5840-4c3f-9b29-802dbd137186', // This is your client ID
          authority: 'https://login.microsoftonline.com/17fcba7b-59c9-43a8-b91e-62d17ea2e5d9', // This is your tenant ID
          redirectUri: 'http://localhost:4200/auth/callback'// This is your redirect URI
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: Auth.isIE, // Set to true for Internet Explorer 11
        },
      };
    export const options: MsalAngularConfiguration = {
        popUp: !Auth.isIE,
        consentScopes: [
          'user.read',
          'openid',
          'profile',
        ],
        unprotectedResources: [],
        protectedResourceMap: [
            ['https://graph.microsoft.com/v1.0/me', ['user.read']]
          ],
        extraQueryParameters: {}
      }
}
