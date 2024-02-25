import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";


const Section2 = () => {
    const data = [
        {
            label: "CHỔI GẠT MƯA",
            value: "html",
            desc: `It really matters and then like it really doesn't matter.
            What matters is the people who are sparked by it. And the people 
            who are like offended by it, it doesn't matter.`,
        },
        {
            label: "DẦU ĐỘNG CƠ",
            value: "react",
            desc: `Because it's about motivating the doers. Because I'm here
            to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "PHỤ GIA",
            value: "vue",
            desc: `We're not always in the position that we want to be at.
            We're constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.`,
        },
        {
            label: "NƯỚC MÁT",
            value: "angular",
            desc: `Because it's about motivating the doers. Because I'm here
            to follow my dreams and inspire other people to follow their dreams, too.`,
        },
    ];
    return (
        <section className='home-featured-product'>
            <div className="container">
                <h1 className='text-2xl mb-8 font-bold text-black text-center primary-title'>SẢN PHẨM NỔI BẬT</h1>
                <Tabs id="custom-animation" value="html">
                    <TabsHeader placeholder={undefined}>
                        {data.map(({ label, value }) => (
                            <Tab key={value} value={value} placeholder={undefined}>
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody
                        animate={{
                            initial: { y: 250 },
                            mount: { y: 0 },
                            unmount: { y: 250 },
                        }} placeholder={undefined}                    >
                        {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                {desc}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </section>
    )
}

export default Section2
