import React from 'react';
import { useStock } from '../../context/stock';

const TraderStockInfo = ( props ) => {
    const { stocks } = useStock();

    console.log(stocks.name);

    return (
        <div>
            {/* {stocks} */}
        </div>
    )
}

export default TraderStockInfo;
