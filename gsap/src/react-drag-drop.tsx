import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Marquee from "react-fast-marquee";
 
export default function ReactBeautifulDNDComponent() {
    const index = [
        {"id": "0", "index_name": "Nifty 50", "value": 48766.10, "isSelected": true},
        {"id": "1", "index_name": "Sensex", "value": 51000.60, "isSelected": true},
        {"id": "2", "index_name": "Nifty Next 50", "value": 35678.20, "isSelected": true},
        {"id": "3", "index_name": "Nifty Midcap 100", "value": 27689.30, "isSelected": true},
        {"id": "4", "index_name": "Nifty Smallcap 100", "value": 9654.80, "isSelected": true},
        {"id": "5", "index_name": "Nifty Bank", "value": 35200.50, "isSelected": false},
        {"id": "6", "index_name": "Nifty IT", "value": 29756.90, "isSelected": false},
        {"id": "7", "index_name": "Nifty Pharma", "value": 13450.70, "isSelected": false},
        {"id": "8", "index_name": "Nifty FMCG", "value": 3689.40, "isSelected": false},
        {"id": "9", "index_name": "Nifty Auto", "value": 11256.60, "isSelected": false},
        {"id": "10", "index_name": "Nifty Realty", "value": 3625.10, "isSelected": false},
        {"id": "11", "index_name": "Nifty Energy", "value": 16234.50, "isSelected": false}
    ];

    const [componentGridState, setComponentGrid] = useState(index);
    const [selectedIndices, setSelectedIndices] = useState(index);

    function handleDragEnd(result: any) {
        if (!result.destination) {
            return;
        }
      
        const temp = Array.from(componentGridState);
        const [removed] = temp.splice(result.source.index, 1);
        temp.splice(result.destination.index, 0, removed);

        setComponentGrid(temp)
     }

    const [openSettings ,setSettings] = useState(false);

    function handleClick(event: any) {
        setAnchorEl(event.currentTarget);
        setSettings(!openSettings);
    }

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


    function handleSelectedIndices(param: any) {
        let temp = [...componentGridState];
        temp[param].isSelected = !temp[param].isSelected;

        const selected = temp.filter(item => item.isSelected)
        const not_selected = temp.filter(item => !item.isSelected)

        setSelectedIndices([...selected,...not_selected]);
        setComponentGrid([...selected,...not_selected])
    }


    return (
        <>
        <div className="user-header-indices">
            <Marquee autoFill={true} className="marquee" pauseOnHover={true} pauseOnClick={true} speed={20}>
            <div className="indices">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="droppable-component-grid" direction="horizontal">
                        {(provided) => (
                            <div className="indices" ref={provided.innerRef} {...provided.droppableProps}>
                                {componentGridState.filter((item) => item.isSelected).map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div className="indices-container" key={item.id}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                <div>{item.index_name}</div>
                                                <div className="value">₹ {item.value}</div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                
                {/* {componentGridState.filter((item) => item.isSelected).map((item) => {
                    return (
                        <div className="indices-container" key={item.id}>
                            <div>{item.index_name}</div>
                            <div className="value">{item.value}</div>
                        </div>
                    )
                })} */}
            </div>
        </Marquee>

        <div className="edit">
            <Button onClick={(event) => handleClick(event)}>Indices Settings</Button>

            <Menu open={openSettings} anchorEl={anchorEl} onClose={handleClick} className="menu">
                <div className="dragger">
                    <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="droppable-component-grid" direction="vertical">
                        {(provided) => (
                            <div className="cont1" ref={provided.innerRef} {...provided.droppableProps}>
                                {componentGridState.filter((item) => item.isSelected).map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <div className="container" key={item.id}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                <MenuItem>
                                                        <div className="dragger_index">
                                                            <span className="material-symbols-outlined">
                                                                drag_indicator
                                                            </span>
                                                            {item.index_name}
                                                        </div>
                                                </MenuItem>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                        </Droppable>
                    </DragDropContext>
                </div>

                <div className="selector">
                    <h4>Select Indices</h4>
                    {selectedIndices.map((item: any,index: any)=> {
                        return (
                            <>
                            <MenuItem >
                                <div key={item.id} className="select-indices">
                                    <input type="checkbox" checked={item.isSelected} onChange={() => handleSelectedIndices(index)}></input>
                                    <div>{item.index_name}</div>
                                </div>
                            </MenuItem>
                            </>
                        )
                    })}
                </div>

            </Menu>
        </div>
        </div>
    </>
    );
}
