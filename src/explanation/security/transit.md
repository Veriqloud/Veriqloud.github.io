# In transit: the **Quantum** part

Communication between the proxy server and the storage servers must remain secure to prevent an attacker from retrieving the shares and reconstructing the secret. This can be done with either classical or quantum cryptography.

Classical security uses standard protocols, see the [cryptography section](../../reference/cryptography.md) for more information.

## Quantum cryptography

But **Qasmat** can also run on top of a [QKD](https://en.wikipedia.org/wiki/Quantum_key_distribution) system (see [**Qline**](https://veriqloud.com/solutions/qline-technical-overview/)): using keys produced with quantum communication and achieve information-theoretic security. 

This requires a software stack to apply the protocol and manage the keys. In addition, to be quantum-ready it is possible to simulate the hardware using our software.

Those three pieces of software form a stack that is used with **Qasmat** to allow quantum-readiness.

![Architecture](../../../images/architecture.webp)

## ETSI 14

In order to be able to use different QKD systems, **Qasmat** is based on the standard [ETSI 14](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/014/01.01.01_60/gs_qkd014v010101p.pdf). This is a REST-based API used by most of QKD system to serve the key produced. Our software retrieves the keys using the requests and responses described in this document and can thus work with most of the QKD systems.
