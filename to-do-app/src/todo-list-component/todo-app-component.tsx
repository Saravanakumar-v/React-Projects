import { useReducer } from "react";
import ListComponent from "./list-component";
import todoActionReducer from "./todoActionReducer";


export default function TodoListComponent() {
    const initialStates = {taskList: []};

    const [state, dispatch] = useReducer(todoActionReducer,initialStates)

    const add_list = (event: any) => {
        event.preventDefault();
        const inputValue = event.target.taskInpt.value;

        dispatch({
            task: "ADD_LIST",
            payload : inputValue,
        })
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
              <div>{state?.taskList.filter((item: any) => item[1]).length}/{state?.taskList.length}</div>
            </div>
          </div>
  
          <form onSubmit={add_list} className='ToDoComponent-container_input'>
            <input type='text' placeholder='Write your next task' id="taskInpt" maxLength={20}></input>
            <button>
              <span className="material-symbols-outlined">
                add
              </span>
            </button>
          </form>  
          
          {state?.taskList.length > 0 
            ?
            <div className='list'>
              <ListComponent state={state} dispatch={dispatch}/>
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