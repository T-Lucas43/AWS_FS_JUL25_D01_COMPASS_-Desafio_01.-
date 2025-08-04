# 🚀 AWS_FS_JUL25_D01_COMPASS_-Challenge_01-

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 📄 Project Description

This repository was developed as part of **Challenge 01** from the **Compass UOL Internship Program**.  
The goal was to accurately recreate a Figma prototype using only **HTML**, **CSS**, and **Vanilla JavaScript**, with **no external frameworks or libraries**.

The project includes building a fully responsive interface, matching the original layout and visual elements, dynamic data loading from JSON files, and interactive features for the user.

---

## ✨ Implemented Features

- ✅ Accurate conversion of the Figma design using pure HTML, CSS, and JS  
- ✅ Responsive layout for **mobile**, **tablet**, and **desktop**  
- ✅ Fully styled interface based on the prototype  
- ✅ Data fetching (GET) for “Categories” and “Our Suggestions” sections  
- ✅ Loading spinners during data fetch  
- ✅ Default fallback image for missing image data  
- ✅ Interactive **FAQ** section (expand/collapse behavior)  
- ✅ Email validation in subscription form with **Local Storage** support  

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
  - Flexbox  
  - Grid Layout  
  - CSS Variables  
  - Media Queries  
- JavaScript  
  - DOM Manipulation  
  - Fetch API (GET)  
  - Local Storage  
  - Form validation  
- Modular folder structure (`styles/`, `scripts/`, `data/`)  
- **No external dependencies**

---

## 📋 Requirements

- [Node.js](https://nodejs.org/) (optional but recommended to run a local server)  
- [Visual Studio Code](https://code.visualstudio.com/) or any code editor of your choice  
- A modern browser (Chrome, Firefox, Edge, Safari)  
- [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (or any local server)

---

## 🚀 How to Clone and Run Locally


# 1. Clone this repository
```bash
git clone https://github.com/your-username/AWS_FS_JUL25_D01_COMPASS_-Challenge_01-.git
```
# 2. Navigate to the project folder
```bash
cd AWS_FS_JUL25_D01_COMPASS_-Challenge_01-
```
▶️ Running with Live Server
Open the project in VS Code:
code .

Right-click index.html and select:
"Open with Live Server"

💡 Alternative with Node.js
If you have Node.js installed:
npm install -g http-server
http-server .

Then open your browser and go to:
👉 http://localhost:8080 (or the port shown in the terminal)



📝 Notes

#Data for “Categories” and “Our Suggestions” is dynamically loaded from local JSON files in the data/ folder.

#You must use a local server (not open the file directly) for the Fetch API to work properly, due to browser security restrictions.

#Email validation ensures that only valid addresses are saved to Local Storage.

#The layout is fully responsive and adapts to all screen sizes.

📁 Project Structure
```bash
├── index.html
├── /styles
│   └── style.css
├── /scripts
│   └── main.js
├── /data
│   ├── categories.json
│   └── suggestions.json
└── README.md
```
👨‍💻 Author
Tarcisio Lucas


⚖️ License
This project is for educational purposes only. No commercial license has been applied.
