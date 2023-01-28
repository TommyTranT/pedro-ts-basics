const fetchData = (apiUrl) => {
  return fetch(apiUrl)
    .then((response) => response.json());
}