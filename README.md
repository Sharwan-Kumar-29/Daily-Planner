# 📝 My Daily Planner

A simple and clean web-based task planner that allows you to manage your daily tasks efficiently. Add, complete, delete, and search tasks — with localStorage persistence and smooth user experience enhancements.

---

## 🔧 Features

- ✅ Add new tasks with categories (Personal, Work, Study)
- 🔄 Mark tasks as complete or undo
- ❌ Delete tasks
- 🔍 Real-time task search (debounced)
- 💾 Persistent storage using localStorage
- 🧹 Clear all tasks with one click
- 🔝 "Back to Top" button on scroll (throttled for performance)
- 📦 Modular JavaScript with ES6 modules

---

## 🚀 Tech Stack

- **HTML5** – Semantic elements
- **CSS3** – Flexbox, Grid, Media Queries
- **JavaScript (ES6+)** – DOM, localStorage, Modules, Debounce, Throttle
- **[Optional]** Git + GitHub Pages – for version control and live demo

---

## 📂 Project Structure

```
my-daily-planner/
├── index.html
├── styles.css
├── main.js
├── storage.js
├── taskManager.js
├── utils.js
└── README.md
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/your-username/my-daily-planner.git
cd my-daily-planner
```

2. **Open in browser**
Just open `index.html` in your browser (supports ES6 modules).

> **Make sure you're using a local server or VS Code Live Server**, as ES6 modules do not work via `file://` protocol.

3. **[Optional] Deploy**
Use GitHub Pages to deploy live:
- Push your repo to GitHub
- Go to repo settings → Pages → set source to `main` branch → root folder

---

## 🧠 Key Concepts Implemented

- **Debounce & Throttle** for input and scroll optimization
- **localStorage** for saving tasks
- **DOM Manipulation** via modular JS
- **Responsive Design** using CSS Flexbox & Grid

---

## 📬 Contact

Have suggestions or feedback? Feel free to reach out or open an issue!

---

Enjoy productive planning! ✅
