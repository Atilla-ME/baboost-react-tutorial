import React from 'react'

function Content() {
    

    let cities = ['İstanbul','Havana','Tahran','Paris','Bakü'];

    return (
        <>
            {
                cities.map((item,key) => (<li>{item}</li>))
            }
        </>
    )
}

export default Content
