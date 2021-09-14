import React from 'react'

function ProductHeader(props) {



    return (
        <>


            <h1>{props.product?.name}</h1>
            <p>{props.product?.price?.toFixed(2)}</p>

            {/* <h1>{props.title}</h1>
            <p>{props.description}</p> */}

        </>
    )
}

export default ProductHeader
