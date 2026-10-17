
# Task Manager

## Overview

This is a Task Manager application built with React.
Users can add new tasks, mark tasks as complete,
and search through their task list.

## Features

- View tasks loaded from the backend
- Add new tasks using a form
- Mark tasks as completed or incomplete
- Search tasks by name
- Save task changes to the backend

## React Hooks Used

### useContext
Used to share task data and functions between
components without passing props through
every component.

### useId
Used to generate a unique ID for the task form
input and connect it to its label.

### useRef
Used to reference the search input.

### useState
Used to manage task data and form input values.

### useEffect
Used to load tasks from the backend when
the application starts.

## Technologies

- React
- JavaScript
- Vite
- JSON Server
- Vitest

## Getting Started

Install dependencies:

```sh
npm install
```

Start the backend:

```sh
npm run server
```

Start the React application in another terminal:

```sh
npm run dev
```

Run the tests:

```sh
npm run test
```

## Testing

All 8 automated tests passed.

The tests verify that the application:
- Loads tasks from the backend
- Adds new tasks
- Marks tasks as complete
- Filters tasks using the search input

