# In transit

Communication between the proxy server and the storage servers must remain secure to prevent an attacker from retrieving the shares and reconstructing the secret. This can be done with either classical or quantum cryptography.

Classical security uses standard protocols, see the [cryptography section](../../reference/cryptography.md) for more information.

## Quantum cryptography

But **Qasmat** can also run on top of a [QKD](https://en.wikipedia.org/wiki/Quantum_key_distribution) system (see [**Qline**](https://veriqloud.com/solutions/qline-technical-overview/)): using keys produced with quantum communication and achieve information-theoretic security. 

This requires a software stack to apply the protocol and manage the keys. In addition, to be quantum-ready it is possible to simulate the hardware using our software.

Those three pieces of software form a stack that is used with **Qasmat** to allow quantum-readiness.

![Architecture](../../../images/architecture.webp)
