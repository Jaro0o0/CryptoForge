import { NextResponse } from 'next/server';


export async function GET (){
    
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1'
        
        try {
            const response = await fetch(url,
            {
                next: {
                    revalidate: 60,
                    cache: 'no-store',
                
                }

            
            }
            )
            
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

