# Pomodoro Timer ⏱️

A simple, responsive Pomodoro timer built with **React** and **Vite** that helps you manage your focus and break sessions using the Pomodoro Technique.

## Features

✅ Choose from 3 Pomodoro modes:
- **Short Study** (25/5 minutes)  
- **Finish Work** (52/17 minutes)  
- **Deep Focus** (45/15 minutes)

✅ Fully responsive UI styled with custom CSS  
✅ Countdown that persists through refreshes or tab switches  
✅ Automatic switching between study and break cycles  
✅ Resets timer when you exit the timer view

## Tech Stack

- ⚛️ [React](https://react.dev/)
- ⚡ [Vite](https://vitejs.dev/)
- 📦 [React Router](https://reactrouter.com/) for navigation
- 🧠 `localStorage` for persistent timer logic

## Getting Started

To run this project locally:

1. **Clone the repo:**

   ```bash
   git clone https://github.com/8lairrr/pomodoro-widget.git
   cd pomodoro-widget

2. **Install dependencies:**

    ```bash
    npm install

3. **Start the dev server:**

    ```bash
    npm run dev

## Project Structure
    src/
    ├── assets/             # icons (back and exit button)
    ├── App.jsx             # main homepage UI
    ├── App.css             # styles for homepage
    ├── Timer.jsx           # timer component with logic
    ├── Timer.css           # styles for timer screen


## Deployment 
    Currently looking into deploying the completed project! Check back soon!

## Credits
    Designed and developed by Delia Holman.
    Uses custom logic to persist time across reloads without external libraries.
