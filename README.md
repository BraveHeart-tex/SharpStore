# SharpStore

This is an e-commerce store built using the following technologies:

- React
- Redux
- Stripe (with checkout functionality)
- MaterialUI
- PostgreSQL
- .NET Core
- Entity Framework
- Identity
- Cloudinary (for image hosting)

Users can browse and purchase products, and if logged in, view their orders on the "Orders" page. The checkout process is powered by Stripe, ensuring secure payment processing.

The project is built using .NET Core and Entity Framework for the backend and React and Redux for the frontend. The user interface is designed using MaterialUI. The project also implements user authentication and authorization using Identity.

The project is hosted on a PostgreSQL database and it is connected to the backend via Entity Framework.

## Features

- Create / Read / Update / Delete products
- Images are hosted in Cloudinary
- Browse products
- Add products to a basket
- View basket contents
- Checkout
- View order history
- Secure authentication and authorization

## Prerequisites

- .NET Core SDK 3.1 or higher
- Node.js and npm
- PostgreSQL

# Running the project

- Clone the repository
- In the project directory, run `dotnet restore` to restore the .NET dependencies
- In the `client` directory, run `npm install` to install the npm dependencies
- Update the connection string in the `appsettings.json` file to match your PostgreSQL server
- Run `dotnet ef database` update to create the database
- Run `dotnet run` to start the backend server
- In a separate terminal, navigate to the client directory and run `npm start` to start the frontend development server
- Open your browser and navigate to http://localhost:3000 to view the app

## Note

You need to have stripe account and add the keys to the code to make the checkout functionality work.
