// reset builder
$('#reset').on('click', function() {
  var target = $(this).data('target');

  $('#builder-'+target).queryBuilder('reset');
});

// set rules
$('#set-json').on('click', function() {
  var target = $(this).data('target');
  var rules = window['rules_'+target];

  $('#builder-'+target).queryBuilder('setRules', rules);
});


// get rules
$('#parse-json').on('click', function() {
  var target = $(this).data('target');
  var result = $('#builder-'+target).queryBuilder('getRules');

  if (!$.isEmptyObject(result)) {
    bootbox.alert({
      title: $(this).text(),
      message: '<pre class="code-popup">' + format4popup(result) + '</pre>'
    });
  }
});

function format4popup(object) {
  return JSON.stringify(object, null, 2).replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
