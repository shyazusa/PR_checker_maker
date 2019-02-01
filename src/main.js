const $ = require('jquery');
const bootstrap = require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');

makeCommand = () => {
  const pr_id = $('#pr_id').val();
  const branch_name = $('#branch_name').val();
  const ans = "$ git fetch origin pull/" + pr_id + "/head:" + branch_name + " && git checkout " + branch_name;
  const back = "$ git checkout - && git branch -D " + branch_name;
  $('#ans').html(ans);
  $('#back').html(back);
}
