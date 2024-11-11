import Clock from "@/components/Clock/page";
import Musics from "@/components/Musics/page";
import Task from "@/components/Task/page";

export default function Home() {
  return (
    <>
      <div className=" flex">
        <div>
          <Clock />
          <Musics />
        </div>
        <div>
          <Task />
        </div>
      </div>
    </>
  );
}
