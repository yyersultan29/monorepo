import { Button } from "@repo/ui"
import { formatDate } from "@repo/utils";

export default function Home() {
  const date = new Date().toISOString();
  return (
    <div>
      <Button appName="hello" >Hello</Button>
      
      <h2>THIS IS ADMIN APP </h2>

      <div>Current date: {formatDate(date)}</div>
    </div>
  );
}
