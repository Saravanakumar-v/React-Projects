import TodoListComponent from './todo-list-component/todo-app-component';

import '../src/App.scss';

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