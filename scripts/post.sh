#!/usr/bin/bash

curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"cheese":true,"sauce":true,"count":2,"toppings":["olives"]}' \
  http://localhost:3000/orders
