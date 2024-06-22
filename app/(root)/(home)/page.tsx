import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="flex h-[300px] w-full bg-hero rounded-[10px]">
        <div
          className="flex flex-col
        justify-between h-full py-10 px-10"
        >
          <h2 className="glassmorphism w-[250px] text-center text-base rounded">
            Upcoming meeting at : 11am
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-extrabold">{time}</h1>
            <p className="text-lg font-medium text-sky-1">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
