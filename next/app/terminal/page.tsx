import Link from 'next/link';
import '../../styles/terminal.css';
import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="terminal">
            <div className="terminal-content">
                <h1>welcome to the terminal :)</h1>
                <h2>it is under construction...</h2>
                <div className="temporary">
                    <Link href="/">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Page;