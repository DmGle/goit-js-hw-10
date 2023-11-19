import { fetchBreeds, fetchCatByBreed } from './cat-api';

document.addEventListener('DOMContentLoaded', async function () {
    const breedSelect = document.querySelector('.breed-select');
    const loaderBreeds = document.querySelector('.loader');
    const loaderCat = document.querySelector('.loader');
    const error = document.querySelector('.error');
    const catInfo = document.querySelector('.cat-info');
  
    try {
      loaderBreeds.style.display = 'block';
  
      const breeds = await fetchBreeds();
  
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.text = breed.name;
        breedSelect.appendChild(option);
      });
  
      loaderBreeds.style.display = 'none';
  
      breedSelect.addEventListener('change', async function () {
        const selectedBreedId = breedSelect.value;
        if (selectedBreedId) {
          try {
            loaderCat.style.display = 'block';
  
            const catData = await fetchCatByBreed(selectedBreedId);
  
            catInfo.innerHTML = `
              <img src="${catData[0].url}" alt="Cat Image">
              <p>Breed: ${breeds.find(breed => breed.id === selectedBreedId).name}</p>
              <p>Description: ${catData[0].breeds[0].description}</p>
              <p>Temperament: ${catData[0].breeds[0].temperament}</p>
            `;
  
            loaderCat.style.display = 'none';
            catInfo.style.display = 'block';
          } catch (error) {
            console.error(error);
            loaderCat.style.display = 'none';
            error.style.display = 'block';
            catInfo.style.display = 'none';
          }
        }
      });
    } catch (err) {
      console.error(err);
      loaderBreeds.style.display = 'none';
      error.style.display = 'block';
    }
  });
  