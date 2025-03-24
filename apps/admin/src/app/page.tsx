import { formatDate } from "@repo/utils";

export default function Home() {
  const date = new Date().toISOString();
  return (
    <div>
      
      <h2 className="bg-red-500 ">THIS IS ADMIN APP </h2>

      <div>Current date: {formatDate(date)}</div>
    </div>
  );
}
