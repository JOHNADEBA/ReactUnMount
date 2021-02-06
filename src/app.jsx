import React, { useState, useMemo } from 'react';
import AddPerson from './addPerson.jsx';
import QueueRow from './queueRow.jsx';

export default function App() {
    const [queues, setQueues] = useState([{ name: 'John Doe', tasks: ['Groceries', 'Take out the trash'] }]);
    const [rows, setRows] = useState([]);

    useMemo(() => {      
        let rows =[[]];
        for (let i = 0; i < queues.length; i++) {
           
                if( (i+1) % 4 == 0 )
                    rows.push([queues[i]]);
                else
                   rows[rows.length-1].push(queues[i]);       
        }
       
        setRows(rows);
    }, [queues]); 

    console.log('render: App');

    return (
        <div>
            <div className="title">Tasks</div>
            <AddPerson currentPeople={queues} setPeople={setQueues} />
            <div className="queues-wrapper">
                {rows.map((row, idx) => <QueueRow key={`${idx}`} idx={idx} row={row} currentPeople={queues} setPeople={setQueues} />)}
            </div>
        </div>
    );
}