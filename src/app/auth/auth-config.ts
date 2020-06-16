import { Configuration } from 'msal';
import { MsalAngularConfiguration } from '@azure/msal-angular';

export namespace Auth {
     export const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
      export const scopes = ["user.read", "openid", "profile","https://dnpassociates.sharepoint.com/AllSites.FullControl"];
     export const config : Configuration = {
        auth: {
          clientId: 'ba10a9fd-6325-44de-a73b-c309f6844cc5', // This is your client ID
          authority: 'https://login.microsoftonline.com/17fcba7b-59c9-43a8-b91e-62d17ea2e5d9', // This is your tenant ID
          redirectUri: 'http://localhost:4200/auth/callback',// This is your redirect URI
          postLogoutRedirectUri: 'http://localhost:4200/public/index'
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: Auth.isIE, // Set to true for Internet Explorer 11
        },
      };
    export const options: MsalAngularConfiguration = {
        popUp: !Auth.isIE,
        consentScopes: Auth.scopes,
        unprotectedResources: [],
        protectedResourceMap: [
            // ['https://dnpassociates.sharepoint.com',['AllSites.FullControl']],
            ['https://graph.microsoft.com/v1.0/me', ['user.read']]
            
          ],
        extraQueryParameters: {}
      }
}
