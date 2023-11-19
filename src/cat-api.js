import axios from 'axios';

const apiKey = 'live_OL8SUtRIAGOzXkWDSShPMT170hWdbM4qS9Xi0H633A3UX4kkSigjkNpFAyrQEhlJ';
axios.defaults.headers.common['x-api-key'] = apiKey;

export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    console.error('Error fetching cat breeds:', error.message);
    throw error;
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cat by breed:', error.message);
    throw error;
  }
}