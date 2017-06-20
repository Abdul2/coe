// Make jQuery :contains Case-Insensitive
// https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/
// NEW selector
jQuery.expr[':'].Contains = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
};

// OVERWRITES old selecor
jQuery.expr[':'].contains = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
};




// Meta filter links
$('.jsMetaFilter').click(function(e) {
  e.preventDefault();
  var filter = $(this).text();

  $('.content').hide();
  $('.meta:contains("' + filter + '")').parents('.content').show();

  $('html,body').scrollTop(0);
});
