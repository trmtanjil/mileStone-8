import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatur = ({featur}) => {
    return (
        <div>
            <p className='flex p-2'><CircleCheckBig className='mr-2'></CircleCheckBig>{featur}</p>
        </div>
    );
};

export default PricingFeatur;