# Cryptography

> 🚧​  **Work in progress:** This page is not finished, some information is missing.
<!-- TODO: Complete the list -->

Here is a list of the cryptographic protocols or constant values used in Qasmat.

## Communication

To secure the communication the protocol [`noise`](https://docs.libp2p.io/concepts/secure-comm/noise/) is used instead of [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security).

## Confidentiality

All calculation are modular, the modulus used is the one defined in [RFC 3526](https://datatracker.ietf.org/doc/html/rfc3526#section-7). It is in the order of magnitude of 2 ^ 8192. 

## Integrity

Then commitment scheme used is [Pedersen's](https://link.springer.com/content/pdf/10.1007/3-540-46766-1_9.pdf#page=3) with [NIST P-256 curve](https://dissect.crocs.fi.muni.cz/curve/P-256).
