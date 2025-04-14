import React, { use } from 'react';
import PricingCart from './PricingCart';
import DaysiPricingCart from '../daysiPricingCart/daysiPricingCart';

const PricingData = ({pricingFechData}) => {

const pricinguse = use(pricingFechData)
 

    return (
        <div>

            <h2>Get out member ship </h2>
            <div className='grid md:grid-cols-3 gap-4's>
                {/* {
                    pricinguse.map(pricing=>
                        <PricingCart
                        key={pricing.id}
                        pricing={pricing}
                        ></PricingCart>
                    )
                } */}

                {
                    pricinguse.map(pricing =>
                        <DaysiPricingCart
                        key={pricing.id}
                        pricing={pricing}
                        ></DaysiPricingCart>
                    )
                }
            </div>
           
        </div>
    );
};

export default PricingData;