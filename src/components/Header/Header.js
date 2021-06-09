import React from 'react';

const Header = () => {
    return (
        <header className="header flex rounded items-center justify-center py-3 xl:mx-20 bg-green-400" >
            <div className="brand-name">
                <h1 className="font-mono text-3xl" > <strong> Stock Images </strong> </h1>
            </div>
        </header>
    );
};

export default Header;