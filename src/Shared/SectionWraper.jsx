import React from 'react';

const SectionWraper = ({children,color=''}) => {
    return (
        <div className={`rounded-[20px] bg-white ${color}`}>
            {children}
        </div>
    );
};

export default SectionWraper;