import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import listCategoriesController from "../controllers/categories/listCategories.controller";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const categoriesRouter = Router();

categoriesRouter.post("", verifyIsAdmMiddleware, createCategoryController);
categoriesRouter.get("", listCategoriesController);
categoriesRouter.get("/:id");

export default categoriesRouter;
