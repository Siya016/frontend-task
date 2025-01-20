


'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => setIsCollapsed(!isCollapsed);

  const adjustPageSize = () => {
    const width = window.innerWidth;
    const layoutElement = document.getElementById('layout');

    if (layoutElement) {
      layoutElement.style.transform = 'none';

      if (width >= 992 && width <= 1600) {
        layoutElement.style.transform = 'scale(0.9)';
      } else if (width >= 700 && width <= 767) {
        layoutElement.style.transform = 'scale(0.8)';
      } else if (width >= 600 && width <= 700) {
        layoutElement.style.transform = 'scale(0.75)';
      } else if (width <= 600) {
        layoutElement.style.transform = 'scale(0.5)';
      }
    }
  };

  useEffect(() => {
    adjustPageSize();
    window.addEventListener('resize', adjustPageSize);
    return () => window.removeEventListener('resize', adjustPageSize);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Sticky Layout Example</title>
      </head>
      <body>
        {/* Navbar */}
        <Navbar />
        
        {/* Scaled Layout */}
        <div id="layout" className="layout">
          <div className="container">
            <div className={`left-menu ${isCollapsed ? 'collapsed' : ''}`}>
              <button onClick={toggleMenu}>{isCollapsed ? 'Expand' : 'Collapse'}</button>
              {!isCollapsed && (
                <ul>
                  <li>Menu Item 1</li>
                  <li>Menu Item 2</li>
                  <li>Menu Item 3</li>
                </ul>
              )}
            </div>
            <main className="main-content">{children}</main>
            <div className="right-panel">
              <h3>Right Panel</h3>
              <p>Additional information can go here.</p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="footer">
          <p>Footer Content</p>
        </footer>
      </body>
    </html>
  );
}
