import express from "express";
import ClientController from "./controllers/client-controller";
import AuthController from "./controllers/auth-controller";
import Authorize from "./middlewares/authorize";

const routes = express.Router();

//For tests proposals
routes.get("/client", Authorize, ClientController.index);

//Create and update client
routes.post("/client", ClientController.create);
routes.patch("/client", Authorize, ClientController.update);

//Authorize client
routes.post("/auth", AuthController.create);

export default routes;
