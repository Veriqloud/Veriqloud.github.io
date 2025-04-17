# Requirements

First, we assume that no VPN connection is established between the nodes where K3s will be installed. This would be the case, for example, in any multi-cloud or hybrid cloud environment.

The [Embedded Multicloud K3s Solution](https://docs.k3s.io/networking/distributed-multicloud#embedded-k3s-multicloud-solution) is installed via an Ansible script.

## Hardware Requirements

The requirements depends on the license, this is the minimum.

### Proxy
|     | Minimum | Recommended |
| --- | ------- | ----------- |
| CPU | 2 cores | 2 cores     |
| RAM | 8 GiB   | 16 GiB      |

### Storage
|     | Minimum | Recommended |
| --- | ------- | ----------- |
| CPU | 1 core  | 2 cores     |
| RAM | 2 GiB   | 4 GiB       |

## System Requirements

All nodes should satisfy the following requirements:

- **Operating System:**
  - Ubuntu 22.04 or later
  - Python code should be able to run, which is typically the case with the default installation
  - `ufw` should be disabled

- **Connection:**
  - SSH connection
  - Root access
  - Internet access

- **Basic Ports (should be open):**
  - 22 (SSH)
  - 80 (HTTP)
  - 443 (HTTPS)

- **Ports for K3s (should be open and available):**
  - 6443 (TCP, K3s supervisor and Kubernetes API Server)
  - 8472 (TCP, Flannel VXLAN)
  - 10250 (TCP, Kubelet metrics)
  - 51820 (UDP, Flannel WireGuard IPv4)
  - 51821 (UDP, Flannel WireGuard IPv6)

- **Ports for Qasmat (should be open and available):**
  - 30000 (NodePort for proxy)
  - 49999 (Proxy port)

If internet traffic is blocked on the node, the cluster can still be managed through port forwarding (6443) via an SSH tunnel.
