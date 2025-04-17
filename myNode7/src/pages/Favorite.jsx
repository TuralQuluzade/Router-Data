import React, { useEffect, useState } from 'react'


const Favorite = () => {
    const [wish, setWish] = useState([])
    const getProd = () => {
        let prod = JSON.parse(localStorage.getItem("wish")) || []

        setWish(prod)
    }


    useEffect(() => {
        getProd()
    }, [])

    const deleteItem = (x) => {
        const storedItems = localStorage.getItem("wish")
        const items = storedItems ? JSON.parse(storedItems) : [];
        const updatedItems = items.filter(item => item.id !== x);
        console.log(updatedItems);
        localStorage.setItem("wish", JSON.stringify(updatedItems))
        console.log(`Item with ID ${x} has been removed.`);
        setWish(updatedItems)
    }
    return (
        <div style={{ width: "100%", display: "flex", height: "auto", flexDirection: "row", gap: "20px", flexWrap: "wrap", justifyContent: "center", backgroundColor: "black" }}>
            {wish && wish.map((x) => {
                return (
                    <div style={{ width: "25%", display: "flex", flexDirection: "column", textAlign: 'center', border: "1px solid gray", borderRadius: "5px", backgroundColor: "white", alignItems: "center" }}>
                        <img style={{ width: "80%" }} src={x.image} alt="" />
                        <span>{x.title}Manat</span>
                        <span>{x.price}</span>
                        <button onClick={() => deleteItem(x.id)}>Delete</button>
                    </div>
                )
            })}

        </div>
    )
}

export default Favorite