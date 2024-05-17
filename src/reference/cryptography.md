# Cryptography

Here is a list of some of the cryptographic protocols or constant values used in **Qasmat**.

## Communication

The protocol [`noise`](https://docs.libp2p.io/concepts/secure-comm/noise/) is used instead of [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) to secure the communications.

## Confidentiality

All calculations are modular, the modulus used is the one defined in [RFC 3526](https://datatracker.ietf.org/doc/html/rfc3526#section-7). It of size 2 ^ 8192. 

## Integrity

[Pedersen's](https://link.springer.com/content/pdf/10.1007/3-540-46766-1_9.pdf#page=3) commitment scheme with [NIST P-256 curve](https://dissect.crocs.fi.muni.cz/curve/P-256) is used for file integrity.
