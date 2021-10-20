const Category_94 = require('../models/Category_94');

exports.getCategories = async (req, res) => {
  try {
    return await Category_94.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};
