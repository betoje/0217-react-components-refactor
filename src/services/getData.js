const API_URL = "src";

export async function getData() {
  try {
    const response = await fetch(`${API_URL}/assets/movies.json`);
    // const response = await fetch(`src/assets/movies.json`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
