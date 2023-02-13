import React, { memo } from 'react';

const Content = ({onClinck}) => {
    console.log('re-render');
    return (
        <div>
            <button onClick={onClinck} >CLick</button>
        </div>
    );
};

export default memo(Content) ;