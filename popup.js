
document.addEventListener('DOMContentLoaded', pwg_generate_password);

var pwg_password = document.getElementById('pwg_password');
var pwg_copy_button = document.getElementById('pwg_copy_button');
var pwg_generate_button = document.getElementById('pwg_generate_button');
var pwg_options_button = document.getElementById('pwg_options_button');

pwg_copy_button.addEventListener('click', function(event) {
  document.querySelector('#pwg_password').select();
  document.execCommand('copy');
});

pwg_generate_button.addEventListener('click', function(event) {
  pwg_generate_password();
});

pwg_options_button.addEventListener('click', function(event) {
  // chrome.tabs.create({active: true,url:  'options.html'}, null);
  // chrome.tabs.create({ 'url': 'chrome://extensions/?options=' + chrome.runtime.id });
  chrome.runtime.openOptionsPage();
});

function pwg_get_options() {
  chrome.storage.sync.get({
    count_setting: 8,
    numbers_setting: 'true',
    symbols_setting: 'true',
    uppercase_setting: 'true',
    lowercase_setting: 'true',
  }, function(options) {
    localStorage.count_setting = options.count_setting;
    localStorage.numbers_setting = options.numbers_setting;
    localStorage.symbols_setting = options.symbols_setting;
    localStorage.uppercase_setting = options.uppercase_setting;
    localStorage.lowercase_setting = options.lowercase_setting;
  });
}

function pwg_generate_password() {
  var options = pwg_get_options();
  var password = "";
  var possible = "";
  count     = localStorage.count_setting;
  letters   = localStorage.letters_setting;
  numbers   = localStorage.numbers_setting;
  symbols   = localStorage.symbols_setting;
  uppercase = localStorage.uppercase_setting;
  lowercase = localStorage.lowercase_setting;

  if (numbers == 'true') {
    possible += "0123456789";
  }
  if (symbols == 'true') {
    possible += "`~!@#$%^&*()_-+={}[]:;<>,.?/";
  }
  if (uppercase == 'true') {
    possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowercase == 'true') {
    possible += "abcdefghijklmnopqrstuvwxyz";
  }
  for( var i=0; i < count; i++ ){
    password += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  console.log(possible);
  console.log(password);
  document.body.style.width = count*12+"px";
  pwg_password.style.width = count*9+"px";
  pwg_password.value = password;

}
