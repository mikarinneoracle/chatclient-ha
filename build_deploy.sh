#!/bin/bash

export tag=$(docker build -t chatclient . | grep 'Successfully built' | tail -c 13)

echo $tag

docker tag $tag mikarinneoracle/chatclient:1.0

docker push mikarinneoracle/chatclient
