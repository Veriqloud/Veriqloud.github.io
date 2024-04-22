# Installation

**To be modified depending on what we will give to the user**

**Add the possibility to give the configuration file**


You can generate the docker image of `proxy_server` or `storage_server` with the `Dockerfile` provided.
make sure that you are in `LINCOS` folder, where the `Dockerfile` can be found. Make sure that [Docker Engine](https://docs.docker.com/engine/install/) is installed on your machine.

1. Start ssh agent and load your private key.
```shell
eval $(ssh-agent)
ssh-add ~/.ssh/id_rsa
```
2. Build docker image with the desired arguments. Allow some time, the project will be compiled too. `proxy-server-test` is the name of the image. 
```shell
docker buildx build -t proxy-server-test --progress=plain --build-arg="SERVER=proxy_server" --build-arg="PLAYER=Alice" --build-arg="SFLAG=" --build-arg="SNAME=" --ssh default=$SSH_AUTH_SOCK .
```
3. Run image in a container. `proxy` is the name of the container.
```shell
docker run -it --rm --name proxy proxy-server-test 
```
