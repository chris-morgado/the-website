import '../styles/globals.css';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="terminal">
            <div className="terminal-content">
                <h1>LOOKING GOOD!!!</h1>
                <p>I'm Christian, and this is my personal website :)</p>
                <nav>
                    <Link href="/terminal">Terminal</Link> |  
                    <Link href="#projects">Projects</Link> |  
                    <Link href="#about">About</Link> | 
                    <Link href="#contact">Contact</Link>
                </nav>
            </div>
        </div>
    );
}
