# QuoteAPI

Welcome to the QuoteAPI project! This project is a result of a challenge from the Codecademy website, where I aimed to create a simple yet effective API for managing quotes. This README will guide you through the features, installation, usage, and contribution guidelines for the QuoteAPI.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **CRUD Operations**: Create and Get quotes.
- **Random Quote Generation**: Retrieve a random quote from the database.
- **Search Functionality**: Search for quotes by author or keyword.
- **Lightweight and Fast**: Designed to be efficient and easy to use.

## Installation

To get started with QuoteAPI, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ribekasuzuki/quoteAPI.git
2. **Navigate to the project directory:**:
   ```bash
   cd quoteAPI
3. **Install dependencies:**:
Make sure you have Node.js installed, then run:
   ```bash
   npm install
4. **Start the server:**:
   ```bash
   npm start
5. **Access the API:**:
Open your browser and go to http://localhost:5501 to start using the API.

## Usage

Once the server is running, you can interact with the API using tools like Postman or cURL. Below are some examples of how to use the API endpoints.

## API Endpoints

### Get All Quotes
- **Endpoint**: GET /quotes
- **Description**: Retrieve a list of all quotes.

### Get a Random Quote
- **Endpoint**: GET /quotes/random
- **Description**: Retrieve a random quote.

### Create a New Quote
- **Endpoint**: `POST /quotes`
- **Description**: Add a new quote.
- **Request Body**:
  ```json
  {
    "author": "Author Name",
    "text": "Quote text"
  }

## Contributing

Contributions are welcome! If you would like to contribute to the QuoteAPI project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.


---

Thank you for checking out the QuoteAPI project! Feel free to reach out if you have any questions or suggestions. Happy coding!
