# Bacha-Party

Bacha Party E-commerce Platform

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
  
## Introduction

Bacha Party is an e-commerce platform designed to provide a convenient and enjoyable shopping experience for parents looking to purchase children's clothing and accessories. Our platform offers a wide range of products for boys and girls of various age groups.

At Bacha Party, we understand the importance of dressing your little ones in comfortable, stylish, and affordable clothing. Whether it's cute dresses for girls or trendy outfits for boys, we've got you covered.

## Features

- **Product Categories:** Browse products by category, including boys, girls, and more.
- **Product Details:** View detailed information about each product, including name, description, price, and images.
- **Add to Cart:** Easily add products to your shopping cart for a seamless checkout experience.
- **User Authentication:** Secure user authentication and account management.
- **Search Functionality:** Search for products by name or category.
- **Filter by Price:** Filter products by price range to find the best deals.
- **Product Reviews:** Read and write product reviews to help other shoppers make informed decisions.
- **Order History:** View your order history and track the status of your orders.

## Demo

Visit our live demo to explore the Bacha Party platform: [Bacha Party Demo](https://bacha-party.vercel.app/)

## Installation

To run Bacha Party locally on your machine, follow these steps:

```bash
# Clone the repository
git clone https://github.com/yourusername/bacha-party.git

# Change directory
cd bacha-party

# Install dependencies
npm install
# or
yarn install
```

## Usage

After completing the installation, start the development server:

```bash
npm start
# or
yarn start
```

Access the Bacha Party platform at `http://localhost:3000` in your web browser.

## Technologies Used

- Frontend: React.js
- Backend: Node.js
- Database: MongoDB

## API Documentation

### Routes:-

- **Users Routes**

| METHOD | ENDPOINT       | WHAT IT DOES                                                                          |
| ------ | -------------- | ------------------------------------------------------------------------------------- |
| POST   | /user/signup | -> Register New User (Requires user details in req.body)                              |
| POST   | /user/login    | -> Login existing user (Requires email and passwords, returns token if login success) |

- **Product Routes**

| METHOD | ENDPOINT            | WHAT IT DOES                                                                                   |
| ------ | ------------------- | ---------------------------------------------------------------------------------------------- |
| POST   | api/products/ | -> Add new product ( by providing name, price, description,image,category, availability in body) |
| GET    | api/products            | -> getting all products                                                                        |
| GET    | api/product/:id | -> getting products by id                                                                      |

- **Cart Routes**

| METHOD | ENDPOINT                         | WHAT IT DOES                                             |
| ------ | -------------------------------- | -------------------------------------------------------- |
| GET    | /api/cart                            | -> getting the items present in cart of a user logged in |
| POST   | /api/cart/add/:productID             | -> adding item to user's cart                            |
| DELETE | /api/cart/remove/:productId          | -> deleting item from cart                               |

- **Order Routes**

| METHOD | ENDPOINT          | WHAT IT DOES                                                    |
| ------ | ----------------- | --------------------------------------------------------------- |
| GET    | api/order            | -> getting user's orders if the user is logged in                                    |
| POST   | api/order/           | -> placing order (by passing userID, productID, cartID in body) |
| GET    | /api/order/:orderId   | -> getting details of a single order if the user is logged in                       |
| PATCH  | /api/order/history    | -> getting history of all the orders        |

### Deployed API

The backend API is deployed at [https://nanhe-munhe-2.onrender.com/](https://nanhe-munhe-2.onrender.com/).

## Contributing

We welcome contributions from the community to help improve Bacha Party. Here's how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Submit a pull request.

Please adhere to our code of conduct and coding guidelines when contributing.

## Acknowledgments

Thank you for choosing Bacha Party for your children's shopping needs. We hope you have a delightful shopping experience with us!
