# Deploy the web client

In order to access **Qasmat**, you can install the official web client on your server. The web client is a SPA (single-page application) built with VueJS 3 and Typescript.

After deploying the client, you can configure it with the `config/config.json` file.

The configuration file accepts these options:
```json 
{
    "authAddress": "https://auth.provider.url/",
    "APIAddress": "https://api.qasmat.url/api",
    "isPublicInstance": false,
    "minThreshold": 2,
    "canEditConfig": false
}
```

- `authAddress` is the URL of your authentication provider. It is used to make the logout button work in the Settings tab.
- `APIAddress` is the URL of your Qasmat's proxy server.
- `isPublicInstance` toggle whether or not the Qasmat's proxy server you're trying to use is public (CORS Allowed Origins set to Any/\*). 
- `minThreshold` is the minimum number of servers needed to protect a file. In order to work, it must be positive and not equal to 0. Though, using 1 is not recommended since it is an uneffective way of using Qasmat.
- `canEditConfig` toggle whether or not the user can edit the `authAddress`, `APIAddress` and `isPublicInstance` properties of their cliente
