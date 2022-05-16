import React from 'react';

const InfoCard = ({ info }) => {
    return (
        <div className={`card lg:card-side ${info.bgClass} shadow-xl`}>
  <figure className='pl-6'><img src={info.img} alt=""/></figure>
  <div className="card-body text-white">
    <h2 className="card-title">{info.title}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
  </div>
</div>
    );
};

export default InfoCard;