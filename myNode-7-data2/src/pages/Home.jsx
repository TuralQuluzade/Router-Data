import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setData(res.data)
        })
    },[])
    const adCard=(x)=>{
        let card=JSON.parse(localStorage.getItem("card")) || []
        let ex = card.find((item) => item.id ==x.id)
        
        if (ex) {
            ex.count += 1
        } else {
            card = [...card, {...x, count: 1}]
        }
        localStorage.setItem("card",JSON.stringify(card))
    }
    const adWish =(x)=>{
        let wish=JSON.parse(localStorage.getItem("wish")) || []
        wish =[...wish,x]
        localStorage.setItem("wish",JSON.stringify(wish))
        
    }

  return (
    <div style={{width:"100%",display:"flex",height:"auto",flexDirection:"row",gap:"20px",flexWrap:"wrap",justifyContent:"center"}}>
       {data && data.map((x)=> {
        return(
            <div style={{width:"25%",display:"flex",flexDirection:"column",textAlign:'center',border:"1px solid gray",borderRadius:"5px",alignItems:"center"}}>
                <img style={{width:"80%"}} src={x.image} alt="" />
                <span>{x.title}</span>
                <span>{x.price}Manat</span>
                <button  onClick={()=>adCard(x)}style={{width:"30%",height:"40px"}}>Add To Cart</button>
                <button onClick={()=>adWish(x)}style={{width:"30%",height:"40px"}}>Add to Wish</button>
            </div>
        )
       })}
    </div>
  )
}

export default Home