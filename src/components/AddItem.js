import {React,useState} from 'react'
import './ViewItem.css';

const AddItem = ({toDoLists,setToDoLists}) => {
    const [inputText,setInputText]=useState("");

    const changeHandler=(e)=>
    {
     setInputText(e.target.value);
    }

    const submitHandler=(e)=>
    {
        e.preventDefault();
        if(inputText){
        setToDoLists([
            ...toDoLists,
            {
                id:toDoLists.length?toDoLists[toDoLists.length-1].id+1:1,
                text:inputText,
                isComplete:false,
                isProgress:false,
                isPending:false,
                isAbandon:false,           
        }   
        ])
    }
    else
    {
        console.log("Input text has been empty");   
    }
        if(!inputText)
        {
            console.log("Input String is Empty");
        }
        setInputText("");
        console.log(toDoLists);
    }


    return (
        <form className="form-input" onSubmit={submitHandler}>
        <div>
            <input className="input-field"
             type="text"
            name="text"
            placeholder="Enter Items to be Added"
            value={inputText}
            onChange={changeHandler}
            autoFocus
            />
        </div>
        </form>
    )
}

export default AddItem;
