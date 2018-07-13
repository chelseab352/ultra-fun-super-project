const { Ossuary } = require('./Ossuary');
const $ = require('jquery');

$(() => {
  console.log('ready');
  const o = new Ossuary({});
  console.log(o.parse('{hello|world}'))
});