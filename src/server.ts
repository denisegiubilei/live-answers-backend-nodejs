import { http } from "./http-io";
import { createConnection } from "typeorm";

import "./websocket/answer";

createConnection();

http.listen(process.env.PORT || 3333, () =>
  console.log(`Server is running on port ${process.env.PORT || 3333}`)
);
