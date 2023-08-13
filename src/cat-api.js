import axios from "axios";

axios.defaults.headers.common['x-api-key'] = "live_xlP9kYSdrxlGrWHzWlxqmnAUgq9Wh3I9FT6Mv5Z8L3m6tpwrv48ZU6ckUzXE9RnV"

export function fetchBreeds(){
    return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
        throw new Error(error)
    })
}

export function fetchCatByBreed(breedId) {
    return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0])
    .catch(error => {
        throw new Error(error)
    })
}