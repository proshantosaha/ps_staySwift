import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import Logout from "./auth/LogOut";

const Navbar = async ({ sideMenu }) => {
  const session = await auth();
  return (
    <nav>
      <div className="max-w-7xl flex mx-auto justify-between px-4 py-4 w-full">
        <Link href="/">
          <Image
            src="/psblack.png"
            alt="Psblack Logo"
            width={150}
            height={150}
          />
        </Link>

        {sideMenu && (
          <ul>
            <li>
              <Link href="#">Recommended Places</Link>
            </li>

            <li>
              <Link href="#">About Us</Link>
            </li>

            <li>
              <Link href="#">Contact us</Link>
            </li>

            <li>
              <Link href="/bookings">Bookings</Link>
            </li>

            <li>
              {session?.user ? (
                <div>
                  <span className="mx-1">{session?.user?.name}</span>
                  <span> | </span>
                  <Logout />
                </div>
              ) : (
                <Link href="/login" className="login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
