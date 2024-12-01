# Netflix Clone

A fully functional Netflix clone built using React.js, styled with Tailwind CSS, and powered by Firebase authentication and the TMDB API. This project demonstrates the ability to create visually appealing and feature-rich front-end applications while integrating external APIs and backend services.

## Features

- **User Authentication:**
  - Sign up, login, and logout functionality implemented using Firebase Authentication.

- **Dynamic Content Rendering:**
  - Fetch and display movie data from the TMDB API, categorized into sections such as Popular, Upcoming, Blockbuster Movies, and Top Picks.

- **Custom Video Player:**
  - Play trailers fetched from the TMDB API via a dedicated player component.

- **Responsive Design:**
  - Fully responsive UI that adapts to all screen sizes.

- **Smooth Scrolling:**
  - Horizontal scrolling in movie carousels with a mouse wheel listener.

- **Interactive Buttons:**
  - "Play" and "More Info" buttons with hover effects.

- **Reusable Components:**
  - Modular structure with reusable components like Navbar, TitleCards, Footer, and Player.

## Technologies Used

### Frontend
- **React.js:** For building dynamic and interactive user interfaces.
- **Tailwind CSS:** For fast and efficient styling.
- **React Router:** For seamless navigation between pages.
- **React Icons:** For elegant and scalable icons.

### Backend & Database
- **Firebase:**
  - Authentication for user management.
  - Firestore for storing user data.

### API Integration
- **TMDB API:** Fetch movie details, posters, and trailers.

## Folder Structure

```
src
├── assets              # Images and static assets
├── components          # Reusable components like Navbar, Footer, TitleCards
├── pages               # Page components (Home, Player, etc.)
├── styles              # Global CSS files
├── utils               # Utility functions (if any)
└── App.js              # Main React component
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A Firebase project with authentication enabled.
- A TMDB API key.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   ```

2. Navigate to the project directory:
   ```bash
   cd netflix-clone
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your Firebase and TMDB API credentials:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   ```

5. Start the development server:
   ```bash
   npm start
   ```

## Usage

- Open your browser and go to `http://localhost:3000` to view the app.
- Sign up or log in to explore features.
- Navigate through movie categories and watch trailers.

## Deployment

This project can be deployed using services like Vercel, Netlify, or Firebase Hosting. To deploy on Vercel:

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy the app:
   ```bash
   vercel
   ```


