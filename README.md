# Wiggy - Food Delivery App
![OnlineFood](https://github.com/user-attachments/assets/2a9a4563-704b-4331-a01e-09b5c87b48a1)

Wiggy is a modern food delivery application built with React and Vite. It allows users to browse various food items, add them to the cart, and place orders seamlessly.

## Features

- **Browse Food Items**: Explore a wide range of food items categorized by meal types.
- **Search Functionality**: Quickly find your favorite food items using the search bar.
- **Add to Cart**: Add food items to your cart and manage quantities.
- **Order Placement**: Place orders and view order success messages.
- **Responsive Design**: Fully responsive design for a seamless experience on all devices.

## Tech Stack

- **Frontend**: React, Redux, Tailwind CSS
- **Build Tool**: Vite
- **Icons**: React Icons
- **Notifications**: React Hot Toast

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/food-delivery-app.git
    cd food-delivery-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```
Food-Delivery-App/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
│   └── vite.svg
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── CategoryMenu.jsx
│   │   ├── FoodCard.jsx
│   │   ├── FoodItems.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── ...
│   │   ├── ItemCard.jsx
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── data/
│   │   └── FoodData.js
│   ├── index.css
│   ├── main.jsx
│   ├── pages/
│   │   ├── Error.jsx
│   │   ├── Home.jsx
│   │   └── Success.jsx
│   ├── redux/
│   │   ├── slices/
│   │   └── Store.js
├── tailwind.config.js
└── vite.config.js
```
