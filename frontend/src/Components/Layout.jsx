// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
// import "../Styling/Layout.css";

// const Layout = () => {
//     return (
//         <div id="layout-container">
//             <Header />
//             <main id="layout-main">
//                 <Outlet /> {/* Child routes (e.g., Donate) render here */}
//             </main>
//             <Footer />
//         </div>
//     );
// };

// export default Layout;



import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import "../Styling/Layout.css";

const Layout = () => {
  const [showDefaultContent, setShowDefaultContent] = useState(true);
  const location = useLocation();

  // Hide default content when the location changes
  React.useEffect(() => {
    if (location.pathname !== '/') {
      setShowDefaultContent(false);
    } else {
      setShowDefaultContent(true);
    }
  }, [location]);

  return (
    <div id="layout-container">
      <Header />
      <main id="layout-main">
        {showDefaultContent ? (
          <div className="default-content">
            <h1>Welcome to CharityFund</h1>
            <p>CharityFund is dedicated to making a difference in the lives of those in need. Your contributions help us provide essential services and support to communities around the world.</p>
            <p>Join us in our mission to create a better future for everyone. Every donation counts and makes a significant impact.</p>
          </div>
        ) : (
          <Outlet /> // Child routes (e.g., Donate) render here
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;