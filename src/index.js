import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

document.addEventListener('DOMContentLoaded', async function () {
  const loader = document.querySelector('.loader');
  const error = document.querySelector('.error');
  const breedSelect = document.querySelector('.breed-select');
  const catInfo = document.querySelector('.cat-info');

  try {
    loader.style.display = 'block';

    const breeds = await fetchBreeds();

    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.text = breed.name;
      breedSelect.appendChild(option);
    });

    loader.style.display = 'none';

    breedSelect.addEventListener('change', async function () {
      const selectedBreedId = breedSelect.value;
      if (selectedBreedId) {
        try {
          loader.style.display = 'block';
    
          const catData = await fetchCatByBreed(selectedBreedId);
    
          if (catData.length === 0 && breeds.find(breed => breed.id === selectedBreedId)) {
            // Повідомлення про помилку, якщо catData порожній і обрана порода існує
            error.style.display = 'block';
            loader.style.display = 'none';
            catInfo.style.display = 'none';
          } else if (catData.length === 0) {
            // Очищення розмітки при порожньому масиві
            catInfo.textContent = ''; // Очищення розмітки
            error.style.display = 'none'; // Сховати повідомлення про помилку
            loader.style.display = 'none';
            catInfo.style.display = 'none';
          } else {
            // Відображення інформації про кота
            catInfo.innerHTML = `
              <img src="${catData[0].url}" alt="Cat Image">
              <p>Breed: ${breeds.find(breed => breed.id === selectedBreedId).name}</p>
              <p>Description: ${catData[0].breeds[0].description}</p>
              <p>Temperament: ${catData[0].breeds[0].temperament}</p>
            `;
            error.style.display = 'none';
            loader.style.display = 'none';
            catInfo.style.display = 'block';
          }
        } catch (catError) {
          console.error(catError);
          // Повна очистка розмітки при помилці
          catInfo.textContent = ''; // Очищення розмітки
          loader.style.display = 'none';
          error.style.display = 'block';
          catInfo.style.display = 'none';
        }
      }
    });
  } catch (initError) {
    console.error(initError);
    loader.style.display = 'none';
    error.style.display = 'block';
  }
});
