import { formatDate } from "@repo/utils";

export default function Home() {
  const date = new Date().toISOString();
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-3">
    
      <h2>THIS IS ADMIN APP </h2>
      <div>Current date: {formatDate(date)}</div>
    </div>
  );
}
