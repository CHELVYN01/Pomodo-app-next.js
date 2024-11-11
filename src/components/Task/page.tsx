import { getAllTodos } from "../../../api";
import AddTaks from "./AddTask/page";

export default async function Task() {
  return (
    <main>
      <div>
        <AddTaks />
      </div>
    </main>
  );
}
