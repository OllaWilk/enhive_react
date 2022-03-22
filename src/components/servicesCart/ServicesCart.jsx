import React from 'react';

import './servicesCart.scss';
import { data } from '../../data';


const ServicesCart = () => {

    const {services} = data;

  return (
    <>
        {services.map((service) => (
            <div class="projects-wrap">
                <div className='icon-wrap'>
                    {service.svg}
                </div>
                <div class="projects">
                    <h4>{service.title}</h4>
                    <p>{service.text}</p>
                </div>
            </div>
        ))}
    </>
  )
} 

export default ServicesCart