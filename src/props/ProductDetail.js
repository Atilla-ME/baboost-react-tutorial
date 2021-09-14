import React from 'react'

function ProductDetail(props) {


    

    return (
        <>

            <h2>Özellikler</h2>

            <ul>
                {
                    props.ozellikler.map((item, key) => (<li key={key}>{item}</li>))
                }
            </ul>

            <button onClick={() => props.add()}>Sepete Ekle</button>
        </>
    )
}

export default ProductDetail
