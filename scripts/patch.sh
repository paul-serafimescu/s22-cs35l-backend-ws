#!/usr/bin/bash

curl --header "Content-Type: application/json" \
  --request PATCH \
  --data '{"cheese":false,"count":1}' \
  "http://localhost:3000/orders/$1"
