export async function getData(params) {
    const options = {method: 'GET'};


//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=1'
const response =  await fetch(url)
const data = await response.json()
console.log(data)

return data
    
}