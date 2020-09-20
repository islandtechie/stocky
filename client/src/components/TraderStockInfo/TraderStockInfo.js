import React from 'react';
import { useStock } from '../../context/stock';

const TraderStockInfo = ( props ) => {
    const { stockInfo } = useStock();

    return (
        <div>
            {stockInfo}
        </div>
    )
}

export default TraderStockInfo;
