# Video Calling App

A modern, responsive video calling application built with React, Vite, and ZegoCloud. Connect with friends, family, and team members through high-quality video calls without any sign-up required.

## 🚀 Features

- **Instant Video Calls** - No account registration needed
- **Room Creation** - Generate random room IDs or use custom ones
- **Group Calls** - Support for multiple participants
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Share Links** - Easy room sharing with generated links
- **Modern UI** - Clean interface with Tailwind CSS

## 🛠️ Tech Stack

- **React 19** - Latest React features
- **Vite** - Fast development and build tool
- **Tailwind CSS** - Utility-first CSS framework
- **ZegoCloud UIKit** - Video calling SDK
- **React Router** - Client-side routing

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- ZegoCloud account (for App ID and Server Secret)

## ⚙️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd video_calling
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your ZegoCloud credentials to `.env`:
```env
VITE_ZEGO_APP_ID=your_app_id_here
VITE_ZEGO_SERVER_SECRET=your_server_secret_here
```

Get your credentials from [ZegoCloud Console](https://console.zegocloud.com/)

## 🏃‍♂️ Running the App

Development mode:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
video_calling/
├── src/
│   ├── components/
│   │   ├── Home.jsx          # Landing page
│   │   ├── Hero.jsx          # Hero section with room controls
│   │   ├── VideoComp.jsx     # Video call component
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Footer.jsx        # Footer component
│   │   ├── Testimonial.jsx   # Testimonials section
│   │   ├── Faq.jsx           # FAQ section
│   │   └── PartnerLogo.jsx   # Partner logos
│   ├── assets/               # Images and static files
│   ├── App.jsx               # Main app component
│   └── main.jsx              # Entry point
├── .env                      # Environment variables (not in git)
├── .env.example              # Environment variables template
└── package.json              # Dependencies
```

## 🎯 Usage

1. **Join an Existing Room**: Enter a room ID on the home page and click "Join Room"
2. **Create a New Room**: Click "Create New Room" to generate a random room ID
3. **Share the Link**: Copy and share the room URL with others
4. **Start Calling**: Grant camera and microphone permissions when prompted

## 🔒 Security

- Environment variables are used for sensitive credentials
- `.env` file is excluded from git
- Never commit your App ID or Server Secret

## 🚀 Deployment

This app is ready for deployment on:
- **Vercel** (Recommended - `vercel.json` included)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

Remember to set environment variables in your hosting platform.

## 📝 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using React and ZegoCloud
