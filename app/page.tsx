import BearToggle from "@/components/BearToogle";
import { Meteors } from "@/components/magicui/meteors";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Meteors
        number={20}
        className="opacity-90"
        minDuration={8}
        maxDuration={60}
        angle={-60}
      />
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 text-center w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 animate-fade-in">
          Would you be my valentine?
        </h1>
        <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
      </div>
      <BearToggle />
    </main>
  );
}
