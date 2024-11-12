import { getAllTodos } from "../../../api";
import AddTask from "./AddTask/page";
import ViewTask from "./ViewTask/page";

export default async function Task() {
  const tasks = await getAllTodos();
  console.log(tasks);

  return (
    <main className="w-[609px] h-[818px] bg-[#212642] m-[92px] rounded-[20px] p-[46px] px-[47px]">
      <div>
        <AddTask />
      </div>
      <div>
        <ViewTask tasks={tasks} />
      </div>
    </main>
  );
}
