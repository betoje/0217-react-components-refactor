const API_URL = "https://api-url";

export async function getData() {
  try {
    // const response = await fetch(`${API_URL}/x`);
    // const response = await fetch('src/assets/movies.json');
    const response = await fetch('movies.json');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
