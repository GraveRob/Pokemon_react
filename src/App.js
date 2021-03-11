import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";


const App = () => {
  return (
      <>
        <div className="App">
            <Header
            title = "This is title"
            descr = "This is description"
            />
            <Layout
            title = "First layout"
            descr = "This is a first one"
            urlBg = "./bg3.jpg"
            />
            <Layout
            title = "First layout"
            descr = "This is a first one"
            colorBg = "#90d441"
            />
            <Layout
            title = "First layout"
            descr = "This is a first one"
            urlBg = "./bg3.jpg"
            />
            <Footer/>
        </div>
      </>
  );
}

export default App;
