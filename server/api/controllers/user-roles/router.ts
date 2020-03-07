import express from "express";
import controller from "./controller";
export default express
    .Router()
    .post("/users", controller.setUser)
    .post("/roles", controller.setRole)
    .get("/:id", controller.getSubOrdinates);
