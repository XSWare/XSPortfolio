import NavBar from './components/NavBar';

function Contact() {
    return (
        <>
            <NavBar isSPA={true} />
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Contact Page</h1>
                <a href="mailto:xsware@outlook.com">Email</a><br />
                <a href='https://github.com/xsware'>GitHub</a><br />
                <a href='https://www.linkedin.com/in/david-hofer-613540187/'>Linkedin</a>
            </div>
        </>
    );
}

export default Contact;