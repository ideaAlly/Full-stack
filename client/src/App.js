import LoginPage from './components/LoginPage/LoginPage';
import './components/LoginPage/LoginPage.css';


// function App() {
//   return (
//     <div className="App">
//       <LoginPage/>
//     </div>
    
//   );
// }

// export default App;

import React from "react";

import NavBar from "./components/HomePage/Navbar";
// import Herosection from "./components/HomePage/Herosection";
import Appsection from "./components/HomePage/Apps";
import Cardsection from "./components/HomePage/Cardsection";
import Footer from "./components/HomePage/Footer";
import './components/HomePage/App.css';
import './components/HomePage/Card.css';
import './components/HomePage/effect.css';
import './components/HomePage/index.css';
import './components/HomePage/Nav.css';
import './components/HomePage/style.css';


const App = () => {
    return(
        <div>
            {/* <LoginPage/> */}
            <NavBar />
            {/* <Herosection /> */}
            <Appsection></Appsection>
            <Cardsection></Cardsection>
            <Footer></Footer>
        </div>
    );
};
export default App;
