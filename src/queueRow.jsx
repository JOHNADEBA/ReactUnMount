import React from 'react';
import Person from './person.jsx';
import './queueRow.css';

export default function QueueRow({ idx, row, currentPeople, setPeople }) {
    
    console.log('render: QueueRow #' + idx);
    
    return (
        <div className="queues-row">
            {row.map((person, n) => <Person key={person.name} rowIdx={idx} colIdx={n} data={person} currentPeople={currentPeople} setPeople={setPeople} />)}
        </div>
    );
}

