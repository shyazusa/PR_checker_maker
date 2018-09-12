const $ = require('jquery');
const bootstrap = require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');

makeCommand = () => {
  const pr_id = document.getElementById('pr_id').value;
  const branch_name = document.getElementById('branch_name').value;
  const ans = "$ git fetch origin pull/" + pr_id + "/head:" + branch_name + " && git checkout " + branch_name;
  document.getElementById('ans').innerHTML = ans;
}
