import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DialogTitle } from "@radix-ui/react-dialog";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
function Header() {
  const user = JSON.parse(localStorage.getItem('user'));

  const [openDialog, setOpenDialog] = useState(false);
  
  // useEffect(() => {
  //   // console.log(user);
  // }, []);

  const logIn = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.error(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        // console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
      });
  };

  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <a href="/"><img src="/logo.svg" alt="logo"/></a>
      <div>
        {user ? (
          <div className="flex items-center gap-3">
            <a href="/">
            <Button variant="outline" className="rounded-full">
              Home
            </Button>
            </a>
            <a href="/create-trip">
            <Button variant="outline" className="rounded-full">
              + Create Trip
            </Button>
            </a>
            <a href="/my-trips">
            <Button variant="outline" className="rounded-full">
              My Trips
            </Button>
            </a>
            <Popover>
              <PopoverTrigger>
              <img
              src={user?.picture}
              alt="profile picture"
              className="h-[35px] w-[35px] rounded-full"
            />
              </PopoverTrigger>
              <PopoverContent>
                <h2 className="cursor-pointer"onClick={()=>{
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}>Logout</h2>
              </PopoverContent>
            </Popover>
            
          </div>
        ) : (
          <Button onClick={()=>setOpenDialog(true)}>Sign In</Button>
        )}
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <h2 className="font-bold text-lg mt-7">Sign In</h2>
          </DialogHeader>
          <DialogDescription>
            <img src="/logo.svg" alt="" className="mb-2"/>
            <p>Sign In to the App with Google authentication securely.</p>

            <Button 
              onClick={logIn}
              className="w-full mt-5 flex gap-4 items-center"
            >
              <FcGoogle style={{ width: "1.75rem", height: "1.75rem" }} />
              Sign In with Google
            </Button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
