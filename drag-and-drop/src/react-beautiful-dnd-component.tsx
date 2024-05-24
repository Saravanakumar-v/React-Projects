import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DraggableComponent1 from "./drag-drop-component/comp1-component";
import DraggableComponent2 from "./drag-drop-component/comp2-component";
import DraggableComponent3 from "./drag-drop-component/comp3-component";
import DraggableComponent4 from "./drag-drop-component/comp4-component";

export default function ReactBeautifullDNDComponent() {
    const componentGrid = [
        {id: 0, component: DraggableComponent1},
        {id: 1, component: DraggableComponent2},
        {id: 2, component: DraggableComponent3},
        {id: 3, component: DraggableComponent4}
    ]

    const [componentGridState, setComponentGrid] = useState(componentGrid);

    function handleDragEnd(result: any) {
        console.log(result);
    }  

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="component-grid">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {componentGridState.map((item) => (
                            <Draggable key={item.id} draggableId={item.id.toString()} index={item.id}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <item.component />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}