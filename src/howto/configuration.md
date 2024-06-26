# Configuration

Each server (proxy or storage) can be started with the default configuration or a custom one.

### Default values

Here are the default values :
- discovery : local
- network security : public
- encryption_and_kms : None
- web port : fixed 3000
- web address : 0.0.0.0
- max file size : 1 000 000 000 bytes (1GB)
- allowed cors origins : * (allow everything)
- checking_interval: 1 day
- renewal_duration: 15 days
- expiry_duration: 30 days
- proxy_reconnection_interval: 30 seconds

However it is possible to write a custom configuration.

### Proxy

```
{
	"discovery_mode":"Local" or {"Remote": {"proxy_port": <port>}},
	"network_security_configuration":{
		"network_security":"Public" or {"Private":{"path_to_preshared_key":"<path to key>"}},
		"encryption_and_kms": (optional) ["AES" or "OTP", "address":"<address of the kms>","port":<port of the kms>]
	},
	"web_configuration":{
		"bind_port":{"bind_port":{"Fixed":<port>} or "Auto"},
		"bind_address":"<address>",
		"max_file_size": <positive number>,
        	"allowed_cors_origins": ["*" or <list of allowed origins>]
	},
	"time_keeper_configuration": {
		"checking_interval": {"secs":<number of seconds>,"nanos":0},
		"renewal_duration": {"secs":<number of seconds>,"nanos":0},
		"expiry_duration":{"secs":<number of seconds>,"nanos":0}
	}
}
```

### Storage

```
{
	"discovery_mode":"Local" or {"Remote": {"proxy_address": "<address>", "proxy_port": <port>}},
	"network_security_configuration":{
		"network_security":"Public" or {"Private":{"path_to_preshared_key":"<path to key>"}},
		"encryption_and_kms": (optional) ["AES" or "OTP", "address":"<address of the kms>","port":<port of the kms>]
	},
	"proxy_reconnection_interval": <number of seconds>
}
```

### Value descriptions 

If you need a pre-shared key, it can be produced with the following command : 
```
openssl rand -hex 32
```
