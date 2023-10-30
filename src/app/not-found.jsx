import Navbar from "../components/globals/Navbar"
import NotFound from "../components/notfound/NotFound"

export default function Error() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navbar/>
      <NotFound/>
    </div>
  )
}
