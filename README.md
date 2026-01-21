# Server

A Node.js TypeScript backend server using Express and Socket.IO for real-time chat functionality.

## Features

- Real-time chat messaging using Socket.IO
- CORS enabled for cross-origin requests
- Environment-based configuration
- TypeScript support with linting and building
- Development mode with hot reloading

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Setup

Create a `.env` file in the server directory with the following variables:

```
PORT=3000
```

## Usage

### Development

To run the server in development mode with hot reloading:

```bash
npm run dev
```

This will start the TypeScript compiler in watch mode and the server with nodemon.

### Production

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   npm start
   ```

The server will start on the port specified in the environment variables (default: 3000).

## API Endpoints

The server currently handles real-time chat via Socket.IO. No REST API endpoints are defined yet.

### Socket.IO Events

- `connection`: Fired when a client connects
- `chat message`: Emitted when a client sends a message (broadcasted to all clients)
- `disconnect`: Fired when a client disconnects

## Scripts

- `npm run build`: Compiles TypeScript to JavaScript
- `npm run watch`: Runs TypeScript compiler in watch mode
- `npm run start`: Starts the server with nodemon
- `npm run dev`: Runs both watch and start concurrently for development

## Dependencies

### Production
- `express`: Web framework for Node.js
- `socket.io`: Real-time bidirectional event-based communication
- `cors`: Middleware for enabling CORS
- `dotenv`: Loads environment variables from .env file

### Development
- `@types/express`: TypeScript types for Express
- `@types/node`: TypeScript types for Node.js
- `nodemon`: Tool for automatically restarting the server on file changes
- `tslint`: Linter for TypeScript
- `typescript`: TypeScript compiler
- `concurrently`: Runs multiple commands concurrently

## Project Structure

```
server/
├── src/
│   ├── index.ts          # Main server file
│   └── config/
│       └── serverConfig.ts # Configuration file
├── .gitignore
├── package.json
├── tsconfig.json
├── tslint.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the ISC License.
