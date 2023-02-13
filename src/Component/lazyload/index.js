import axios from "axios";
import { useEffect, useState } from "react";

function LazyLoad() {
    const [data,setData] = useState([])
    useEffect(()=>{
        const getData = async () =>{
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
            setData(res.data)
        }
        getData()
    },[])
    return <div>
        {data.map(item=>{
            return <h2 key={item.id}>{item.title}</h2>
        })}
    </div>
}

export default LazyLoad;