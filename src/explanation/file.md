# A file journey

First, the file is sent from the user's browser to the proxy server via HTTP/HTTPS. Then, because of the modulus in all the calculations, the file is split into chunks of size smaller than the modulus : the parts.
Each part goes through Shamir: *n* shares are created. When enough shares are ready to be sent to a specific storage, the communication module triggers a request-response exchange with the storage server.


```
+----------------+                                                              
|                |                                                              
| User's browser |                                                              
|                |                                                              
+---------+------+                                               +-------------+
          |                                                      |             |
          |HTTP/HTTPS                                            |  Storage 1  |
       +--+--------------------------------------------------+   |             |
       |  |               Proxy server                       |   +------^------+
       |  |                                      +---------+ |          |       
       |  |                         Share 1,1    |Share 1,1| |          |       
       |  |               +-------> ...          |...      +-+----------+       
       |  v               |         Share 1,n    |Share p,1| |       +-------------+
       |               Part 1                    +---------+ |       |             |
       | File ------>  ...                           ...    -+-------> Storage ... |
       |               Part p                    +---------+ |       |             |
       |                  |         Share p,1    |Share 1,n| |       +-------------+
       |                  +-------> ...          |...      +-+----------+        
       |                            Share p,n    |Share p,n| |          |        
       |                                         +---------+ |          |        
       |                                                     |   +------v------+ 
       +-----------------------------------------------------+   |             | 
                                                                 |  Storage p  | 
                                                                 |             | 
                                                                 +-------------+ 
```

Once all part have been processed, a description of the file containing all the necessary information is stored on the proxy server.
