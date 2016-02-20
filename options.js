
// TODO: Use this array
// var things = ['letters','numbers','symbols','camel'];

function pwg_save_options() {
  var count = document.getElementById('count').value;
  var numbers = document.getElementById('numbers').checked;
  var symbols = document.getElementById('symbols').checked;
  var uppercase = document.getElementById('uppercase').checked;
  var lowercase = document.getElementById('lowercase').checked;

  chrome.storage.sync.set({
    count_setting: count,
    numbers_setting: numbers,
    symbols_setting: symbols,
    uppercase_setting: uppercase,
    lowercase_setting: lowercase,
  }, save_options_finished);
}

function save_options_finished() {
  // TODO: Visual status
  // var pwg_options_status = document.getElementById('pwg_options');
}

// Restores select box and checkbox state using the preferences
function pwg_restore_options() {
  chrome.storage.sync.get({
    count_setting: 8,
    numbers_setting: 'true',
    symbols_setting: 'true',
    uppercase_setting: 'true',
    lowercase_setting: 'true',
  }, function(options) {
    document.getElementById('count').value = options.count_setting;
    document.getElementById('numbers').checked = options.numbers_setting;
    document.getElementById('symbols').checked = options.symbols_setting;
    document.getElementById('uppercase').checked = options.uppercase_setting;
    document.getElementById('lowercase').checked = options.lowercase_setting;
  });
}
document.addEventListener('DOMContentLoaded', pwg_restore_options);

document.getElementById('pwg_options_save_button').addEventListener('click', pwg_save_options);
