var faker = require('faker');

module.exports = {
    generateTestData
  };

  function generateTestData(context, events, done) {

    const content = faker.random.word();
    const updateContent = faker.random.word();
    const priority = faker.random.number({ min: 1, max: 4});
    const updatePriority = faker.random.number({ min: 1, max: 4});

    context.vars['content'] = content;
    context.vars['updateContent'] = updateContent;
    context.vars['priority'] = priority;
    context.vars['updatePriority'] = updatePriority;

    return done();
  }