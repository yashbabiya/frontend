import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import MyTools from './pages/MyTools';
import AddProduct from './pages/AddProduct';
import EditProfile from './pages/EditProfile';
import Queries from './pages/Queries';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SendEmail from './pages/SendEmail';
import ChangePassword from './pages/ChangePassword';
import Product from './pages/Product';
import EditProduct from './pages/EditProduct';
import ErrorPage from "./pages/404";
import AssignProduct from './pages/AssignProduct';
import OTP from "./pages/OTP";
import VerifyEmail from './pages/VerifyEmail';

function App() {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="App">
      <Routes>

      <Route exact path="/" element={<><Header /><Home /><Footer /></>} />
      <Route exact path="/explore" element={<><Header /><Explore /><Footer /></>} />
      <Route exact path="/product/:id" element={<><Header /><Product /><Footer /></>} />

        
        {auth.isLoggedIn ? (
          <>
            <Route exact path="/mytools" element={<><Header /><MyTools /><Footer /></>} />
            <Route exact path="/addProduct" element={<><Header /><AddProduct /><Footer /></>} />
            <Route exact path="/editProfile" element={<><Header /><EditProfile /><Footer /></>} />
            <Route exact path="/editProduct" element={<><Header /><EditProduct /><Footer /></>} />

            <Route exact path="/queries" element={<><Header /><Queries /><Footer /></>} />
            <Route exact path="/assignproduct" element={<><Header /><AssignProduct /><Footer /></>} />
            <Route exact path="/enterOTP" element={<><Header /><OTP /><Footer /></>} />
            <Route exact path='/emailverificationpage/:token' element={<><VerifyEmail /></>} />

            
          </>
        ) : (
          <>
            <Route exact path="/login" element={<><Login /></>} />
            <Route exact path="/signup" element={<><Signup /></>} />
            <Route exact path="/sendemail" element={<><SendEmail /></>} />
            <Route exact path="/changepassword/:token" element={<><ChangePassword /></>} />

          </>
        )}

        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;
