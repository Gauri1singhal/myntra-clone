import {Navbar , Breadcrumb} from './components/index.js';
import {Modal} from './containers/index.js';
import {HomePage , ProductPage} from './pages/index.js';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import {Page404} from './components/index.js';
function App() {
  const {
      modals
  } = useSelector(state => ({
      modals : state.modalsStore,
  }));
  return (
    <div className="App" >
      <BrowserRouter>
        {modals.isActive && <Modal/>}
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/:productID" element={<ProductPage/>} />
          <Route path="*" element={<Page404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
