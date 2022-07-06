import axios from 'axios';
require("dotenv").config();
import http from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cron from "node-cron";
import createApp from "./app";
import retrieveSecrets from "./manager/secrets";
import { secrets } from "./manager/secrets";

//+ new Date()

console.log("FIRED!! " + Date.now() + " " + new Date().toLocaleString());
const startServer = async () => {
  await retrieveSecrets();
  const app = await createApp();

  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: ["http://localhost:3000", "https://admin.xend.finance"],
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("disconnect", () => {
      console.log("disconnected");
    });
  });
  
  const PORT = process.env.PORT;
  server.listen(PORT, async () => {
    console.log("Application started on http://localhost:%d", PORT);

    let connection;

    if (process.env.ENV !== "local") {
      let { CONN } = secrets;
      connection = CONN;
    } else {
      connection = process.env.CONN;
    }
    

    mongoose.connect(
      connection,
      {
        keepAlive: true
        /* useNewUrlParser: false,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true, */
      },
      (e) => {
        if (e) console.error(e);


        console.log(`connected 🛡`);


      }
    );

  });
};



startServer();
