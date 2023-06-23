# API DOCUMENTATION

USER:

// Sign In User by email, name and password

Sign Up User // Method: POST // Base URL: /api // API Endpoint: /sign-up // Payload: email, name, password


// Sign Up user by email and password

Sign Up User // Method: POST // Base URL: /api // API Endpoint: /sign-in // Payload: email

PRODUCT:


// Adds a product by it's title and description.

Add Product // Method: POST // Base URL: /api // API Endpoint: /add-product // Payload: title, description


// Gets a product by it's productid

Get Product // Method: GET // Base URL: /api // API Endpoint: /get-product // Payload: Query


// Updates a product by it's title, description

Update Product // Method: PUT // Base URL: /api // API Endpoint: /update-product // Payload: title, description


// Deletes a product by it's productid

Delete Product // Method: DELETE // Base URL: /api // API Endpoint: /delete-product // Payload: Query  





# Document Object Model

USER:
type: "user"
email: email of user
name: name of user 
password: valid password (minimum 6 characters)

Product:
type: "product"
title: title of the product
description: description of the product
createdAt: date of last update


