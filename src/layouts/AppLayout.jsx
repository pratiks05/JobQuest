import Header from "@/components/ui/header"
import { Outlet } from "react-router-dom"


function AppLayout() {
  return (
    <div>
      <div className="grid-background"></div>
    
      <main className="min-h-screen container">
        <Header/>
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
      <p>&copy; {new Date().getFullYear()} JobQuest. All rights reserved.</p>
      </div>
    </div>
  )
}

export default AppLayout
