# Musefy
Online music store

This project is a React application with JSON server support to store data about products and their reviews.

## 🚀 Installation and launch of the project

### 1. Cloning a repository
```sh
git clone https://github.com/Matvey-Vats/Musefy/
cd Musefy
```

### 2. Installing dependencies
```sh
npm install
```

### 3. Starting the JSON server
The project uses `json-server` to emulate the backend. To start the server, use the command:
```sh
npx json-server --watch db.json --port 3000
```
> `db.json` - this is a file containing test data. By default the server runs on `http://localhost:3000`.

### 4. Running a React application
After starting the JSON server, open a new terminal and run the React application:
```sh
npm run dev
```
> The application will be available at `http://localhost:5173` (or other port specified in the settings, `http://localhost:3000`).

## 📂 Project structure
```plaintext
├── public/             # Static files
├── src/                # Source code
│   ├── components/     # UI Components
│   ├── pages/          # Application Pages
│   ├── redux/          # Redux state
│   ├── styles/         # SCSS-styles
│   ├── App.js          # Main component
│   ├── main.js         # Entry point
├── db.json             # JSON-сервер data base
├── package.json        # Project Dependencies
```

## 🛠 Core Technologies
- **React**
- **Redux Toolkit**
- **React Hook Form** 
- **React Simple Star Rating**
- **JSON-Server**



