import {React,useState} from 'react';
import './App.css';
import Complete from './components/Complete';
import AddItem from './components/AddItem';
import ViewItem from './components/ViewItem';
import InProgress from './components/InProgress';
import Abandon from './components/Abandon';
import Pending from './components/Pending';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



  const  App=()=> {
  const [toDoLists,setToDoLists]=useState([]);
  const activeElement=[...toDoLists].filter(todo=>todo.isComplete===true);

  const clearCompleted=(id)=>
  {
    const updateToDoItems=[...toDoLists].filter(todo=>todo.isComplete!==true);

    setToDoLists(updateToDoItems);
  }

  return (
    <>
    <div className="App">
    <h1 className="heading1">todos</h1>
    <AddItem toDoLists={toDoLists} setToDoLists={setToDoLists} />
    <Router>
    <Link to="/"></Link>
         <Switch>
         <Route path="/all">
         <ViewItem  toDoLists={toDoLists} setToDoLists={setToDoLists} />
          </Route>
          <Route path="/inprogress">
          <InProgress toDoLists={toDoLists} setToDoLists={setToDoLists} />
          </Route>
          <Route path="/complete">
          <Complete  toDoLists={toDoLists} setToDoLists={setToDoLists} />
          </Route>
          <Route path="/pending">
         <Pending toDoLists={toDoLists} setToDoLists={setToDoLists} />
          </Route>
          <Route path="/abandon">
         <Abandon toDoLists={toDoLists} setToDoLists={setToDoLists} />
          </Route>
          <Route path="/">
         <ViewItem toDoLists={toDoLists} setToDoLists={setToDoLists} />
          </Route>
         
         </Switch>
         <div className="wrapping-btns">
    <Link to="/all"><button className="btn1">All Tasks</button></Link>
    <Link to="/inprogress"><button className="btn2">In ProgressTasks</button></Link>
    <Link to="/complete"><button className="btn3">Completed Tasks</button></Link>
    <Link to="/pending"><button className="btn4">Pending Tasks</button></Link>
    <Link to="/abandon"><button className="btn5">Abandon Tasks</button></Link>
    <button className="btn4" onClick={clearCompleted} style={{visibility:activeElement.length!==0?null:"hidden"}}>Clear Completed</button>
    </div>
    </Router>
    </div>
    </>
  );
}

export default App;
