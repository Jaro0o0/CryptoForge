export async function getData(params) {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&page=1'
    
    const response = await fetch(url,)
    
    const data = await response.json()
    return data
}

// {
//         next: { revalidate: 60 }
//     }