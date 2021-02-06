import React, { useState, useMemo, useEffect } from 'react';
import AddPerson from './addPerson.jsx';
import QueueRow from './queueRow.jsx';

export default function App() {
    const [queues, setQueues] = useState([{ name: 'John Doe', tasks: ['Groceries', 'Take out the trash'] }]);
    const [rows, setRows] = useState([]);

    useMemo(() => {
        setRowData();
       
        return () => remove.setRowData();
    }, [queues]);

    function setQueuesData(data){
        setQueues(data);
    }

    function setRowData(){
        
        const newRows = [];
        let currentRow = []
        for (let i = 0; i < queues.length; i++) {
            if (currentRow.length === 3) {
                newRows.push(currentRow);
                currentRow = [];
            }
            currentRow.push(queues[i]);
        }
        if (currentRow.length > 0) newRows.push(currentRow);
        setRows(newRows);
    }
    console.log('render: App');

    return (
        <div>
            <div className="title">Tasks</div>
            <AddPerson currentPeople={queues} setPeople={setQueuesData} />
            <div className="queues-wrapper">
                {rows.map((row, idx) => <QueueRow key={`${idx}`} idx={idx} row={row} currentPeople={queues} setPeople={setQueuesData} />)}
            </div>
        </div>
    );
}