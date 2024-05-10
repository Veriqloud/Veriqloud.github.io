# At rest

The secret file is distributed over the network of storage servers with a threshold *(k,n)* :
- *k* : the number of shares required to rebuild the secret
- *n* : the number of shares distributed (*>=k*)
This threshold offers two main security features :

## Redundancy

Because *n* can be greater than *k*, a secret can be retrieve even if some storage servers are unavailable. 
For example a secret stored with threshold *(3,5)* : the information of only 3 servers is required which means that if 2 servers are unavailable, the secret can still be reconstructed !

## Confidentiality against mobile adversary

The threat here is an adversary that gains access to less than *k* storage servers in a given time. The scheme ensure that it will get no information about the file in this given time. The shares are renewed on a regular basis to avoid the adversary to gain access to more than *k* servers and thus be able to retrieve the file.
For example if a secret is stored with threshold *(3,5)*, an adversary reading the content of 2 storage servers won't have any information on the secret file.
