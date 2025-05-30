# Portfolio Website

A modern, responsive portfolio website showcasing projects and skills in robotics and software development.

🌐 **Live Demo**: [https://portfolio-website-m8g7titn4-arnold-dsouzas-projects.vercel.app](https://portfolio-website-m8g7titn4-arnold-dsouzas-projects.vercel.app)

## ✨ Features

- Responsive design for all devices
- Smooth animations and transitions
- Project showcase with live demos
- Contact form with notifications
- Fast loading and optimized performance

## 🛠️ Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Material-UI** - UI components
- **SweetAlert2** - Notifications

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Arnold-Dsouza/Portofolio_Arnold.git
   cd Portofolio_Arnold
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   If you encounter peer dependency issues:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to the URL displayed in your terminal (typically `http://localhost:5173`)

## 📦 Build & Deploy

Create a production build:
```bash
npm run build
```

Deploy the `dist/` folder to any hosting service like Vercel, Netlify, or GitHub Pages.

## 🎨 Customization

### Update Your Information
- Edit `src/Pages/About.jsx` for personal bio
- Edit `src/Pages/Contact.jsx` for contact info
- Edit `src/localData.js` for projects and certificates

### Add New Projects
```javascript
// In src/localData.js
export const projects = [
  {
    id: "1",
    Title: "Your Project",
    Description: "Project description...",
    TechStack: ["React", "Node.js"],
    Link: "https://your-demo.com",
    Github: "https://github.com/username/repo"
  }
];
```

### Replace Images
- Add project images to `public/project-images/`
- Add certificates to `public/certificate-images/`
- Replace `public/Photo.jpg` with your photo

## 📊 Featured Projects

- **Autonomous Robot Simulation** - Isaac Sim, ROS2, Python
- **Direct Base Controller** - C++, ROS2, Gazebo
- **Bolt Detection System** - Python, OpenCV, Machine Learning
- **Behavior Trees Navigation** - ROS, C++, Python
- **Virtual Agent** - Python, Rasa, Face Recognition
- **WebCrafter** - React, TypeScript, AI Integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

Arnold D'Souza - [LinkedIn](https://www.linkedin.com/in/arnold-dsouza-a169b8195/)

---

⭐ Star this repo if you found it helpful!
