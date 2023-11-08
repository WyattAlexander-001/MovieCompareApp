//using axios
const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '42bf785f',
            s: searchTerm,
        }
    });
    console.log(response.data);
};      

const input = document.querySelector('input');
input.addEventListener('input', (event) => {
    fetchData(event.target.value);
}); 
