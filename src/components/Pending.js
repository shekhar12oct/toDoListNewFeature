import {React,useState} from 'react';
import './ViewItem.css';

const Pending = ({toDoLists,setToDoLists}) => {
    const pendingTasks=[...toDoLists].filter(todo=>todo.isPending===true);
    const stylebtn={display:'block'};


    const deleteItem=(id)=>
    {
        const filteredToDoLists3= toDoLists.filter(item=>item.id!==id)
        setToDoLists(filteredToDoLists3);
    }
     
    const handleCompleteTask=(id)=>
    {
       
        // console.log(toDoLists);
        const newToDoLists=toDoLists.map(item=>item.id===id?
            {
                
                id:item.id,
                text:item.text,
                isComplete:true,
                isPending:false,
                isProgress:false,
                isAbandon:false
            }
            :item
            )
            // console.log(newToDoLists);
            setToDoLists(newToDoLists);
            console.log(toDoLists);
    }
    const handleProgressTask=(id)=>
    {
        const newToDoLists=toDoLists.map(item=>item.id===id?
            {
                id:item.id,
                text:item.text,
                isComplete:false,
                isPending:false,
                isProgress:true,
                isAbandon:false
            }:item
            )
            setToDoLists(newToDoLists);
            console.log(toDoLists);
    }
    
    const handleAbandonTask=(id)=>
    {
        const newToDoLists=toDoLists.map(item=>item.id===id?
            {
                id:item.id,
                text:item.text,
                isComplete:false,
                isPending:false,
                isProgress:false,
                isAbandon:true
            }:item
            )
            setToDoLists(newToDoLists);
            console.log(toDoLists);
    }


    return (
        <div className="todoapp">
        <div className="view-item">
            {
                pendingTasks.map(item=>{
                    return (
                    <div  className="wrapper-items">
                    <form className="view-form-items" key={item.id}>
                    <p>{item.text}</p>
                    <input type="button"
                    value="Complete"
                    className="input-btn"
                    onClick={()=>handleCompleteTask(item.id)}
                    />
                    <input type="button"
                    value="Abandon"
                    className="input-btn"
                    onClick={()=>handleAbandonTask(item.id)}
                    /> 
                    <input type="button"
                    value="InProgress"
                    className="input-btn"
                    onClick={()=>handleProgressTask(item.id)}
                    />
                    <button style={stylebtn} onClick={()=>deleteItem(item.id)}>Delete</button>
                    </form>
                    </div>
                )
                })
            }
        </div>
        </div>
    )
}

export default Pending;