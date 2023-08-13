import { fetchBreeds, fetchCatByBreed } from './cat-api'

document.addEventListener('DOMContentLoaded', () => {
    const breedSelect = document.querySelector('.breed-select')

    fetchBreeds()
    .then(breeds => {
        breeds.forEach(breed => {
            loader.style.display = 'block';
            const option = document.createElement('option')
            option.value = breed.id;
            option.textContent = breed.name
            breedSelect.appendChild(option)
        });
        loader.style.display = "none"
    })

    .catch(error => {
        console.error('Error fetching cat:', error);
    
        // При ошибке запроса, показать элемент с ошибкой
        errorP.style.display = 'block';
        loader.style.display = 'none'
    })
})


const breedSelect = document.querySelector(".breed-select")
const catInfoDiv = document.querySelector(".cat-info")
const loader = document.querySelector(".loader")
const errorP = document.querySelector(".error")

breedSelect.addEventListener("change", () => {
    const selectedBreedId = breedSelect.value;

    loader.style.display = 'block'
    catInfoDiv.style.display = 'none';
    errorP.style.display = 'none';
  
    fetchCatByBreed(selectedBreedId)
    .then(catData => {
      // Отображение данных о коте
      catInfoDiv.innerHTML = `
        <img src="${catData.url}" alt="Cat" style = "width: 250px; height: 200px; margin-top: 20px">
        <h2>${catData.breeds[0].name}</h2>
        <p>${catData.breeds[0].description}</p>
      `;
  
      // Отобразить блок информации о коте и скрыть ошибку
      catInfoDiv.style.display = 'block';
      errorP.style.display = 'none';
    })
    .catch(error => {
      console.error('Error fetching cat:', error);
      // При ошибке запроса, показать элемент с ошибкой
      errorP.style.display = 'block';
    })
    .finally(() => {
      // В любом случае, скрыть загрузчик после завершения запроса
      loader.style.display = 'none';
    });
  
})