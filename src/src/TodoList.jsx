import React from 'react';
import {useState} from 'react';

function TodoList() {

    let arr = ["Apple", "Mango"];
    const[Item, setItem] = useState(arr);
    const[Data, setData] = useState([]);
    function AddtheItem(event){
        event.preventDefault();
        let result = Data.concat(Item)
        setData(result)
        // arr.push(str);
        // str="";
        // setItem(arr);
    }


// when we want to add the item in the list(array)

    function fixthearr(event){
        setItem(event.target.value)
        // str+=event.target.value
        // console.log(str)
    }


    return (
        <>
            <form>
                <input type="text" placeholder='add-item' onChange={fixthearr}></input>
                <button onClick={AddtheItem}>Add</button>
            </form>
            <div className="list">
                Item.map((list) =>{
                    {list}
                })
            </div>
        </>
    )
}

export default TodoList;