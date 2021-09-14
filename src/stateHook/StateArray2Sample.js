import React, { useState } from 'react'

function StateArray2Sample() {

    let countryData = ['Turkey','Spain','Iran','Colombia'];

    const [countries, setCountries] = useState(countryData);

    //herhangi bir li ye tıklandığında o li silinsin!

    const removeCountry = (key) => {


       countries.splice(key,1);
       setCountries([...countries]);

    }

    return (
        <>
            
            <ul>
                {
                    countries.map((item,key) => <li key={key} onClick={() => removeCountry(key)}>{item}</li>)
                }
            </ul>
        </>
    )
}

export default StateArray2Sample
