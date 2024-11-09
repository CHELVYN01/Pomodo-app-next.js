import Clock from "@/components/Clock/page";
import Musics from "@/components/Musics/page";
import Task from "@/components/Task/page";

export default function Home() {
  return (
    <>
      <div className="bg-blue-900 flex">
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
