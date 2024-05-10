# At rest

The secret file is distributed over the network of storage servers with a threshold *(k,n)* :
- *k* : the number of shares required to rebuild the secret
- *n* : the number of shares distributed (*>=k*)
This threshold offers two main security features :

## Redundancy

Since *n* can be greater than *k*, a secret can be recovered despite unavailability of some storage servers. 
For example a secret stored with threshold *(k=3,n=5)* : the information of only 3 servers is required which means that if 2 servers are unavailable, the secret can still be reconstructed !

## Confidentiality against mobile adversary threat

The threat here is an adversary who gains access to less than *k* storage servers in a given time. The scheme ensures that it will get  no information on the file in this given time. The shares are renewed periodically to prevent the adversary from gaining access to more than *k* servers and thus being able to retrieve the file.

For example if a secret is stored with threshold *(k=3,n=5)*, an adversary who reads the contents of 2 storage servers won't get any information on the secret file.
