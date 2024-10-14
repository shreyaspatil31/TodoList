# iTask - Todo List Application

iTask is a simple and interactive Todo List application built using React.js. It allows users to add, edit, delete, and manage their tasks efficiently. The tasks are stored in the browser's `localStorage` to persist data across sessions.

## Features

- **Add Todos:** You can add new tasks to the list.
- **Edit Todos:** You can edit an existing task.
- **Delete Todos:** You can delete tasks that are no longer needed.
- **Mark as Completed:** You can mark a task as completed, which will be visually distinguished by a strikethrough.
- **LocalStorage Support:** The app stores todos in the browser's local storage, so they persist even when the page is reloaded.
- **Show/Hide Completed Todos:** Option to toggle the display of completed tasks.

## Tech Stack

- **React.js:** Frontend library for building the UI.
- **UUID:** For generating unique IDs for each task.
- **React Icons:** For adding interactive icons for edit and delete operations.
- **Tailwind CSS:** For styling and layout.

## Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd your-repo-name
   ```

3. **Install dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```

4. **Install Tailwind CSS:**
   Tailwind CSS is used for styling the app. Follow the steps below to install and configure it:

   1. Install Tailwind and its dependencies:
      ```bash
      npm install -D tailwindcss postcss autoprefixer
      ```

   2. Initialize the Tailwind config:
      ```bash
      npx tailwindcss init
      ```

   3. Inside the generated `tailwind.config.js` file, add the following to the `content` array to enable Tailwind for your source files:
      ```js
      module.exports = {
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }
      ```

   4. Add the Tailwind directives to your CSS file (`src/index.css`):
      ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```

5. **Run the project:**
   ```bash
   npm run dev
   ```

6. **Access the app:**
   Open your browser and go to `http://localhost:3000` (or the port provided by Vite) to see the app in action.

## Project Structure

```
.
├── public
│   ├── index.html
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── tailwind.config.js
├── package.json
└── README.md
```

## How to Use

1. **Add a Todo:** 
   - Type the task description in the input field.
   - Click "Save" to add the task to your list.
   
2. **Edit a Todo:** 
   - Click the pencil icon (✏️) next to a task to edit it.
   
3. **Delete a Todo:**
   - Click the trash icon (🗑️) next to a task to remove it.
   
4. **Mark/Unmark a Task as Completed:**
   - Check/uncheck the box next to a task to mark it as completed or not.

5. **Toggle Display of Completed Todos:**
   - Check/uncheck the "Show Finished" box to show or hide completed tasks.

## Dependencies

- **React.js:** ^18.0.0
- **UUID:** ^8.3.2
- **React Icons:** ^4.3.1
- **Vite:** ^4.0.0
- **Tailwind CSS:** ^3.0.0

![image](https://github.com/user-attachments/assets/8a4f3866-3983-4c6c-8fb7-363479571711)

![image](https://github.com/user-attachments/assets/367e7618-da90-4475-9e4b-0580c82dac2e)

## Contributing

Feel free to fork this repository and submit pull requests. Any improvements or features are welcome!

## License

This project is licensed under the MIT License.
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
