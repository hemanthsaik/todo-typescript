import { body, header, param } from "express-validator";

const MustBeTask = body("task")
  .notEmpty()
  .withMessage("must not be empty")
  .isString()
  .withMessage("Must be string")
  .isLength({ min: 4, max: 255 })
  .withMessage("must be min: 4chr or max: 255chr");

const MustBeIsDone = body("isDone").isBoolean().withMessage("Must be boolean");

const MustBeId = param("id").isNumeric().withMessage("must be  Integer");

const MustBeHeader = header("authorization")
  .notEmpty()
  .withMessage("Authorization header is required");

// Todo DTO's
export const creteTodoDto = [MustBeTask, MustBeIsDone];

export const updateTodoTaskDto = [MustBeId, MustBeTask];

export const updateTodoIsDoneDto = [MustBeId, MustBeIsDone];

export const deleteTodoDto = [MustBeId];

export const getAllTodoDto = [MustBeHeader];
export const headerDto = [MustBeHeader];
