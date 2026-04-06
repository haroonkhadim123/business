Hoorab Group Website
📌 Overview
The Hoorab Group Website is a modern, scalable, and production-ready web platform built to digitally represent a cooperative business. It delivers a seamless and user-friendly experience with a strong focus on performance, security, and maintainability.
The architecture is designed to support real-world use cases, ensuring scalability and flexibility for future enhancements.
🚀 Live Demo
👉 https://hoorabgroup.com⁠�
✨ Features
🔐 Secure Authentication
Session-based authentication using NextAuth
Role-based access control (Admin / User)
📩 OTP Verification System
Email-based OTP verification for secure login
📧 Email Notification System
Automated emails for authentication and system events
📊 Admin Dashboard
Manage users and business data
Protected admin routes
📱 Responsive Design
Fully optimized for mobile, tablet, and desktop
⚡ Performance Optimization
Fast loading and smooth user experience
☁️ Cloud Integration
Media upload and storage using Cloudinary
🎨 Modern UI/UX
Clean interface with animations (Framer Motion)
🛠️ Tech Stack
Frontend
Next.js
React.js
Tailwind CSS
Framer Motion
Backend
Node.js
NextAuth.js
Database
MongoDB
Cloud
Cloudinary
🧱 Project Structure

/app
/components
/lib
/api
/public
/styles
components/ → Reusable UI components
api/ → Backend API routes
lib/ → Utility functions & configs
public/ → Static assets
🔑 Authentication Flow
User enters credentials
OTP is sent to the registered email
User verifies OTP
Session is created
Role-based redirection:
Admin → Dashboard
User → Homepage
⚙️ Environment Variables
Create a .env file in the root directory:
Environment
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

MONGODB_URI=your_database_url

CLOUDINARY_URL=your_cloudinary_config
📦 Installation
Bash
git clone https://github.com/your-username/your-repo.git

cd your-repo

npm install

npm run dev
🚀 Deployment
This project is optimized for deployment on:
Vercel (Recommended)
Netlify (Frontend only)
Custom Node.js server
🔮 Future Improvements
💳 Payment integration
🌍 Multi-language support
📈 Advanced analytics dashboard
📱 Dedicated mobile application
👨‍💻 Author
Haroon Khadim
Software Engineer | Web Developer
📄 License
This project is developed for client use. Unauthorized redistribution is not permitted.
