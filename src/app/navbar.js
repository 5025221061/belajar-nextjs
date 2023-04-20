import Link from "next/link";
import Dice from "./svg/dice";
import Rewards from "./svg/rewards";
import Affiliates from "./svg/affiliates";
import Leaderboard from "./svg/leaderboard";
import Discord from "./svg/discord";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <title>GrowDice - Provably Fair Growtopia Casino</title>
      <nav className="flex items-center justify-between flex-wrap fixed top-0 z-10 bg-gray-800 p-3 w-full h-fit -space-y-1">
        <div className="flex items-center flex-shrink-0 text-red-500 mr-6 ">
          <span className="font-semibold text-xl tracking-tight hover:text-white hover:scale-110 transition">
            <Link href="\">My Website</Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-red-500 hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="lg:flex-grow font-semibold text-[10px]">
            <Link
              href="/games"
              passHref
              className="translate-y-1 block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-red-500 mr-4 hover:translate-y-[0.34rem] transition"
            >
              <span className="inline-block align-middle  mr-1 hover:text-red-500 hover:">
                <Dice className="" />
              </span>
              <span className="inline-block align-middle">GAMES</span>
            </Link>
            <Link
              href="/rewards"
              passHref
              className="translate-y-1 block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-red-500 mr-4 hover:translate-y-[0.34rem] transition hover:fill-red-500"
            >
              <span className="inline-block align-middle mr-1 hover:text-red-500 hover:">
                <Rewards className="" />
              </span>
              <span className="inline-block align-middle ">REWARDS</span>
            </Link>
            <Link
              href="/affiliates"
              passHref
              className="translate-y-1 block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-red-500 mr-4 hover:translate-y-[0.34rem] transition"
            >
              <span className="inline-block align-middle  mr-1 hover:text-red-500 hover:">
                <Affiliates className="" />
              </span>
              <span className="inline-block align-middle ">AFFILIATES</span>
            </Link>
            <Link
              href="/leaderboard"
              passHref
              className="translate-y-1 block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-red-500 mr-4 hover:translate-y-[0.34rem] transition"
            >
              <span className="inline-block align-middle  mr-1 hover:text-red-500 hover:">
                <Leaderboard className="" />
              </span>
              <span className="inline-block align-middle ">LEADERBOARD</span>
            </Link>
            <Link
              href="https://discord.com/"
              passHref
              className="translate-y-1 block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-red-500 mr-4 hover:translate-y-[0.34rem] transition self-end"
            >
              <span className="inline-block align-middle  mr-1 hover:text-red-500 hover:">
                <Discord className="" />
              </span>
              <span className="inline-block align-middle ">DISCORD</span>
            </Link>
          </div>
            <div className="inline-block ml-auto text-[12px] font-semibold translate-y-1 ">
              <Link href="/login" className="lg:inline-block mr-3 hover:translate-y-[0.2rem] transition pl-[5px] pr-[5px] pb-[3px] pt-[3px]">
                Sign in
              </Link>
              <Link href="/register" className="lg:inline-block mr-3 bg-[#4483eb] pl-[5px] pr-[5px] pb-[3px] pt-[3px] rounded-sm hover:bg-[#659ce9] hover:translate-y-[0.2rem] transition hover:text-gray-200">
                Register
              </Link>
            </div>
        </div>
      </nav>
    </>
  );
}

// function Page() {
//   return (
//     <div>
//       <Navbar />
//       <div className="container mx-auto my-8">
//         <h1 className="text-3xl font-bold">Welcome to my website!</h1>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
