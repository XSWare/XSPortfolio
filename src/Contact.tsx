import NavBar from './components/NavBar';

function Contact() {
    return (
        <>
            <NavBar isSPA={true} />
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Contact Page</h1>
                <p>This is a dummy contact page.</p>
            </div>
        </>
    );
}

export default Contact;