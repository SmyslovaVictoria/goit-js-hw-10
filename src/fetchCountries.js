export default fetchCountries;


function fetchCountries(name) {
    const URL = `https://restcountries.com/v3.1/name/${name}?fields=flags,name,capital,population,languages`;
    return fetch(URL)
        .then(response => {
            if (!response.ok) {
                alertFailure()
            } return response.json();
        });
};

function alertFailure() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
    };
