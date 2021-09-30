import {useEffect, useState} from 'react'
import axios from "axios"
const getRequest = async(id)=>{
    const url = `https://api.coingecko.com/api/v3/coins/${id}`
    const res = await axios.get(url)
    const data = res.data
    var newInfo = {}
    for (var key in data) {
        switch(key)
        {
            case 'name':
            {
                newInfo.name=data[key]
                break;
            }
            case 'market_data':
            {
                newInfo.price=data[key].current_price.usd
                newInfo.allTime_high=data[key].ath.usd
                newInfo.market_cap=data[key].market_cap.usd
                break;
            } 
            case 'market_cap_rank':
            {
                newInfo.market_cap_rank=data[key]
                break;
            }
            case 'image':{
                newInfo.image = data[key].large 
                break;
            }
            case 'description':{
                newInfo.description = data[key].en 
                break;
            }
            default : break;
            
        }
      }
      return newInfo 
}
export default function useGetInformation(id) {
    const [information,setInformation] = useState(null)

    const handleState = async ()=>{
        const newInfo = await getRequest(id)
        setInformation(p=>newInfo)
    }
    useEffect(()=>{
        handleState()
    },[])
    return information
}
