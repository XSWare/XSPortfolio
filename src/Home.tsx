import NavBar from './components/NavBar'
import './Home.css'

function Home() {
    return (
        <>
            <NavBar isSPA={true} />
            <div style={{ minHeight: "100vh", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                <h1>Welcome to the xsware homepage!</h1>
                <pre>This website is currently being built, so some things may be missing or not work, but feel free to check out what is already there!</pre>
            </div>
        </>
    )
}

export default Home
