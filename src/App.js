import React from 'react';
import Container from './components/Container';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <ProductsList />
        </Container>
        <Cart />
      </main>
    </>
  );
}

export default App;
