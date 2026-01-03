# 🌦 Weather App

A modern, production-ready weather web application that provides real-time weather information based on user location or searched city.  
Built using **vanilla JavaScript** with a focus on clean architecture, responsive UI, and real-world frontend engineering best practices.

This project is designed as a **portfolio showcase** for frontend developer roles.

---

## ✨ Features

### 🌍 Core Features
- Realtime weather data based on user location (Geolocation API)
- Search weather by city name
- Realtime local clock based on location timezone
- Displays complete weather information:
  - Current temperature
  - Weather condition
  - Max & min temperature
  - Humidity
  - Wind speed
  - UV index
  - Sunrise time

### 🧠 Smart Features
- Smart weather advice based on weather condition & UV index
- Weather alert indicators for extreme conditions
- Offline mode with cached last weather data (localStorage)

### 🧪 Engineering & Reliability
- Retry mechanism for unstable network conditions
- AbortController to cancel previous requests
- Offline-first fallback behavior
- Modular JavaScript structure (ES Modules)
- Clean separation between logic, rendering, and utilities

### 🎨 UI / UX
- Mobile-first responsive design
- Dynamic day/night theme based on local time
- Smooth fade-in animations and micro-interactions
- Temperature count-up animation
- Clean and modern UI with consistent color theme

---

## 🛠 Tech Stack

- **HTML5**
- **CSS3**
  - Responsive layout
  - CSS animations
  - Custom properties (CSS variables)
- **Vanilla JavaScript (ES Modules)**
- **WeatherAPI**
- **Geolocation API**
- **LocalStorage API**

> No frontend framework or backend server is used in this project.

---

## 🚀 Live Demo
https://reffkiandreapratama.github.io/WeatherApp/


---

## ⚙️ How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://reffkiandreapratama.github.io/WeatherApp/
2. Open the project folder:
    cd weather-app
3. Open index.html using a local server
    (recommended to avoid module import issues):
   npx serve
🧠 What I Learned

Working with external APIs and asynchronous JavaScript

Handling network instability with retry & abort patterns

Implementing offline-first behavior using localStorage

Managing UI states (loading, success, offline)

Using ES Modules to organize JavaScript code

Building responsive, mobile-first interfaces without frameworks

Improving UX with micro-interactions and dynamic theming

📌 Notes

This project intentionally avoids frameworks to demonstrate core JavaScript mastery

Designed to simulate real-world frontend application behavior

Suitable for Junior to Mid-level Frontend Developer portfolios
👤 Author

Your Name
Frontend Developer

GitHub: https://github.com/ReffkiAndreaPratama/

Portfolio: https://reffkiandreapratama.github.io/Portofolio-v1/



