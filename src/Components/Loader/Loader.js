import React from 'react';
import { Bars } from 'react-loader-spinner';

const ProgressBar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
            <Bars type="Puff" color="#00BFFF" height={100} width={100} />
        </div>
    );
};

export default ProgressBar;
