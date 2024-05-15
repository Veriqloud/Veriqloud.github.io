# Authentication 

**Qasmat** has a "limited" support for authentication: you need to have your own authentication layer on top of it.

## Header SSO (Header Single Sign-on)  

**Qasmat** has support for authentication through the usage of the `Remote-User` and `Remote-Email` header. This header needs to contain a unique string identifying the user, which in our case is an email.  

Please note that while the `Remote-User` does not need to be unique, the `Remote-Email` needs to be unique because it authenticates the user for **Qasmat**. Your authentication layer must verify that emails are used only for one account.

One of the authentication provider that implements these headers is [**Authelia**](https://www.authelia.com/), an open-source authentication and authorization server that we used during the development to manage our users. 

<div class="warning">If you can access <b>Qasmat</b> without going through the authentication provider you're putting your users at risk since anyone will be able to spoof another user identity just by knowing their email address.<br>If you need authentication, you need to make sure Qasmat is <b>not</b> directly accessible from the outside, and that requests to the API are all intercepted by your authentication layer. If you are using <b>Authelia</b>, you should check the <a href="https://www.authelia.com/overview/prologue/supported-proxies/">Supported Proxies</a> page on their documentation.
</div>

During development and testing, we used [Caddy](https://caddyserver.com/) for reverse-proxying **Qasmat** and **Authelia**, and also to serve the web client. Please note that to use **Authelia** you need HTTPS to be activated (and, it is a good practice to use HTTPS by default!).

Here's a scheme of how the apps must be on your server from a user point of view. the web client and **Qasmat** must not be accessible without passing by the authentication provider.  
```
                       User
                         |
                         |
.----- Authentication provider (Authelia, ...) -----.
|                                                   |
|    .------------------.        .--------------.   |
|    |    Web client    |        |    Qasmat    |   |
|    '------------------'        '--------------'   |
|                                                   |
'---------------------------------------------------'
```

## Web client 
You'll also need to secure your web client behind your authentication layer to make sure anyone trying to use it is authenticated, since the web client does not have the login/logout/register mechanisms implemented.  

In the web client's **Settings** tab, you'll be able to change the **Qasmat** server's URL to specify a specific instance of Qasmat that you'd want to use (if your web client provider permits it, see [Deploy the web client](/howto/webclient-deploy.md)). By default, it is [http://localhost:3000](http://localhost:3000).

## CORS (Cross-Origin Resource Sharing)

In order to use authentication in a browser context, you may need to configure **Cross-Origin Resource Sharing**.  
CORS is a way for your browser to know if it's allowed to send requests to your API. Your browser will send a pre-flight request to the server to get the settings of it, and then will decide if it can pursue with the real request.  

For Qasmat, you'll only need to specify the allowed origins field and put your allowed URL (for example, https://example.com). Note that if you use `*` as an origin, **Qasmat** will start in public mode and any client that can access your server will be able to access your instance, which could be a security risk.  

The CORS configuration used for Qasmat is:
- Allow the origins specified in the configuration.
- Let web browsers access the `X-File-Integrity` header.
- Accept any header in the requests received by the server.
- Accept credentials if the origin is anything else than `*`.

For more informations, you can check [MDN - Cross-origin resource sharing (CORS)](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS). 
