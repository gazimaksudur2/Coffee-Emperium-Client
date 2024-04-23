import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from '../../components/Footer.jsx';
import TopFooter from '../../components/TopFooter.jsx';

function App() {

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <Outlet />
      <div>
        <TopFooter />
        <Footer />
      </div>
    </div>
  )
}

export default App
