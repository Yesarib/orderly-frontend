import Navbar from "../components/layout/Navbar"
import Sidenav from "../components/layout/Sidenav"
import { Routes, Route } from "react-router-dom";
import routes from "../routes";
// import Footer from "../components/layout/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Sidenav />
      <div className="p-4 xl:ml-80">
        <Navbar />
        <Routes>
          {routes.map(({ layout, pages }) =>
            layout === 'dashboard' &&
            pages.map(({ path, element }) => (
              <Route path={path} element={element} />
            ))
          )}
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard