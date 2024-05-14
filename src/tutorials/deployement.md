# Deployment

> 🚧​  **Work in progress:** This page is not finished, some information is missing.

In this tutorial you will learn how to deploy a **Qasmat** network. Note that it is cloud-agnostic.  

## Docker image and Kubernetes

The software is packaged in a [Docker](https://docs.docker.com/) image: the container assembles a binary version of the software and all the dependencies that are needed for it to run. It is stored in a [distribution registry](https://distribution.github.io/distribution/about/). 
A [Kubernetes](https://kubernetes.io/) entity manages different pods containing the Docker image along with some storage volumes. It is responsible for the deployment of the network and its stability.
Finally, an script is written to automate the different deployment phases. 

As a user you simply need to install a few packages, download the script and run it. 

## The script

### Ansible

We use [Ansible](https://www.ansible.com/) to automate the management of remote systems and control their desired state, in particular to deploy the **Qasmat** network.

A comprehensive diagram can be found [here](https://docs.ansible.com/ansible/latest/getting_started/index.html), but here is a description of the main components.

- Control machine (node)
	A system on which Ansible is installed. You run Ansible commands such as `ansible` or `ansible-inventory` on a control node. This should be any UNIX-like machine with python installed. It is possible to use a WSL too.
- Inventory
	A list of remote (managed) machines that are logically organized. You create an inventory on the control machine to describe host deployments to Ansible. In our case it is a `.yml` file
- Managed machine (node)
	A remote machine, system, or host, that Ansible controls. Does not require Ansible to be installed, but does require Python. The managed node also needs a user account (`ansible_user`) that can connect via SSH to the node with an interactive shell.

### The repository
  
The script is made of different files and is available at <!-- TODO: Add location (marketplace or public repo) and how to download it -->.

There are the following Ansible files:
- `ansible.cfg`: Ansible configuration file.
- `inventory.yml`: Remote hosts listed.
- `playbook.yml`: Ansible tasks list.
- `vars.yaml`: Variables as key-value pairs.

The playbook is the main file, it is a list of tasks that define the order in which Ansible performs operations, from top to bottom, to achieve an overall goal. 
 
## Configurations

<!-- TODO: Complete this part with the correct way to configure the files -->
You can write configuration files for the proxy or the storage servers and complete the script with them. See the [configuration section](../configuration.md) for more information.

## Launch the script

Finally, launch the script with 
```shell
# verify your inventory
ansible-inventory -i inventory.yml --list
# ping vps group in your inventory
ansible vps -m ping -i inventory.yml
# run the ansible playbook to execute the task list on the remote machine
ansible-playbook playbook.yml -i inventory.ymlansible launch
```

## Web client

Once deployed, the software can be used through the web client, see [the dashboard section](../online.md#the-dashboard) for more information about the interface. You can also check [the web client configuration section](../howto/webclient-deploy.md) to see the details on how to configure your client deployment.
