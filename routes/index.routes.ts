import { Router } from "https://deno.land/x/oak/mod.ts";

//Quiero importar todo y que este dentro de una var llamada indexCtrl
import * as indexCtrl from "../controllers/index.controllers.ts";

const router = new Router();

router.get("/", ({ response }) => {
  response.body = "Welcome peko";
});

router.get("/users", indexCtrl.getUsers);

router.get("/users/:id", indexCtrl.getUser);

router.post("/users", indexCtrl.createUser);

router.delete("/users/:id", indexCtrl.deleteUser);

router.put("/users/:id", indexCtrl.updateUser);

export default router;
