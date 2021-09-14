import React, { useState } from 'react'

function StateSample() {

    console.log('State sample component render!!');

    //Dizideki ilk parametre tanımladığın değişken. İkinci parametre bunu değiştirecek TEK FONKSİYON. use state içerindeki değer ise sizin değişkeninizin default değeri
    const [country, setCountry] = useState('USA');
    const [sayac, setSayac] = useState(0);


    return (
        <>
            <h1>{country}</h1>
            <button onClick={() => setCountry('Turkey')}>Change Country</button>
            <hr></hr>

            <h1>{sayac}</h1>
            <button onClick={() => setSayac(sayac + 1)}>Change Sayac</button>
        </>
    )
}

export default StateSample
