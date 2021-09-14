import React from 'react'

function JsxEventSample() {

    let name = 'Çağatay';

    const hello = () => {
        alert(' Hello Camel! ');
    }


    return (
        <>
            <span>{name}</span>

            {/* <button onClick={hello}>Merhaba!</button> */}
            <hr></hr>

            <button onClick={() => hello()}>Merhaba !</button>
        </>
    )
}

export default JsxEventSample
