#!/usr/bin/bash

curl --header "Content-Type: application/json" \
  --request DELETE \
  "http://localhost:3000/orders/$1"
