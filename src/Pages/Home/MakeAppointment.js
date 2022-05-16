import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
       <section style={{
           background : `url(${appointment})`
       }} className='flex jsutify-center items-center my-28'>
           <div className='flex-1 hidden lg:block'>
               <img className='mt-[-100px]' src={doctor} alt="" />
           </div>
           <div className='flex-1 p-6'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make An Appointment</h2>
                <p className='text-white my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint eaque blanditiis laborum labore perferendis, dolores voluptatum! Maxime facilis in veniam cum quia necessitatibus eveniet, odio fuga vitae soluta culpa harum placeat, ipsum fugiat labore suscipit consequuntur atque, magni saepe.</p>
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
           </div>
       </section>
    );
};

export default MakeAppointment;