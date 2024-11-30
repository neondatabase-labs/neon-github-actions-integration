import { getData } from "@/app/actions/todoAction";
import Todos from "@/app/components/todos";

export default async function Home() {
  const data = await getData();
  return <Todos todos={data} />;
}
