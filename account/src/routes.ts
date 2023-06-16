import express from "express";
import AccountController from "./controllers/account-controller";
import Authorize from "./middlewares/authorize";

const routes = express.Router();

routes.get("/account", Authorize, AccountController.index);
routes.post("/account", Authorize, AccountController.create);
routes.patch("/account/:id", Authorize, AccountController.update);


export default routes;
