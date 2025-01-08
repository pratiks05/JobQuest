/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { Button } from "./button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Header= () => {
  return (
   <>
    <nav className="py-4 flex justify-between items-center">
        <Link className="flex items-center" >
            <img src="/logo.png" className="h-20" /> {/* Add ml-2 to the image */}
        </Link>
        <Button variant="outline">Login</Button>

      {/* <SignedOut>
            <SignInButton/>
      </SignedOut>
      <SignedIn>
            <UserButton/>
      </SignedIn> */}

    </nav>
   </>
  )
}

export default Header;


