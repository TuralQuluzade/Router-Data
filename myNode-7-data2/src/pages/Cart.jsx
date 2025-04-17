import React, { useEffect, useState } from 'react'


const Cart = () => {
    const[card,setCard]=useState([])
    const getProd=(x)=>{
        let card=JSON.parse(localStorage.getItem("card"))
        setCard(card)
    }
    useEffect(()=>{
        getProd()
    },[])
    const deleteItem = (x) => {
        const storedItems = localStorage.getItem("card")
        const items = storedItems ? JSON.parse(storedItems) : [];
        const updatedItems = items.filter(item => item.id !== x);
        console.log(updatedItems);
        localStorage.setItem("card", JSON.stringify(updatedItems))
        console.log(`Item with ID ${x} has been removed.`);
        setCard(updatedItems)
    }
  return (
    <div style={{width:"100%",display:"flex",height:"auto",flexDirection:"row",gap:"20px",flexWrap:"wrap",justifyContent:"center"}}>
        {card && card.map((x)=>{
            return(
                <div style={{width:"25%",display:"flex",flexDirection:"column",textAlign:'center',border:"1px solid gray",borderRadius:"5px",alignItems:"center"}}>
                <img style={{width:"80%"}} src={x.image} alt="" />
                <span>{x.title}</span>
                <span>{x.price}Manat</span>
                <span>pcx:{x.count}</span>
                <button onClick={() => deleteItem(x.id)}>Delete</button>

            </div>
            )
        })}
    </div>
  )
}

export default Cart