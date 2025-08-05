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


<!-- Steps for settiind up the Flood Data Sync with ICP -->
# Create a plain text README setup file for Flood Data Sync
readme_text = """\
FloodDataSync - Setup Guide
===========================

FloodDataSync is a real-time flood incident reporting system built on the Internet Computer using Motoko (backend), React (frontend), and Vite.

Tech Stack:
-----------
- Frontend: React + Vite + MUI (Material UI)
- Backend: Motoko (ICP Canister)
- Network: Internet Computer (Local or Mainnet)
- Package Manager: NPM
- Build Tool: DFX SDK (Dfinity)



Setup Instructions:
-------------------

1. Clone the repo
   git clone https://github.com/your-username/Flood-Data-Sync.git
   cd Flood-Data-Sync

2. Install dependencies
   npm install

3. Install the DFX SDK
   sh -ci "$(curl -fsSL https://smartcontracts.org/install.sh)"
   dfx --version

4. Start the local replica
   dfx start --background

5. Deploy all canisters
   dfx deploy

Running Frontend (Development Mode):
------------------------------------
cd src/flooddatasync_frontend
npm run dev

Access the app:
---------------
- Open your browser and go to: http://localhost:5173

Troubleshooting:
----------------
- Ensure DFX is installed and in your PATH
- Make sure the backend canister is compiled and running
- If using imports from @dfinity/agent, install the required dependencies:
  npm install @dfinity/agent

"""

# Save to a text file
file_path = "/mnt/data/FloodDataSync_Setup.txt"
with open(file_path, "w") as f:
    f.write(readme_text)

file_path
