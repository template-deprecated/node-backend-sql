const api_path_v1 = "/api/v1/"
const foodController = require('../controllers').foods;

module.exports = (app) => {
  require('../controllers').setup

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post(api_path_v1 + 'food/create', foodController.create);
  app.get(api_path_v1 + 'foods', foodController.list);
  app.get(api_path_v1 + 'food/:fid', foodController.retrieve);
  app.put(api_path_v1 + 'food/:fid', foodController.update);
  app.delete(api_path_v1 + 'food/:fid', foodController.destroy);
};