#!/usr/bin/bash

# this should work on Ubuntu or Darwin (OS X)
# if you're planning on developing on some other operating system, see relevant resources below
# https://nodejs.org/en/download/
# https://www.mongodb.com/docs/manual/installation/

case "$(uname -s)" in 
    Darwin)
        # this assumes you have brew installed
        # if you don't have it: https://brew.sh/#install
        xcode-select --install
        brew tap mongodb/brew
        brew update
        brew install node mongodb-community@5.0
        ;;
    Linux)
        # install Node.js, NPM, and MongoDB on Ubuntu 20.04
        sudo apt-get install nodejs npm gnupg
        wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
        echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
        sudo apt-get update
        sudo apt-get install -y mongodb-org
        ;;
    *)
        echo 'this script is not supported for your OS'
        ;;
esac
