import NavBar from './components/NavBar'
import './Home.css'

function Home() {
    return (
        <>
            <NavBar isSPA={true} />
            <div style={{ minHeight: "100vh", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                <h1>Welcome to the <img style={{display: "block", height: "60px", width: "auto", margin: "0 auto"}} src="/src/assets/logo4.png"/> homepage!</h1>
                <p>This website is currently being built, so some things may be missing or not work, but feel free to check out what is already there!</p>
                <p>The source code for this website can be found at <a href='https://github.com/XSWare/XSPortfolio'>https://github.com/XSWare/XSPortfolio</a>.</p>
            </div>
        </>
    )
}

export default Home
