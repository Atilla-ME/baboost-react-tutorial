import React from 'react'

function Mapsample() {

    let metalGroups = [
        {
            name:'Iron Maiden',
            country:'England',
            year:1975
        },
        {
            name:'Gojira',
            country:'France',
            year:1996
        },
        {
            name:'Parkway Drive',
            country:'USA',
            year:2003

        },
        {
            name:'Rammstein',
            country:'Deutchland',
            year:1994
        }
    ]

    // Yıl 2000 üstündeyse renk kırmızı olsun

    return (
        <div>
            <ul>
                {
                    metalGroups.map((item,key) => 
                        
                        item.year > 2000 ? (<li style={{color:'tomato'}}>{item.name}</li>) : (<li>{item.name}</li>) 

                    )
                }
            </ul>
            
        </div>
    )
}

export default Mapsample
