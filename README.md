

# Aroma Crave

Aroma Crave is a modern React web application that displays a list of restaurants, allows users to search for their favorite places, and view detailed menus. The project uses the Swiggy API (proxied for CORS) to fetch real-time restaurant data and features a clean, responsive UI built with Tailwind CSS.

---

## 🌐 Live Demo

🚀 [View Live Demo](https://aroma-crave.netlify.app/)


[![Netlify Status](https://api.netlify.com/api/v1/badges/5f1121f9-3289-4786-9ecc-a4cbac501193/deploy-status)](https://app.netlify.com/projects/aroma-crave/deploys)

## Features

- 🍽️ **Restaurant Listing:** Browse a curated list of restaurants with images, ratings, and cuisine details.
- 🔍 **Search Functionality:** Instantly filter restaurants by name using the search bar.
- 🛒 **Cart System:** Add items to your cart and view your selections (cart logic included).
- 📱 **Responsive Design:** Fully responsive layout using Tailwind CSS for seamless experience on all devices.
- ⚡ **Shimmer Loading:** Beautiful shimmer effect while data is loading.
- 🚦 **Online Status Detection:** Notifies users if they go offline.
- 🗺️ **Routing:** Client-side routing with React Router for smooth navigation.

## Tech Stack

- **React** (with Hooks)
- **Tailwind CSS**
- **React Router DOM**
- **Custom Hooks**
- **Swiggy API (via proxy)**

## Project Structure

```
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── Components/
│   │   ├── Body.js
│   │   ├── Header.js
│   │   ├── RestaurantCard.js
│   │   ├── RestaurantMenu.js
│   │   ├── Shimmer.js
│   │   └── ...
│   ├── Utils/
│   │   ├── useOnlineStatus.js
│   │   ├── useRestaurantMenu.js
│   │   └── ...
│   └── routes/
│       └── RouteConfig.js
├── tailwind.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd aroma-crave
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```sh
   npm start
   # or
   yarn start
   ```
4. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Customization
- **API Endpoint:** The Swiggy API is proxied to avoid CORS issues. You can update the endpoint in `src/Components/Body.js`.
- **Styling:** Tailwind CSS classes are used throughout. Modify `tailwind.config.js` or component classes for custom styles.

## Folder Overview
- `src/Components/` – UI components (Body, Header, RestaurantCard, etc.)
- `src/Utils/` – Custom hooks and utility functions
- `src/routes/` – App routing configuration
- `public/` – Static assets and HTML

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

## Author

**Nagma Khanam**  
[LinkedIn](https://www.linkedin.com/in/nagma-nk-khanam/) | [GitHub](https://github.com/khanam-nagma)

---

> Made with ❤️ for foodies and developers!
