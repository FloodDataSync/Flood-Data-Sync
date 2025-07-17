# Flood Data Sync

Flood Data Sync is a modern, community-driven flood reporting and emergency response platform for Nigeria. Built with React, Vite, and Material UI, it empowers citizens and authorities to collaborate in real-time, report flood events, and coordinate emergency responses.

## Features

- **Real-time Flood Reporting**: Citizens can submit flood reports with photos, descriptions, and precise geolocation.
- **Emergency Alerts**: Authorities and users receive real-time notifications about flood events in their area.
- **Dashboard & Analytics**: Authorities can access a dashboard with live data, analytics, and validation tools.
- **Modern UI/UX**: Consistent blue palette, glassmorphism, and responsive design for a professional experience.
- **Role-based Access**: Separate flows for citizens and authorities.
- **Validation & Schema**: Robust form validation using Yup and MUI.
- **Inter Font**: Modern, readable typography throughout the app.

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Material UI (MUI)](https://mui.com/)
- [Yup](https://github.com/jquense/yup) for schema validation
- [@fontsource/inter](https://fontsource.org/fonts/inter) for typography
- [React Router](https://reactrouter.com/) for navigation

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

## Project Structure

- `src/pages/` — Main app pages (Splash, Home, ReportForm, Dashboard, etc.)
- `src/components/` — Reusable UI components (Navbar, Footer, SubmissionStates, etc.)
- `src/theme.js` — Centralized theme and palette configuration

## Customization

- **Theme:** Edit `src/theme.js` to adjust colors, typography, and component styles.
- **Font:** Uses Inter by default (self-hosted and Google Fonts fallback).
- **API Integration:** Replace the mock endpoint in `ReportForm.jsx` with your backend API.

## Credits

- Built with ❤️ for Nigerian communities and emergency responders.
- UI inspired by modern design systems and accessibility best practices.

---

For questions or contributions, please open an issue or pull request.
