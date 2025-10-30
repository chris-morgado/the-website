import Link from 'next/link';
import '../../styles/terminal.css';
import React from 'react';

const Terminal: React.FC = () => {
    return (
        <div className="terminal">
            <div className="terminal-content">
                <h2>welcome to the terminal :)</h2>
                <h2>it is currently under construction...</h2>
                {/* TODO: Add back button */}
                <div className="temporary">
                    <Link href="/">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Terminal;