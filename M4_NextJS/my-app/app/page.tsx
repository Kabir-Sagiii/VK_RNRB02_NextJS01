import Profile from "./components/profile/Profile";
import Link from "next/link";
export default function Home() {
  return (
    <div className="m-10 text-blue-800 text-4xl">
       <h1>Welcome to Next JS</h1>
       <Profile />
       <Link href="/pages/sign-in">Switch to Signin</Link>
    </div>
  );
}
