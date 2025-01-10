import { useEffect, useState } from "react";
import { Link, useSearchParams} from "react-router-dom";

import { Button } from "./button";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
 


const Header= () => {
    const [showSignIn,setShowSignIn]=useState(false);

    const [search,setSearch]=useSearchParams();

    useEffect(()=>{
      if(search.get("sign-in"))
      {
        setShowSignIn(true);
      }
    },[search]);
    
    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
        setShowSignIn(false);
        setSearch({});
      }
    };

  return (
   <>
    <nav className="py-4 flex justify-between items-center">
        <Link className="flex items-center" >
            <img src="/logo-dark-2.png" className="h-32 sm:h-40 filter invert brightness-0 " /> {/* Add ml-2 to the image */}
        </Link>
        

      <div className="flex gap-8">
          <SignedOut>
            <Button variant="outline" onClick={()=>setShowSignIn(true)}>
            Login
            </Button>
          </SignedOut>
          <SignedIn>
            
                <Button variant="destructive" className="rounded-full">
                        <PenBox size={20} className="mr-2" />
                        Post a Job
                </Button>
                <Link to="/post-job"> </Link>
                <UserButton appearance={{
                  elements:{
                    avatarBox:"w-10 h-10",
                  },
                }}
                >
                <UserButton.MenuItems>
                  <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15}/>}
                  href="/my-job"
                  />

                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15}/>}
                  href="/saved-job"
                  />

               
                </UserButton.MenuItems>

                </UserButton>
          </SignedIn>
      </div>
    </nav>

    {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;

