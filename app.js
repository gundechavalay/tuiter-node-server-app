import express from 'express'
import cors from 'cors'
import HelloController
  from "./controllers/hello-controller.js"
import UsersController
  from "./controllers/users-controller.js"
import TuitsController
  from "./controllers/tuits-controller.js";  
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors())
app.use(express.json());
HelloController(app)
UsersController(app)
TuitsController(app)
app.listen(process.env.PORT || 4000)