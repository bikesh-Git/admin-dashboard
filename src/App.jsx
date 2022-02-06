import TopBar from './components/Topbar'
import Styled from 'styled-components'
import Sidebar from './components/Sidebar'
import Home from './Pages/Home'
import Users from './Pages/Users'
import User from './Pages/User'
import NewUser from './Pages/NewUser'
import ProductList from './Pages/ProductList'
import Product from './Pages/product'
import NewProduct from './Pages/NewProduct'
import Login from './Pages/Login'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'


const Wrapper = Styled.div`
  display:flex;
`


function App() {
  const Admin =sessionStorage.getItem('user') ?  JSON.parse(sessionStorage.getItem('user')).isAdmin  : null
 console.log("admin token",Admin)
  return (
    <Router>
     
     {Admin ? 
     <>
     <TopBar /> 
     <Wrapper>
      <Sidebar/>
        <Routes>
         <Route exact path="/" element={ <Home />} />

         <Route path="/users" element={ <Users />} />
         <Route path="/user/:userId" element={ <User />} />
         <Route path="/newUser" element={ <NewUser />} />

         <Route path="/products" element={ <ProductList />} />
         <Route path="/product/:productId" element={ <Product />} />
         <Route path="/newproduct" element={ <NewProduct />} />
        </Routes>
        </Wrapper>
     </>
     :
     <Routes>
     <Route exact path="/" element={ <Login />} />
     </Routes>
    
        }
    </Router>
  );
}

export default App;
