

export default function todoActionReducer(state: any, action: any) {

    switch (action.task) {
        case 'ADD_LIST':
            return {
                // tasklist = [[task-name, isCompleted],[...],[...]]
                taskList: [...state.taskList,[action.payload,false]]
            };

        case 'DELETE_LIST':
            const temp1 = [...state.taskList];
            temp1.splice(action.payload,1);

            return {
                taskList: temp1
            };

        case 'EDIT_LIST':
            const temp2 = [...state.taskList];
            temp2[action.payload.index] = [action.payload.value, false];
            
            return {
                taskList: temp2
            };

        case 'DONE_TASK':
            const temp3 = [...state.taskList];            
            temp3[action.payload.index] = [temp3[action.payload.index][0],action.payload.bool]
            console.log(action.payload.bool)
            
            return {
                taskList: temp3
            }

        default:
            console.error("Unknow TODO-list handler");
            return state;
    }
}