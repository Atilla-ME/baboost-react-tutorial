import React, { useState } from 'react'

function StateArraySample() {

    const [dates, setDates] = useState([]);


    const add = () => {
        
        const d = new Date();
        setDates([...dates, d.toLocaleTimeString()]);

    }

    return (
        <>
            <button onClick={() => add()}>Add Date</button>
            <ul>
                {
                    dates.map((item,key) => (<li>{item}</li>))
                }
            </ul>
        </>
    )
}

export default StateArraySample
