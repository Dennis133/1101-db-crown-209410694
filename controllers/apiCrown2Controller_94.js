const serviceCrown2Controller_94 = require('./serviceCrown2Controller_94');

exports.getCategories = async (req, res) => {
  try {
    let data = await serviceCrown2Controller_94.getCategories();
    return res.json(data);
  } catch (err) {
    console.log('crown2Controller getCategories', err);
  }
};
