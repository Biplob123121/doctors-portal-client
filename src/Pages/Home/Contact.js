import React from 'react';
import bgImage from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section style={{
            background: `url(${bgImage})`
        }} className='my-28'>
            <div className=' w-1/2 mx-auto py-8 text-center'>
                <div>
                <h3 className='text-xl font-bold text-primary uppercase'>Contact us</h3>
                <h2 className="text-3xl text-white">Stay connected with Us</h2>
                </div>
                <form className='block'>
                    <input type="text" name='name' placeholder="Your Name" className="input w-full max-w-lg my-4" />
                    <input type="email" name='email' placeholder="Email" className="input w-full max-w-lg" />
                    <textarea type="email" name='email' placeholder="Description" className="input w-full my-4 max-w-lg" />
                    <br />
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Submit </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;