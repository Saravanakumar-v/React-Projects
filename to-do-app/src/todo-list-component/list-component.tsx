import { useState } from "react";

export default function ListComponent({state, dispatch}: any)  {

    const [onEdit, setEdit] = useState(false)
    const [editIndex, setEditIndex] = useState(0);

    function toggleEdit(param : any) {
      setEdit(!onEdit)
      setEditIndex(param)
    }

    const edit_list = (index: any,event: any) => {
      event.preventDefault();
      const inputValue = event.target.editInpt.value;

      dispatch({
        task: 'EDIT_LIST',
        payload: {value: inputValue, index: index}
      })
      setEdit(false)
    }

    const delete_list = (index: any) => {
      dispatch({
        task: 'DELETE_LIST',
        payload: index
      })
    }

    const done_list = (index: any,toggle: any) => {
      console.log(toggle);
      
      console.log("debubg index",index)
      dispatch({
        task: 'DONE_TASK',
        payload: {index: index, bool: toggle}
      })
    }
 

    return (
      <>
        {state?.taskList.map((list: any,index :any) => {
            return (
              <div className='ListComponent' key={crypto.randomUUID()}>
                <div className='ListComponent-cont1'>
                    <div className={list[1] ?'selected' :'unselected'} onClick={() => done_list(index,!(list[1]))} id="selector"></div>
                    {onEdit && editIndex === index ?<form onSubmit={(event) => edit_list(index, event)}><input className="editInpt" id='editInpt' autoFocus maxLength={20}></input></form> :(<div style={{textDecoration: state.taskList[index][1] ?'line-through' :'none'}}>{list[0]}</div>)}
                </div>
              
                <div className='ListComponent-cont2'>
                  <button onClick={() => toggleEdit(index)}>
                    <span className="material-symbols-outlined">
                      {onEdit && editIndex === index ?'cancel' :'edit'}
                    </span> 
                  </button> 
  
                  <button onClick={() => delete_list(index)}>
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
  