import { useState } from "react"

function StateErrorSample() {

    const [sayac, setSayac] = useState(0);


    // setSayac(sayac + 1)

    return (
        <>
            <h1>{sayac}</h1>
            {/* <button onClick={setSayac(sayac + 1)}>Change</button> */}
        </>
    )
}

export default StateErrorSample
