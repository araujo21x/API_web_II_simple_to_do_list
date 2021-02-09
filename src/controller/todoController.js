const ToDoentity = require('../dataBase/toDoEntity');

class ToDoController {
  async store(request, response) {
    const { cardText, done } = request.body;
    console.log(cardText, done)
    try {
      const newToDo = ToDoentity.build({ cardText, done });
      await newToDo.save();
      return response.status(200).jsonp();
    } catch (err) {
      return response.status(500).jsonp({ err });
    }

  }
  async delete(request, response) {
    const { id } = request.body;
    try {
      await ToDoentity.destroy({ where: { id } })
      return response.status(200).jsonp();
    } catch (err) {
      return response.status(500).jsonp({ err });
    }
  }

  async tradeStatus(request, response) {
    const { id, done } = request.body;
    try {
      await ToDoentity.update({ done }, { where: { id } });
      return response.status(200).jsonp();
    } catch (err) {
      return response.status(500).jsonp({ err });
    }
  }

  async index(request, response) {
    try {
      const toDos = await ToDoentity.findAll();
      console.log
      return response.status(200).jsonp(toDos);
    } catch (err) {
      return response.status(500).jsonp({ err });
    }
  }
}

module.exports = new ToDoController();