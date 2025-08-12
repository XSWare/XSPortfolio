import NavBar from './components/NavBar'
import './Home.css'

function Home() {
    return (
        <>
            <NavBar />
            <div style={{ minHeight: "100vh", justifyContent: "center", alignItems: "center", display: "flex" }}>
                <h1>Welcome to the xsware homepage!</h1>
            </div>
        </>
    )
}

export default Home
