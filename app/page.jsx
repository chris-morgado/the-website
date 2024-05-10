import Head from 'next/head';
import '../styles/globals.css';

export default function Home() {
    return (
        <div className="terminal">
            <Head>
                <title>Homepage</title>
                <meta name="description" content="A retro terminal-themed personal website" />
            </Head>
            <main className="terminal-content">
                <h1>test so far</h1>
                <p>I'm christian, and this is my personal website :)</p>
                <nav>
                    <a href="#projects">Projects</a> | <a href="#about">About</a> | <a href="#contact">Contact</a> | <a href="#contact">Poop</a>
                </nav>
            </main>
        </div>
    );
}