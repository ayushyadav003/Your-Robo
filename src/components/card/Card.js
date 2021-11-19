import React from 'react';

const Card = ({ name }) => {
  return (
    <div className='tc grow bg-transparent br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${name}}?size=200x200`} />
      <div>
        <p className="white">{name}</p>
      </div>
    </div>
  );
}

export default Card;