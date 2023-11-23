import React from 'react';

const SectionWrapper = ({children,color=''}) => {
    return (
        <div className={`rounded-[20px] bg-white ${color}`}>
            {children}
        </div>
    );
};

export default SectionWrapper;