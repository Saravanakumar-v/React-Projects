import { useState } from 'react';
import '../src/App.scss';

function ListComponent({taskList,updateTaskList,length,updateLength,completed,updateCompleted}: any)  {

  function handleTaskCompletion(index: any) { 
    const temp = [...taskList]
    temp[index].isDone = !temp[index].isDone

    updateTaskList(temp);
    if(temp[index].isDone) {
      updateCompleted(completed+1)
    } else {updateCompleted(completed-1)}
  }

  function handleTaskDeletion(index: any) {
    console.log("task deletion");
    let temp = [...taskList]
    temp.splice(index,1)    

    updateLength(length-1)
    if(completed !== 0) {
      updateCompleted(completed-1);
    }
    updateTaskList(temp);
  }

  const handleEditTask = (index: any, event: any) => {
    event.preventDefault();

    const inputValue: any= document.querySelector('#edit-inpt');
    console.log(inputValue.value);

    let temp = [...taskList];
    temp[index].task = inputValue.value;

    updateTaskList(temp);
    setEdit(false);
  }
  const [onEdit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  function toggleEdit(index: any) {
    setEditIndex(index);
    setEdit(!onEdit);
  }

  return (
    <>
      {taskList.map((list: any,index :any) => {
          return (
            <div className='ListComponent' key={list.key}>
              <div className='ListComponent-cont1'>
                  <div className={list.isDone ?'selected' :'unselected'} id="selector" onClick={() => handleTaskCompletion(index)}></div>
                  {onEdit && editIndex === index ?<form onSubmit={(event) => handleEditTask(index, event)}><input className="editInpt" id='edit-inpt' autoFocus maxLength={20}></input></form> :(<div style={{textDecoration: list.isDone ?'line-through' :'none'}}>{list.task}</div>)}
              </div>
            
              <div className='ListComponent-cont2'>
                <button onClick={() => toggleEdit(index)}>
                  <span className="material-symbols-outlined">
                    {onEdit && editIndex === index ?'cancel' :'edit'}
                  </span> 
                </button> 

                <button onClick={() => handleTaskDeletion(index)}>
                  <span className="material-symbols-outlined">
                    delete
                  </span>
                </button>
              </div>
            </div>
          );
        })
      }
    </>
  );
}

function TodoListComponent() {
  const [taskList, setList] = useState<any[]>([]);
  const [length, setTaskLength] = useState(0);
  const [completed, setCompletedTask] = useState(0);

  const handleAddToList = (event: any) =>{
    event.preventDefault();

    const inputValue: any= document.querySelector('#task-inpt');
    setList((taskList) => [
      ...taskList,
      {task: inputValue.value,key: crypto.randomUUID(), isDone: false}
    ]);    
    setTaskLength(length + 1)
  }

  return (
    <>
      <div className='ToDoComponent-container'>
        <div className='ToDoComponent-container_completionInfo'>
          <div className='content'>
            <div>Task Done</div>
            <div>Keep it up</div>
          </div>
          <div className='task-status'>
            <div>{completed}/{length}</div>
          </div>
        </div>

        <form onSubmit={handleAddToList} className='ToDoComponent-container_input'>
          <input type='text' placeholder='Write your next task' id="task-inpt" maxLength={20}></input>
          <button onClick={handleAddToList}>
            <span className="material-symbols-outlined">
              add
            </span>
          </button>
        </form>

        {length > 0 
        ?
        <div className='list'>
          <ListComponent taskList={taskList} updateTaskList={setList} length={length} updateLength={setTaskLength} completed={completed} updateCompleted={setCompletedTask}/>
        </div>
        :
        <>
          <div className='empty-container'>Feels empty add up your task</div>
        </>
        }

      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="Todo-App">
      <div className='h3'>
        <span className="material-symbols-outlined">
          checklist_rtl
        </span>TODO</div>
      <TodoListComponent/>
    </div>
  );
} 