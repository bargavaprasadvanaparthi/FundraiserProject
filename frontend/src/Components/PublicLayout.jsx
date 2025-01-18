import React from 'react';
import { Outlet } from 'react-router-dom';
// import '../Styling/PublicLayout.css';

const PublicLayout = () => {
    return (
        <div id="public-layout">
            <main className="public-main">
                <Outlet />
            </main>
        </div>
    );
};

export default PublicLayout;
