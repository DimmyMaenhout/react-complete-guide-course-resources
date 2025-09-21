export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places"); // fetch methode is beschikbaar via de browser, niet REACT specifiek!
  const resData = await response.json();

  if (!response.ok) {
    // 400, 500
    throw new Error("Failed to fetch places");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body:  JSON.stringify({places: places}), // kunnen ook gewoon deze kortere notatie gebruiken aangezien de key dezelfde naam heeft als de property { places }
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }

  return resData.message;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places"); // fetch methode is beschikbaar via de browser, niet REACT specifiek!
  const resData = await response.json();

  if (!response.ok) {
    // 400, 500
    throw new Error("Failed to fetch user places");
  }

  return resData.places;
}
