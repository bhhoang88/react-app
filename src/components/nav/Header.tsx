import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaPhoneAlt, FaEnvelope, FaSearch } from "react-icons/fa";
import { FaBars } from 'react-icons/fa6';

interface SubNavItemProps {
    text: string;
}
interface MegaNavItemProps {
    title: string;
    subItems: string[];
}
const megaNavData = [
    { title: 'Động cơ Diesel', subItems: ['FP Diesel', 'Detroit Diesel', 'Cummins', 'Caterpillar', 'Komatsu', 'Johndeer'] },
    { title: 'Tăng áp', subItems: ['Tăng áp (Turbo)', 'Phụ tùng tăng áp'] },
    { title: 'Hệ thống nhiên liệu', subItems: ['Mcbee'] },
    { title: 'Lọc các loại', subItems: ['Lọc Fleetguard', 'Lọc Mann-Hummel', 'Nước làm mát & chất tẩy rửa'] },
    { title: 'Phụ tùng khác', subItems: ['Bộ khởi động điện', 'Đồng hồ - Cảm biến', 'Dây cua-roa', 'Keo các loại'] },
];
const itemNavData = [
    { title: 'giới thiệu', id: 0, link: '/about' },
    { title: 'sản phẩm', id: 1, link: '/collections' },
    { title: 'tin tức', id: 2, link: '/news' },
    { title: 'liên hệ', id: 3, link: '/contact' },
];

const Header: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const SubNavItem: React.FC<SubNavItemProps> = ({ text }) => (
        <li className="sub-item" onClick={() => setMobileMenuOpen(false)}>
            <Link to={'/collections'} className='text-black text-sm block py-2'>
                {text}
            </Link>
        </li>
    );

    const MegaNavItem: React.FC<MegaNavItemProps> = ({ title, subItems }) => (
        <li className='mega-item'>
            <h2>
                <Link to={''} className='text-black font-bold mb-4 block'>
                    {title}
                </Link>
            </h2>
            <ul className='sub-nav'>
                {subItems.map((item, index) => (
                    <SubNavItem key={index} text={item} />
                ))}
            </ul>
        </li>
    );

    return (
        <header className="bg-white w-full relative py-6 md:py-0 md:pb-[10px]">
            <div className="pl-4 pr-4 md:pl-10 lg:pl-[75px] md:pr-0 flex items-center w-full">
                <nav className="w-full">
                    <ul className="text-right header-top py-[10px] pr-4 md:pr-10 lg:pr-[75px] hidden items-center w-full gap-6 justify-end md:flex">
                        <li>
                            <Link to={'https://www.facebook.com'}>
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li>
                            <Link to={'https://www.youtube.com'}>
                                <FaYoutube />
                            </Link>
                        </li>
                        <li>
                            <Link to={'tel:(+84) 833413838'} className='flex items-center gap-2'>
                                <FaPhoneAlt />
                                (+84) 833413838
                            </Link>
                        </li>
                        <li>
                            <Link to={'mailto:sales@aspgroup.vn'} className='flex items-center gap-2'>
                                <FaEnvelope />
                                sales@aspgroup.vn
                            </Link>
                        </li>
                    </ul>
                    <div className="grid grid-cols-12 gap-auto">
                        <div className="logo col-span-6">
                            <h1 className="text-2xl font-bold">
                                <Link to="/">Trang chủ</Link>
                            </h1>
                        </div>
                        <div className="col-span-6 hd-menu flex items-center justify-end gap-6">
                            <div className="wrap-button flex md:hidden">
                                <button className='flex items-center justify-center'>
                                    <FaSearch />
                                </button>
                            </div>
                            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className='md:hidden'>
                                <FaBars />
                            </button>
                            <ul className="hidden items-center gap-6 nav-bar md:flex pr-4 md:pr-10 lg:pr-[75px]">
                                <li className='nav-item py-6 px-4'>
                                    <Link to="/" className='inline-block nav-link uppercase'>Trang chủ</Link>
                                </li>
                                {itemNavData.map((item, index) => {
                                    if (item.title === 'sản phẩm') {
                                        return (
                                            <li className='nav-item py-6 px-4 mega-hover' key={index}>
                                                <Link to={item.link} className='inline-block nav-link uppercase'>{item.title}</Link>
                                                <ul className='mega-nav grid grid-cols-5 gap-4'>
                                                    {megaNavData.map((item, index) => (
                                                        <MegaNavItem key={index} title={item.title} subItems={item.subItems} />
                                                    ))}
                                                </ul>
                                            </li>
                                        );
                                    } else {
                                        return (
                                            <li className='nav-item py-6 px-4' key={index}>
                                                <Link to={item.link} className='inline-block nav-link uppercase'>{item.title}</Link>
                                            </li>
                                        );
                                    }
                                })}
                                <li className='nav-item'>
                                    <div className="wrap-button">
                                        <button className='flex items-center justify-center'>
                                            <FaSearch />
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {isMobileMenuOpen && (
                <div className='mobile-nav'>
                    <ul className="flex text-right header-top py-[10px] flex-col items-center gap-6 justify-center w-full">
                        <li className='nav-item py-6 px-4' onClick={() => setMobileMenuOpen(false)}>
                            <Link to="/" className='inline-block nav-link uppercase'>Trang chủ</Link>
                        </li>
                        {itemNavData.map((item, index) => (
                            <li className='nav-item py-6 px-4' key={index} onClick={() => setMobileMenuOpen(false)}>
                                <Link to={item.link} className='inline-block nav-link uppercase'>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;