import {useEffect,useState} from "react"
import axios from "axios"

const getRequest = async()=>{
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`
    const res = await axios.get(url)
    const data = res.data.slice(0,75)
    
    const newCards = data.map((card)=>{
      return {
        id:card.id,
        image:card.image,
        name:card.name,
        price:card.current_price,
        highPrice:card.high_24h,
        lowPrice:card.low_24h
      }
    })
    return newCards
}

export default function useFetchCards (){
    const [cards,setCards] = useState([]);

    const gedCards = async()=>{
        const newCards = await getRequest()
        setCards(p=>newCards)
    }
    useEffect(()=>{
        gedCards()
    },[])
    
    return cards
}