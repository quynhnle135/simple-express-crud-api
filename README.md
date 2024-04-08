# Simple CRUD API with Express.js

This repository contains a simple CRUD (Create, Read, Update, Delete) API built with Express.js and Node.js. It's designed to manage a basic task list, where each task has an ID, title, description, and a completed status. This project is ideal for those learning how to build APIs with Express.js or for anyone needing a simple backend for task management applications.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running this project, you'll need to have Node.js installed on your system. You can download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

### Installing

First, clone the repository to your local machine:

```bash
git clone https://github.com/quynhnle135/simple-express-crud-api.git
```

Navigate to the project directory:

```bash
cd simple-express-crud-ap
```

Install the necessary dependencies:

```bash
npm install
```

### Running the API

To start the server, run:

```bash
npm start
```

The server will start on port 3000, and you can access the API at `http://localhost:3000/tasks`.

## API Endpoints

The following endpoints are available in this API:

- `GET /tasks` - Retrieve a list of all tasks.
- `GET /tasks/:id` - Retrieve a specific task by its ID.
- `POST /tasks` - Create a new task. Requires a JSON body with `title`, and optionally `desc`, and `completed`.
- `PUT /tasks/:id` - Update an existing task. You can update the task's title, description, and completed status.
- `DELETE /tasks/:id` - Delete a task by its ID.

### Example Requests

#### Create a New Task

```bash
curl -X POST http://localhost:3000/tasks \
     -H "Content-Type: application/json" \
     -d '{"title": "Learn Node.js", "desc": "Start with Express.js", "completed": false}'
```

#### Get All Tasks

```bash
curl http://localhost:3000/tasks
```


