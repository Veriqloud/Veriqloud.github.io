# What is **Qasmat**?

**Qasmat** is a distributed secure storage software based on the Lincos protocol, which itself is built upon Shamir's Secret Sharing scheme.

Shamir's Secret Sharing is a cryptographic method that divides a secret into several shares. The secret can only be reconstructed by combining a certain number of these shares. This is achieved by creating a polynomial where the secret is a point on the graph, and shares are other points. To reconstruct the secret, a minimum number of shares are used to recreate the polynomial through Lagrange interpolation. This method ensures security as long as the number of shares combined is less than the threshold.

Lincos is a protocol that includes a secret sharing scheme, such as Shamir's, to ensure the confidentiality of data at rest. The protocol also describes how to manage confidentiality in transit, integrity, and authentication to achieve long-term unconditional security.

Finally, **Qasmat** is an implementation of this protocol in Rust. It consists of two programs:
- The proxy: It interacts with the user via an API, implements the Shamir and Lagrange algorithms, handles integrity proofs, etc.
- The storage servers: They respond to requests from the proxy server by storing or retrieving shares in their database.
