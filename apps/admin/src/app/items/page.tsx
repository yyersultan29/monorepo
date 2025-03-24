"use client";

import { formatDate, formatDateTime } from "@repo/utils/index";

export default function ProfilePage() {
  const date = new Date().toISOString();
  return (
    <div style={{ padding: "10px" }}>
      <h1>THIS IS PROFILE PAGE</h1>

      <h4>Date: {formatDate(date)}</h4>
      <h5>Date Time: {formatDateTime(date)}</h5>
      {/* <Button appName="Hello admin">Click me to see</Button>
            <Card style={{width:"300px"}} >
                Container
            </Card> */}
            

    </div>
  );
}
