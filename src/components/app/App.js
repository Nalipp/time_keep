import React from 'react';
import CategoriesList from '../categories/list';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        boxSizing: 'border-box',
        padding: '1em',
      }}>
        <Header />
        <CategoriesList />
        <Footer />
      </div>
    );
  }
}

export default App;
