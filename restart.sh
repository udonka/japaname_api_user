#!/bin/bash

name=japaname_api_user
port=3005

echo $name $port
forever stop $name
PORT=$port NODE_ENV=production forever start -a --uid "$name" bin/www 
