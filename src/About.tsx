import NavBar from './components/NavBar';

function About() {
    return (
        <>
            <NavBar />
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>About Page</h1>
                <p>This is a dummy about page.</p>
            </div>
        </>
    );
}

export default About;