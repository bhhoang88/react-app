import { Button } from '@material-tailwind/react';
import React from 'react'
import { Link } from 'react-router-dom'

const brands = [
    {
        name: 'LIQUI MOLY',
        image: '/img/home_collection_img1.png',
        description: 'Dầu nhớt, Phụ gia cao cấp Xuất xứ Đức',
        url: '/collections/liquimoly'
    },
    {
        name: 'AISIN',
        image: '/img/home_collection_img2.png',
        description: 'Dầu động cơ, Dầu hộp số, Nước mát Thương hiệu Nhật Bản, thuộc Tập đoàn TOYOTA',
        url: '/collections/aisin'
    },
    {
        name: 'FURIO',
        image: '/img/home_collection_img3.png',
        description: 'Dầu động cơ xăng và Dầu động cơ Diesel',
        url: '/collections/furio'
    },
    {
        name: 'SELIG',
        image: '/img/home_collection_img4.png',
        description: 'Nước mát động cơ',
        url: '/collections/selig'
    },
];

const Section1 = () => {
    return (
        <section className='brand-section pt-12'>
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    {brands.map((brand, index) => (
                        <div key={index} className="col-span-full md:col-span-6">
                            <Link to={brand.url} className='brand-item flex items-center gap-6 zoom-img'>
                                <picture className='img flex-auto w-1/2'>
                                    <source srcSet={brand.image} type="image/png" />
                                    <img src={brand.image} alt="" />
                                </picture>
                                <div className="brand-infor flex flex-col items-center flex-auto w-1/2 gap-4">
                                    <h2 className='text-2xl font-semibold text-black'>{brand.name}</h2>
                                    <p className='text-sm font-light text-center mb-auto'>
                                        {brand.description}
                                    </p>
                                    <Button placeholder={undefined} className='btn btn-view-more'>Xem Thêm</Button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Section1;