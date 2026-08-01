export const getLocationName = async (lat, lon) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
  );

  if (!response.ok) {
    throw new Error("Failed to get location");
  }

  const data = await response.json();

  return {
    name:
      data.address.city ||
      data.address.town ||
      data.address.village ||
      data.address.state ||
      "Unknown Location",
    country: data.address.country || "",
  };
};