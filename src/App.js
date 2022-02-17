import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Footer from './components/Footer'
import Gallery from './components/pages/Gallery';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <div className="div" style={{overflowX: 'hidden'}}>
    <Switch>
      <Route path = '/' exact component = {Home}></Route>
      <Route path = '/about' exact component = {About}></Route>
      <Route path = '/services' exact component = {Services}></Route>
      <Route path = '/blog' exact component = {Home}></Route>
      <Route path = '/gallery' exact component = {Gallery}></Route>
    </Switch>
    </div>
    </Router>
   
    <Footer/>
    
    </>

  );
}

export default App;
