import "./App.css";
import Navbar from "./navbar";
import Product from "./product";
import Summary from "./summary";

function App() {
    return (
        <div>
            <Navbar />
            <main className="main">
                <Product />
                <Summary />
            </main>
        </div>
    );
}

export default App;
