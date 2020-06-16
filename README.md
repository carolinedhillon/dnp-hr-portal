.\Create-SelfSignedCertificate.ps1 -CommonName "D&P Associates" -StartDate 2017-10-01 -EndDate 2022-10-01

- To copy the portal seed from git hub: Git clone (paste link from github)

- Go to dnpassociates.sharepoint.com and create a subsite with the project name (this will allow data storage)

- o to azure active directory to sort the login/ authentification part. Go to app registration and register a multitenant directory. Go to auth-config.ts and paste the client id and tenant id.
Go to API permission, add permission to Sharepoint and Microsoft Graph (check other sites permissions and give same + Grant admin content)
Go to Authentication and add configuration/ redirect URI/ logout URL (give same details as other site)

- Change Sharepoint url in dashboard.resolver

