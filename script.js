import { getAdvice, getAlert } from "./utils.js";

const API_KEY = "5125f287049f4e1baea24812260301";
const $ = id => document.getElementById(id);

/* ELEMENTS */
const searchInput = $("searchInput");
const searchBtn = $("searchBtn");
const locBtn = $("locBtn");

const cityEl = $("city");
const countryEl = $("country");
const tempEl = $("temp");
const conditionEl = $("condition");
const maxEl = $("max");
const minEl = $("min");
const humidityEl = $("humidity");
const windEl = $("wind");
const uvEl = $("uv");
const sunriseEl = $("sunrise");
const timeEl = $("time");

const adviceEl = $("advice");
const alertEl = $("alert");
const statusEl = $("status");
const container = document.body;

let controller;
let clockInterval;

/* TEMP ANIMATION */
function animateTemp(el, value) {
  let current = 0;
  const target = Math.round(value);
  const timer = setInterval(() => {
    el.textContent = current++;
    if (current > target) clearInterval(timer);
  }, 15);
}

/* SEARCH */
searchBtn.onclick = () => {
  if (searchInput.value.trim()) fetchWeather(searchInput.value.trim());
};

searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") searchBtn.click();
});

/* LOCATION */
locBtn.onclick = () => {
  navigator.geolocation.getCurrentPosition(pos => {
    fetchWeather(`${pos.coords.latitude},${pos.coords.longitude}`);
  });
};

/* FETCH WITH RETRY + ABORT */
async function fetchWithRetry(url, retries = 2) {
  try {
    if (controller) controller.abort();
    controller = new AbortController();
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error();
    return await res.json();
  } catch (err) {
    if (retries > 0) return fetchWithRetry(url, retries - 1);
    throw err;
  }
}

/* FETCH WEATHER */
async function fetchWeather(query) {
  try {
    const data = await fetchWithRetry(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=1`
    );
    renderWeather(data);
    localStorage.setItem("lastWeather", JSON.stringify(data));
    startClock(data.location.tz_id);
  } catch {
    const cached = JSON.parse(localStorage.getItem("lastWeather"));
    if (cached) renderWeather(cached, true);
    else alert("Gagal mengambil data cuaca");
  }
}

/* RENDER UI */
function renderWeather(data, offline = false) {
  cityEl.textContent = data.location.name;
  countryEl.textContent = data.location.country;

  animateTemp(tempEl, data.current.temp_c);
  conditionEl.textContent = data.current.condition.text;

  maxEl.textContent = data.forecast.forecastday[0].day.maxtemp_c;
  minEl.textContent = data.forecast.forecastday[0].day.mintemp_c;

  humidityEl.textContent = data.current.humidity + "%";
  windEl.textContent = data.current.wind_kph + " km/h";
  uvEl.textContent = data.current.uv;
  sunriseEl.textContent = data.forecast.forecastday[0].astro.sunrise;

  adviceEl.textContent = getAdvice(data);
  alertEl.textContent = getAlert(data) || "";
  statusEl.textContent = offline ? "📴 Offline mode" : "";

  if (data.current.is_day === 0) {
    document.body.classList.add("night");
  } else {
    document.body.classList.remove("night");
  }

  container.classList.remove("fade-in");
  void container.offsetWidth;
  container.classList.add("fade-in");
}

/* CLOCK */
function startClock(tz) {
  clearInterval(clockInterval);
  clockInterval = setInterval(() => {
    timeEl.textContent = new Date().toLocaleTimeString("en-US", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit"
    });
  }, 1000);
}

/* INIT */
window.onload = () => locBtn.click();
