# GitPop Project

GitPop is a place for you to showcase your valued Funko Pop collection and track the value of each Pop!

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/projectname.git
    cd projectname
    ```

2. Navigate to the `gitpop-client` and `gitpop-server` directories and install dependencies:
    ```bash
    cd gitpop-client
    npm install
    cd ../gitpop-server
    npm install
    ```

3. Create `.env` files in the `gitpop-client` and `gitpop-server` directories based on the `.env.example` file:
    ```bash
    cp frontend/.env.example frontend/.env
    cp backend/.env.example backend/.env
    ```

4. Update the environment variables as needed in both `.env` files.

## Usage

### Running the Frontend

Navigate to the `frontend` directory and start the development server:
```bash
cd frontend
npm start
