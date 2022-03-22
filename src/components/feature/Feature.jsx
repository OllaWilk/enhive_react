import React from 'react';
import './feature.scss';

const Feature = ({title, text}) => {
  return (
    <div className="feautres-container__feature">
      <div className="features-container_feature_title">
        <div />
        <h3>
          {title}
        </h3>
      </div>
      <div className="features-container_feature-text">
        {text}
      </div>
    </div>
  )
}

export default Feature