# Sk-shop

Sk-shop is an eCommerce web application made to showcase and sell fashion products.
[Live demo](https://shop-king.herokuapp.com/)

## Table of contents
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Technologies](#technologies)

## Screenshots

![Home Page](https://res.cloudinary.com/dc3sys5cl/image/upload/v1600428744/medium_Image_1_3d1bedbd00.png)

![](https://res.cloudinary.com/dc3sys5cl/image/upload/v1600428745/medium_Image_3_576937a773.png)

![](https://res.cloudinary.com/dc3sys5cl/image/upload/v1600428741/medium_Image_2_d9f5ba83e8.png)

## Setup

In the project directory, you can run:

* `"yarn client" : "cd client && yarn start"`,

The app is built using `create-react-app` so this command Runs the app in Development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. You also need to run the server file as well to completely run the app. The page will reload if you make edits.
You will also see any lint errors in the console.

* `"yarn build": "cd client && yarn build"`,

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app will be ready to deploy!


* `"yarn dev": "concurrently "yarn server" "yarn client"`,

For running the server and app together I am using concurrently this helps a lot in the MERN application as it runs both the server (client and server) concurrently. So you can work on them both together.

For running the server file on you can use this command. 
* `yarn server`

## Technologies

- React - v 16.13.1
- Node-sass - v 4.14.1
- react-redux - v 7.2.0
- Axios - v 0.19.2
- Firebase - v 7.15.1
- Stripe - v 6.28.0
- react-stripe-checkout - v 2.6.3
- Node js - v 14
- Express - v 4.16.4

## 🤝 Support

Contributions, issues, and feature requests are welcome!