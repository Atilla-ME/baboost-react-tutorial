import React from 'react'

function IfElseSample() {

    let onlineDurum = false;
    let user = {
        name: 'Çağatay'
    }


    return (
        <>
            {
                // onlineDurum == true ? (<span>Kullanıcı Online!</span>) : (<></>)
                onlineDurum == true ? (<span>Kullanıcı Online!</span>) : (<span>Kullanıcı offline!</span>)
            }
            <hr></hr>
            {
                user && <span>Bu hayatın heyecanı meyecanı yok ! </span>
            }
        </>
    )
}

export default IfElseSample
