const serviceCrown2Controller_94 = require('./serviceCrown2Controller_94');

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_94.getCategories();
    console.log('results', JSON.stringify(results));
    res.render('crown2_94', {
      data: results,
      title: 'Crown2_94',
      name: '田晟瑋',
      id: '209410694',
    });
  } catch (err) {
    console.log('crown2Controller getCategories', err);
  }
};
