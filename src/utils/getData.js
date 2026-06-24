export async function getData(params) {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=30&page=1&x_cg_demo_api_key=${process.env.API_KEY}`
    
    try {
        const response = await fetch(url)
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Failed to fetch crypto data:", error);
        return []; 
    }
}