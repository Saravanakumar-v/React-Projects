import './App.scss';
import ReactBeautifulDNDComponent from './react-drag-drop';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ReactBeautifulDNDComponent />
    </DndProvider>
  )
}

export default App;
