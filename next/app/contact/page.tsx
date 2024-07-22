import React from 'react';
import '../../styles/globals.css';
import MainNavBar from '../../components/nav/navbars';

const Contact: React.FC = () => {
    return (
        <div className="page">
            <MainNavBar />
            <div className="inner-page">
                <div className="header">
                    <h1>
                        Contacts:
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Contact;