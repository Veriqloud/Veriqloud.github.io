# Configuration

Some parameters of the proxy and the storage servers and configurable. Depending on the deployement, our support might have already fill the correct values. Here is a template of both configuration files :

## Proxy
```json
{
  "network": {
    "path_to_preshared_key": "<path to the key that make the network private>",
    "port": "<port on which the proxy is available as a peer of the network>",
    "discovery": "Passive" (it wait for the storage servers to connect)
  },
  "api": {
    "address": "<api IP>",
    "port": "<api port>"
  },
  (parameters for the share renewal)
  "share_renewal": {
    "checking": {
      "years": (optional)"<number of years>",
      "days": (optional)"<number of days>",
      "hours": (optional)"<number of hours>",
      "seconds": (optional)"<number of seconds>"
    },
    "renewal": {
      "years": (optional)"<number of years>",
      "days": (optional)"<number of days>",
      "hours": (optional)"<number of hours>",
      "seconds": (optional)"<number of seconds>"
    },
    "expiration": {
      "years": (optional)"<number of years>",
      "days": (optional)"<number of days>",
      "hours": (optional)"<number of hours>",
      "seconds": (optional)"<number of seconds>"
    }
  }
}
```

## Storage
```json
{
  "proxy_reconnection_interval": <Interval in seconds for reconnection to the proxy>,
  "storage_mode": {
    "Disk" : {
        "path_to_folder": (optional) "<folder to store the share files>",
    }
    (or)
    "S3" :  {
        "region": "<Region of the S3 instance>",
        "bucket_name": (optional) "<Name of the bucket>",
    }
  },
  "network": {
    "path_to_preshared_key": "<path to the key that make the network private>",
    "discovery": {
      "Manual": {
        "servers": [
          {
            "address": "<Ip of the proxy>",
            "port": <port of the proxy>
          }
        ]
      }
    }
  }
}
```

Configuration files are also available in `toml`.

