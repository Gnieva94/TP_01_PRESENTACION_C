import { Navbar , Footer} from "../../components"
import { Outlet } from "react-router-dom"
import "./Layout.css"

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
