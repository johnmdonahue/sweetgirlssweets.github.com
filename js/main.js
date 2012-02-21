$(function () {
  $('a[data-toggle="tab"]').on('show', function (e) {
    location.hash = '#!/' + e.target.id.replace('-btn', '');
  })
  var el = location.hash ? $(location.hash.replace('!/', '') + '-btn') : false; 
  (el && el.tab('show'));
});