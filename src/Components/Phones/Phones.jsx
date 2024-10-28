import axios from "axios";
import { useEffect, useState } from "react";
// import { PiPeace } from "react-icons/pi";
import { BarChart, Bar, XAxis,YAxis, Tooltip } from 'recharts';
import { DNA } from 'react-loader-spinner'

const Phones = () => {

    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setphones(data.data))


        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map(phone => {
                const obj = {
                    name:phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phonesWithFakeData);
            setPhones(phonesWithFakeData)
            setLoading(false)
        })
    },[])

    return (
        <div>
        {loading && <div className="w-96 h-80 ">
            <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            /></div>}

            <h2 className="text-4xl">Phones: {phones.length}</h2>
            <BarChart width={950} height={340} data={phones}>
            <Bar dataKey="price" fill="#8884d8"/>
            <XAxis dataKey="name" />
            <YAxis dataKey="price" />
            <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;