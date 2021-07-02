import { Container } from 'react-bootstrap'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header1 from './components/Header1'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
function App() {
  return (
    <Router>
      <main className="py-3">
        <Header1 />
        <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/product/:id' component={ProductScreen}  />
            <Route path='/cart/:id?' component={CartScreen}  />
        </Container>        
      </main>
      <Footer />
    </Router>
  );
}

export default App;
