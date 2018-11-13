import React from 'react';
import CategoriesList from 'components/categories/list';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import 'components/app/App.css';

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
