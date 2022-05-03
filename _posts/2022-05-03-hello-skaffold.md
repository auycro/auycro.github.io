---
layout: post
title: "Hello Skaffold"
date: 2022-05-03
keywords: ",skaffold,k8s,nodejs"
---

THis is just a memo about how I created a skaffold yaml from an existing Node.js app. 

## Prerequisites

1. [minikube](https://minikube.sigs.k8s.io/docs/start/)
2. [skaffold](https://skaffold.dev/docs/install/)
3. [kubectl](https://kubernetes.io/docs/tasks/tools/)
4. Docker
5. Node.js with yarn

## Create Node.js app (Vite)

```sh
$ yarn create vite
✔ Project name: … webapp
...
...
$ yarn install
$ yarn dev
```

You will get webapp folder here

## Prepare Dockerfile

webapp/Dockerfile

```yaml
#for dev purpose
FROM node:16
EXPOSE 3000

WORKDIR /workspace/app

COPY package.json package.json
RUN yarn install

COPY . .

CMD ["yarn", "dev","--host"]
```

Test run docker

```sh
$ docker build -t nodejs-webapp .
$ docker run -it --rm -p 3000:3000 --name sample nodejs-webapp
```

Optional: .dockerignore

```yaml
node_modules
kubernetes
```

## Setting up minikube and skaffold

[quickstart for minikube and skaffold](https://skaffold.dev/docs/quickstart/)

Start minikube

```sh
$ minikube start --profile custom
$ skaffold config set --global local-cluster true
$ eval $(minikube -p custom docker-env)
```

## Prepare k8s yaml

web/kubernetes/k8s-pod.yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: webapp
spec:
  containers:
  - name: webapp
    image: nodejs-webapp
```

web/kubernetes/k8s-pod-local.yaml

```
apiVersion: v1
kind: Pod
metadata:
  name: webapp
spec:
  containers:
  - name: webapp
    image: nodejs-webapp
    imagePullPolicy: Never # prevent from pulling image
  restartPolicy: Never
```

Test pod in minikube

```sh
$ kubectl apply -f web/kubernetes/k8s-pod-local.yaml
$ kubectl get all
$ kubectl port-forward webapp 3000:3000
```

Check app with curl

```sh
$ curl localhost:3000
```

## Test application with skaffold

```sh
$ skaffold init
```

web/skaffold.yaml

```yaml
apiVersion: skaffold/v2beta28
kind: Config
metadata:
  name: sample-skaffold
build:
  artifacts:
  - image: nodejs-webapp
    context: web
    docker:
      dockerfile: Dockerfile
deploy:
  kubectl:
    manifests:
    - web/kubernetes/k8s-pod.yaml
```

Test run

```sh
$ skaffold dev
```

Create proxy to test webapp

```sh
$ kubectl port-forward webapp 3000:3000
```

## Project Structure

```
hello-skaffold
├── skaffold.yaml
└── web
    ├── Dockerfile
    ├── README.md
    ├── index.html
    ├── kubernetes
    │   └── k8s-pod.yaml
    │   └── k8s-pod-local.yaml
    ├── package.json
    ├── public
    │   └── favicon.ico
    ├── src
    │   ├── App.vue
    │   ├── assets
    │   ├── components
    │   ├── env.d.ts
    │   └── main.ts
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    └── yarn.lock
```

:)




