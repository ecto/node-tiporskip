var TipsClient = require('../');
var tips = new TipsClient({
  key: 'a71011cb4c8f4792ab339b64c4a97799',
  secret: '897ec47bda7147afa53d4fe926330532',
  debug: true
});

tips.user.info('campedersen', console.log);
