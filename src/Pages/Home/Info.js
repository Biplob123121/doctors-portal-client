import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    const infos = [
        {
            _id : 1,
            title : 'Opening Hours',
            description : '',
            img : clock,
            bgClass : 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            _id : 2,
            title : 'Visit our location',
            description : '',
            img : marker,
            bgClass : 'bg-accent'
        },
        {
            _id : 3,
            title : 'Contact us Now',
            description : '',
            img : phone,
            bgClass : 'bg-gradient-to-r from-secondary to-primary'
        }
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                infos.map(info =><InfoCard
                key={info._id}
                info ={info}
                ></InfoCard>)
            }
        </div>
    );
};

export default Info;