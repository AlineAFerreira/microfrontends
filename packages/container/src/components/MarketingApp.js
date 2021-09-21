import { Mount } from 'makerting/MarketingApp'
import React, { useEffect, useRef } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(()=> {
        Mount(ref.current);
    });

    return <div ref={ref} />;
}