import React, { useState } from 'react'
import Header from '../section/Header'
import Footer from '../section/Footer'
import ServiceCard from '../components/ServicesCard'
import { services } from '../data/data'

const Service = () => {
    const [searchField, setSearchField] = useState("");


    function getValue(e) {
        setSearchField(e.target.value)
        console.log(searchField)
    }

    // filter
    const data=services.filter((item) => {
        return item.title.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
        <div className="min-h-screen w-full space-y-10 bg-[#fffbeb]">
            <Header />
            <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className='flex flex-row gap-5 mb-10'>
                    <input type="text" value={searchField} onChange={(e) => getValue(e)} className='py-3 px-4 border border-gray-50 rounded-lg' />
                    <button className='border border-orange-700 text-orange-700 py-4 px-6 rounded-lg'>clear</button>
                </div>
                <div className="flex flex-row gap-8 flex-wrap">
                    {
                        data.map(item => {
                            return <ServiceCard item={item} />
                        })
                    }

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Service
