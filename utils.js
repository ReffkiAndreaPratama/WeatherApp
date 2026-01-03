export function getAdvice(data) {
  const uv = data.current.uv;
  const text = data.current.condition.text.toLowerCase();

  if (uv >= 7) return "☀️ UV tinggi, gunakan sunscreen";
  if (text.includes("rain")) return "🌧️ Disarankan membawa payung";
  if (text.includes("cloud")) return "☁️ Cuaca mendung, aktivitas ringan";
  return "✅ Cuaca aman untuk aktivitas luar";
}

export function getAlert(data) {
  if (data.current.wind_kph > 40) return "⚠️ Angin kencang";
  if (data.current.uv >= 8) return "⚠️ UV ekstrem";
  return null;
}
