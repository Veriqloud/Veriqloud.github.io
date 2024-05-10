# Authentication 

Qasmat has support for authentication through the usage of the `Remote-User` and `Remote-Email` header. This header needs to contain a unique string identifying the user, which in our case is an username.  
Please note that while the `Remote-User` does not need to be unique, the `Remote-Email` needs to be unique because it authenticates the user for Qasmat. Your authentication layer must verify that emails are used only for one account.

One of the authentication provider that implements these headers is [Authelia](https://www.authelia.com/), an open-source authentication and authorization server that we used during the development to manage our users. 

<div class="warning">If you need authentication, you need to make sure Qasmat is <b>not</b> directly accessible from the outside, and that requests to the API are all intercepted by your authentication layer. If you are using <b>Authelia</b>, you should check the <a href="https://www.authelia.com/overview/prologue/supported-proxies/">Supported Proxies</a> page on their documentation.</div>

For development purposes, we used [Caddy](https://caddyserver.com/) for reverse-proxying Qasmat and Authelia, and also to serve the web client. Please be wary that to use Authelia you need HTTPS to be activated (and, it is a good practice to just use HTTPS by default).

## Web client 
You'll also need to secure your web client behind your authentication layer to make sure anyone trying to use it is authenticated, since the web client does not have the login/logout/register mechanisms implemented.  
In the web client, you'll be able to change the Qasmat's URL, in the **Settings** tabs, to specify a specific instance of Qasmat that you'd want to use. By default, it is [http://localhost:3000](http://localhost:3000).

## CORS (Cross-Origin Resource Sharing)

In order to use authentication in a browser context, you may need to configure **Cross-Origin Resource Sharing**.  
Cross-Origin Resource Sharing is a way for your browser to know if it's allowed to send requests to your API.  
For Qasmat, you'll only need to specify the allowed origins field and put your allowed URL (for example, https://example.com). Note that if you use `*` as an origin, Qasmat will start in public mode and any client will be able to access Qasmat, which could be a security risk.
