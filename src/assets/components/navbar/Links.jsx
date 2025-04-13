import React from 'react';

const Links = ({rounter}) => {
   const {name,path, } = rounter;
    return (
        <div>
            <li  className='list-none mx-5' ><a href={path}>{name}</a></li>
        </div>
    );
};

export default Links;