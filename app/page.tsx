import { Center } from "./_components/Center";
import { Left } from "./_components/Left";
import { Navbar } from "./_components/Navbar";
import { Right } from "./_components/Right";

export default function Home() {
  return (
    <>
      <div className="h-14 shadow-sm">
        <Navbar />
      </div>
      <div className="h-screen flex ml-[200px] mt-6">
        <Left />
        <Center />
        <Right />
      </div>
    </>
  )
}