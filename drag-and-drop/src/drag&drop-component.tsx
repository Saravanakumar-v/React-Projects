/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDrag, useDrop } from "react-dnd"
import { useEffect, useState } from "react";
import DraggableComponent1 from "./drag-drop-component/comp1-component";
import DraggableComponent4 from "./drag-drop-component/comp4-component";
import DraggableComponent3 from "./drag-drop-component/comp3-component";
import DraggableComponent2 from "./drag-drop-component/comp2-component";



export function DragFunction(props : any) {
    const[{isDragging}, dragRef] = useDrag({
        type: "component",
        item: {id: props.id, component: props.component},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    })

    return {isDragging, dragRef};
}


export default function DragDropComponent() {
    const [items, setItems] = useState([
        {id: 0, component: DraggableComponent1},
        {id: 1, component: DraggableComponent2},
        {id: 2, component: DraggableComponent3},
        {id: 3, component: DraggableComponent4},
    ])

    const [dragged, setDragged] = useState<any>([])

    useEffect(() => {
        if(dragged) {
            console.log(dragged);
        }
    }, [dragged])

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: 'component',
        drop: (item: any) => {
            setDragged((prev: any) => [...prev,item])
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
        }),
      }));


    return (
        <div className="container">
            <div className="cont1">
                {items.map((item) => (
                    <item.component key={item.id}/>
                ) )}
            </div>
            
            <div ref={dropRef} className="drop-container">
                {dragged.map((item: any) => (
                    <item.component />
                ))}
            </div>
        </div>
    )
}