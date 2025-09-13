# 📦 Inventory Management Dashboard

A modern **React + TypeScript** dashboard application for managing inventory, built with **Vite**, **Axios**, and a **JSON Server** mock backend. The project follows a clean and modular structure with reusable components, context-based theming, and a responsive UI.

---

## 🚀 Features

- 📊 **Dashboard Overview** with stats cards  
- 📦 **Inventory Management**: add, edit, delete, and view items  
- 📑 **Reports Page** for analytics (placeholder for future expansion)  
- ⚙️ **Settings Page** for customization  
- 🎨 **Light/Dark Theme Toggle** (via Context API)  
- 🧩 **Reusable Components**: Navbar, Sidebar, Modals, Tables  
- ⚡ Built with **Vite** for fast development & hot-reloading  

---

## 🛠️ Tech Stack

- **React 19 + TypeScript**  
- **Vite** (for fast builds)  
- **Axios** (for API requests)  
- **JSON Server** (mock backend)  
- **CSS Modules / Global Styles**  

---


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

2️⃣ Install dependencies

npm install

3️⃣ Run JSON Server
Create a db.json file in the root of your project with sample inventory data:

{
  "inventory": [
    { "id": 1, "name": "Laptop", "quantity": 10, "price": 1200 },
    { "id": 2, "name": "Phone", "quantity": 25, "price": 800 }
  ]
}

Start JSON Server on port 5000:
npm run api

4️⃣ Run the app
npm run dev

🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

Remember to create your own .env file