
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Button} from 'antd';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import ContainerContent from "./components/content/ContainerContent";

function App() {
  return (
    <div className="App">
        <Layout>
            <Header />
            <ContainerContent />
            <Footer name="Contact API"></Footer>
        </Layout>
    </div>
  );
}

export default App;
