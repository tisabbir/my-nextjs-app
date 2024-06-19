import { serverHooks } from 'next/dist/server/app-render/entry-base';
import React from 'react';

const DynamicRoute = ({params, searchParams}) => {
    console.log(searchParams);
    return (
        <div>
            <h1>This is dynamic page {params.id} </h1>
            <h1>Searched By : {searchParams.category} & {searchParams.price}</h1>
        </div>
    );
};

export default DynamicRoute;