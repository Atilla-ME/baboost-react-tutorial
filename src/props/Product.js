import React from 'react'
import ProductDetail from './ProductDetail'
import ProductHeader from './ProductHeader'



//prop la bir obje gidebilir, metinsel değer gidebilir, numeric değer gidebilir, array gidebilir,
function Product() {

    let productdetail = {
        name:'IPhone',
        price:10000,
        ozellikler:['Suya dayanıklılık','x px kamera','şarj aleti paralı']
    };


    const addCart = () => {

        alert('Ürün sepete eklendi! ')

    }

    return (
        <>

            {/* <ProductHeader title='IPhone' description='lorem morem ipsum mipsum'></ProductHeader> */}

            <ProductHeader product={productdetail}></ProductHeader>
            <ProductDetail ozellikler={productdetail.ozellikler} add={addCart}></ProductDetail>
        </>
    )
}

export default Product
