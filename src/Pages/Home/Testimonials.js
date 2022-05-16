import React from 'react';
import quote from '../../assets/icons/quote.svg';
import person1 from '../../assets/images/people1.png';
import person2 from '../../assets/images/people2.png';
import person3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            description: '',
            image: person1,
            location : "Dhaka"
        },
        {
            _id: 2,
            name: 'Winson Herry',
            description: '',
            image: person2,
            location : "Dhaka"
        },
        {
            _id: 3,
            name: 'Winson Herry',
            description: '',
            image: person3,
            location : "Dhaka"
        },
    ]
    return (
        <section>
            <div className='flex justify-between'>
                <div>
                    <h3 className="text-xl text-primary font-bold">Testimonials</h3>
                    <h2 className="text-3xl">What Our Patients Say</h2>
                </div>
                <img src={quote} className='w-24 lg:w-48' alt="" />
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;