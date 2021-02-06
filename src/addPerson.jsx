import React, { useRef } from 'react';

export default function AddPerson({ currentPeople, setPeople }) {
    const inputRef = useRef();

    function handleClick() {
        const name = inputRef.current.value;
        if (!name) return;
        setPeople([...currentPeople, { name, tasks: [] }]);
    }

    console.log('render: AddPerson');

    return (
        <div>
            {'Name: '}<input type="text" ref={inputRef} />
            {' '}
            <button type="button" onClick={handleClick}>Add</button>
        </div>
    );
}

