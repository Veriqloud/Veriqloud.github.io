# In transit

Communication between the proxy server and the storage servers must remain secure to prevent an attacker from retrieving the shares and reconstructing the secret. This can be done with classical or quantum cryptography.

Classical security uses standards protocols, see the [cryptography section](../../cryptography) for more information.

## Quantum cryptography

But Qasmat can also run on top of a [QKD](https://en.wikipedia.org/wiki/Quantum_key_distribution) system (see [Qline](https://veriqloud.com/solutions/qline-technical-overview/)): using keys produces with quantum communication and achieve information-theoretical security. 

This require a stack a software to apply the protocol and manage the keys. Moreover, a the quantum hardware can be simulated with a software in order to replace it until it is mature enough.

Those three software make up a stack which is deployed with Qasmat to allow quantum-readiness.

