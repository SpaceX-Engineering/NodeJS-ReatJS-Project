import './App.css';
import {createBrowserRouter,RouterProvider,} from 'react-router-dom';
import GetAllProducts from './pages/GetAllProducts';
import LoginForm from './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';
import AddProduct from './pages/AddProduct';
import ErrorPage from './pages/Error';
import RootLayout from './pages/Root';

// function App() {
//   const styles = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   };
//   return (
//     <div style={styles}>
//       <h2><br/></h2>
//       {/* <SignUpForm/> */}
//       {/* <LoginForm/> */}
//       {/* <GetAllProducts/> */}
//       <AddProduct/>
//     </div>
//   );
// }




const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LoginForm /> },
      { path:'SignUp', element: <SignUpForm /> },
      { path:'GetAllProducts', element: <GetAllProducts /> },
      { path:'add-products', element: <AddProduct /> },
    ],
  }
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
