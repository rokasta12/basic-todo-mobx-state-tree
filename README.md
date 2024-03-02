# Todo Application with Vite, React, and MobX-State-Tree

This project is a simple Todo application built using Vite, React, and MobX-State-Tree (MST). It demonstrates the use of MST for state management in React applications, providing features such as adding, editing, and deleting todos.

## Features

- **Add Todos:** Users can add new todo items with titles and statuses.
- **Edit Todos:** Users can edit existing todo items.
- **Delete Todos:** Users can delete todo items.
- **Persistent Storage:** Todos are stored persistently using `localForage`.
- **Animations:** Smooth animations for adding and removing todos are implemented with `framer-motion`.

## Getting Started

### Prerequisites

Before you begin, ensure you have the latest version of [Node.js](https://nodejs.org/) installed on your machine. This project was built with Node.js version 14.x or higher.

### Installation

   ```bash
   git clone https://your-repository-url.git
   cd your-project-directory
   npm install
   # or
   yarn install
   npm run dev
   # or
   yarn dev
   ```

## Project Structure
- src/App.css: Global styles for the application.
- src/App.tsx: The main React component that renders the todo application.
- src/components/AddTodo.tsx: A component for adding new todos.
- src/components/TodoCard.tsx: A component that displays a single todo item, allowing users to edit or delete it.
- src/components/TodoList.tsx: A component that renders a list of TodoCard components.
- src/store/models/RootStore.ts: Defines the MobX-State-Tree store and its actions for managing the application state.
- src/store/models/TodoModel.ts: Defines the MST model for a todo item.

## Acknowledgments

This project was inspired by the concepts presented in [JAMON's tutorial on YouTube](http://www.youtube.com/watch?v=n_VjjJxyd8Q). A special thanks to the creators of Vite, React, MobX-State-Tree, framer-motion for making web development more efficient and enjoyable.

[![JAMON's Tutorial](http://img.youtube.com/vi/n_VjjJxyd8Q/0.jpg)](http://www.youtube.com/watch?v=n_VjjJxyd8Q "JAMON's Tutorial")
