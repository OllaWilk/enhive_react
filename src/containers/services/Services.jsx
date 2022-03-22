import React from 'react';

import './services.scss';
import { ServicesCart, TitleSection } from '../../components';

const Services = () => {

  return (
    <section className='services container' >
        <TitleSection title="Services"/>
      <div className="services_cart_wrap">
        <ServicesCart  />
      </div>
    </section>
  )
}

export default Services