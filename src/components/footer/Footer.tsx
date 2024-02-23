import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaLocationDot, FaPhone, FaFax, FaEnvelope } from "react-icons/fa6"
import { FaFacebookF, FaInstagram, FaYoutube, FaAngleUp } from "react-icons/fa";
import { Input } from "@material-tailwind/react";

const Footer = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <footer>
                <div className='footer-top-subscribe pt-8 pb-5'>
                    <div className="container">
                        <div className="title text-center mb-8 text-sm font-light">
                            Nhận 10% giảm giá đơn hàng đầu tiên
                        </div>
                        <div className="subscribe">
                            <form action="" method="port" className='wrap-form grid grid-cols-12 gap-4 w-full md:w-10/12 mx-auto'>
                                <div className="form-group flex items-start flex-col gap-2 w-full col-span-full md:col-span-3">
                                    <label htmlFor="" className="form-label pl-4 text-base font-semibold">
                                        Họ và tên
                                    </label>
                                    <Input size="lg" label="Họ và tên" crossOrigin={undefined} color="indigo" className='bg-white border-transparent' />
                                </div>
                                <div className="form-group flex items-start flex-col gap-2 w-full col-span-full md:col-span-3">
                                    <label htmlFor="" className="form-label pl-4 text-base font-semibold">
                                        Số điện thoại
                                    </label>
                                    <Input size="lg" label="Số điện thoại" crossOrigin={undefined} color="indigo" className='bg-white border-transparent' />
                                </div>
                                <div className="form-group flex items-start flex-col gap-2 w-full col-span-full md:col-span-3">
                                    <label htmlFor="" className="form-label pl-4 text-base font-semibold">
                                        Email
                                    </label>
                                    <Input size="lg" label="Email" crossOrigin={undefined} color="indigo" className='bg-white border-transparent' />
                                </div>
                                <button className='btn btn-default bg-yellow-400 w-full mt-auto col-span-full md:col-span-3'>Gửi</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="ft-main py-14">
                    <div className="container">
                        <div className="grid grid-cols-12 gap-10">
                            <div className="col-span-6 md:col-span-3 flex flex-col gap-6 md:gap-8">
                                <div className="img-block">
                                    <Link to={''} className='text-6xl font-light text-white'>
                                        {/* <img src="/logo.png" alt="" /> */}
                                        LOGO
                                    </Link>
                                </div>
                                <div className="ft-content">
                                    <ul className='flex flex-col gap-4'>
                                        <li className='flex items-center gap-4'>
                                            <p className='text-base md:text-lg font-light text-white'>CÔNG TY TNHH KỸ THUẬT HIỆP THÀNH</p>
                                        </li>
                                        <li className='flex items-center gap-4'>
                                            <p className='text-sm font-light text-white'>GPKD số: 0305987207 cấp ngày 24/11/2014 tại Sở Kế Hoạch Đầu Tư TPHCM</p>
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <div className='min-w-4 min-h-4'>
                                                <FaLocationDot className=' text-white' />
                                            </div>
                                            <p className='text-sm font-light text-white'>Số 77, đường Ký Con, phường Nguyễn Thái Bình, Quận 1, TP.HCM</p>
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <div className='min-w-4 min-h-4'>
                                                <FaPhone className=' text-white' />
                                            </div>
                                            <p className='text-sm font-light text-white'>(84)838212977</p>
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <div className='min-w-4 min-h-4'>
                                                <FaFax className=' text-white' />
                                            </div>
                                            <p className='text-sm font-light text-white'>(84)839152030</p>
                                        </li>
                                        <li className='flex items-center gap-2'>
                                            <div className='min-w-4 min-h-4'>
                                                <FaEnvelope className=' text-white' />
                                            </div>
                                            <p className='text-sm font-light text-white'>sales@hiepthanhvn.vn</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-6 md:col-span-3 flex flex-col gap-8">
                                <div className="ft-header">
                                    <p className='text-base md:text-xl text-white font-bold uppercase'>Hỗ trợ Khách hàng</p>
                                </div>
                                <div className="ft-content">
                                    <ul className='flex flex-col gap-4'>
                                        <li>
                                            <Link to={''} className='text-sm font-light text-white'>Hướng dẫn thanh toán</Link>
                                        </li>
                                        <li>
                                            <Link to={''} className='text-sm font-light text-white'>Hướng dẫn mua hàng</Link>
                                        </li>
                                        <li>
                                            <Link to={''} className='text-sm font-light text-white'>Chính sách đổi trả</Link>
                                        </li>
                                        <li>
                                            <Link to={''} className='text-sm font-light text-white'>Chính sách bảo mật</Link>
                                        </li>
                                        <li>
                                            <Link to={''} className='text-sm font-light text-white'>Chính sách kiểm hàng</Link>
                                        </li>
                                        <li>
                                            <Link to={''} className='text-sm font-light text-white'>Chính sách bảo hành</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-6 md:col-span-3 flex flex-col gap-8">
                                <div className="ft-header">
                                    <p className='text-base md:text-xl text-white font-bold uppercase'>Sản phẩm</p>
                                </div>
                                <div className="ft-content">
                                    <ul className='flex flex-col gap-4'>
                                        <li>
                                            <Link to={''} className='text-sm font-light text-white'>Phụ tùng động cơ Diesel</Link>
                                        </li>
                                        <li>
                                            <Link to={''} className='text-sm font-light text-white'>Tăng áp</Link>
                                        </li>
                                        <li>
                                            <Link to={''} className='text-sm font-light text-white'>Phụ tùng hệ thống nhiên liệu</Link>
                                        </li>
                                        <li>
                                            <Link to={''} className='text-sm font-light text-white'>Lọc các loại</Link>
                                        </li>
                                        <li>
                                            <Link to={''} className='text-sm font-light text-white'>Phụ tùng khác</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-6 md:col-span-3 flex flex-col gap-8">
                                <div className="ft-header">
                                    <p className='text-base md:text-xl text-white font-bold uppercase'>kết nối với Hiệp thành</p>
                                </div>
                                <div className="ft-content">
                                    <Link to="">Share</Link>
                                    <ul className='flex gap-4 mt-4'>
                                        <li>
                                            <Link to={''} className='text-lg font-bold text-blue-500 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center'>
                                                <FaFacebookF />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={''} className='text-lg font-bold text-red-600 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center'>
                                                <FaYoutube />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={''} className='text-lg font-bold text-red-600 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center'>
                                                <FaInstagram />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ft-coppyright bg-black text-center py-2 text-white font-light">
                    &copy; 2024 All rights reserved. Made with love by <Link to="https://www.creative-tim.com" target="_blank" className="text-white text-sm hover:text-yellow-600 hover:underline">Awesome Team.
                    </Link>
                </div>
            </footer>
            {showBackToTop && (
                <div className="back-to-top flex items-center justify-center" onClick={scrollToTop}>
                    <FaAngleUp />
                </div>
            )}
        </>
    )
}

export default Footer
