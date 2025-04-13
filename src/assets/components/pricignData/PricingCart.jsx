import React from 'react';
import PricingFeatur from './PricingFeatur';

const PricingCart = ({pricing}) => {
 const {name, price, target,features}=pricing
    return (
        <div className='gap-4 m-4 bg-amber-500 rounded-xl border-2 border-gray-500'>
            <div className=' p-4 '>
                <h2>{ name} </h2>
                <h1>{ price}</h1>
            </div>

                <div className='bg-amber-100 text-black p-4 m-4 rounded-2xl'>
                    <h4>{target}</h4>

                    {
                        features.map(featur=><PricingFeatur featur={featur}></PricingFeatur>)
                    }
                </div>
            <div>

            </div>
        </div>
    );
};

export default PricingCart;