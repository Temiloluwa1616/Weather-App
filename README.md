Weather App 🌤

A beautiful, responsive weather application built with React that provides real-time weather information for any city worldwide. Features dynamic backgrounds that change based on weather conditions and a clean, modern glassmorphism design.

 Features
- Real-time Weather Data: Get current weather information for any city
- Dynamic Backgrounds: Background changes based on weather conditions (rainy, cloudy, sunny, snowy)
- Comprehensive Weather Details**: 
  - Current temperature and "feels like" temperature
  - Weather description and conditions
  - Wind speed, humidity, visibility, and atmospheric pressure
  - Daily minimum and maximum temperatures
- Glassmorphism UI: Modern glass-effect design with smooth animations
- Responsive Design: Works seamlessly on desktop and mobile devices
- Weather Icons: Dynamic icons that change based on current conditions
- Search Functionality: Easy-to-use search with Enter key support

 
![WeatherAppScreenShot](https://github.com/user-attachments/assets/189cc823-ec99-4fdb-8147-9c266e91320e)

 Technologies Used

- React - Frontend framework with hooks (useState, useEffect)
- OpenWeatherMap API - Weather data provider
- Lucide React - Beautiful icons
- CSS3 - Custom styling with glassmorphism effects
- JavaScript ES6+ - Modern JavaScript features

 Prerequisites

Before running the application, make sure you have:

- Node.js (v14 or higher)
- npm or yarn package manager
- OpenWeatherMap API key (free at [openweathermap.org](https://openweathermap.org/api))

 Installation

1. Clone the repository
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app

2. Install dependencies
   npm install
  

3. Set up your API key
   - Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
   - Replace the API key in the `Weather.js` file:
   
   // Replace 'YOUR_API_KEY' with your actual API key
   const response = await fetch(
     `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=YOUR_API_KEY&units=metric`
   );

4. Start the development server
   npm run dev


5. Open your browser
   Navigate to `http://localhost:3000` to view the app.

 Project Structure


weather-app/
├── src/
│   ├── components/
│   │   ├── search
│   │   └── weather.js           
│   ├── styles/
│   │   └── App.css            
│   ├── App.js
│   └── index.js
├── public/
├── package.json
└── README.md


 Features Breakdown

 Dynamic Backgrounds
The app automatically changes background themes based on weather conditions:
-  Sunny/Clear: Bright, warm colors
-  Cloudy: Soft, muted tones
-  Rainy: Cool, blue-gray themes
-  Snowy: Winter-themed colors
-  Stormy: Dark, dramatic themes

  Weather Information Displayed
- Current temperature in Celsius
- Weather condition description
- "Feels like" temperature
- Wind speed (m/s)
- Humidity percentage
- Visibility distance (km)
- Atmospheric pressure (hPa)
- Daily min/max temperatures

 Responsive Design
- Mobile-first approach
- Glassmorphism card design
- Smooth loading animations
- search interface

 API Usage

This app uses the OpenWeatherMap Current Weather Data API:
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Parameters: 
  - `q`: City name
  - `appid`: Your API key
  - `units`: metric (for Celsius)

 Deployment

 Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

 Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



  Contact
  Email: sulaimantemiloluwa24@gmail.com
  Project Link: [https://github.com/yourusername/weather-app](https://github.com/Temiloluwa1616/weather-app)

  Star this repo if you found it helpful!
