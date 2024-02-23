import React from 'react'

const ProductDetail = () => {
    const products: any[] = [
        { id: 1, name: 'pro1' }
    ];
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProductDetail
