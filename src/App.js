import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import {originals,action,horror} from "./url"
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";


function App() {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <RowPost url={originals} title="Netflix Orginals" />
            <RowPost url={action} title="Action" isSmall/>
            <RowPost url={horror} title="Horror" isSmall/>
        </div>
    );
}

export default App;
