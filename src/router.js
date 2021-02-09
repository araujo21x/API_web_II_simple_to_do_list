const { Router } = require("express");
const todoController = require("./controller/todoController");
const router = Router();

router.route('/todo')
  .post(todoController.store)
  .get(todoController.index)
  .delete(todoController.delete)
  .put(todoController.tradeStatus);

module.exports = router;