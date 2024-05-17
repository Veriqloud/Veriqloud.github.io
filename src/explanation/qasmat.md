# What is **Qasmat** ?

**Qasmat** is a distributed secure storage software. It is based on the protocol Lincos which itself is based on Shamir's secret sharing scheme.

Shamir's Secret Sharing is a cryptographic method that allows a secret to be divided into several shares. The secret can only be reconstructed by combining a certain number of these shares. This is done by creating a polynomial where the secret is a point on the graph, and shares are other points. To reconstruct the secret, a minimum number of shares are used to recreate the polynomial thanks to Lagrange's interpolation. This method ensures security as long as the number of shares combined is less than the threshold. 

Lincos is a protocol which includes a secret sharing scheme such as Shamir's which ensures the confidentiality of data at rest. The protocol also describes how to manage confidentiality in transit, integrity and authentication to achieve long-term unconditional security.

Finally, **Qasmat** is an implementation of this protocol in Rust. It consists of two programs : 
- The proxy : It interacts with the user via its [API](../api), implements the Shamir and Lagrange algorithms, handles integrity proofs, etc.
- The storage servers: They respond to requests coming from the proxy server by storing or retrieving shares in their database.

