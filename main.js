$( document ).ready(function() {
// var toggleDropdown = $('.header-right > ul > li > i')
//
$('.header-right > ul > li > i').click(function() {
  var dropdownToggle = $(this).next('ul');
  dropdownToggle.toggleClass('hide');
});

})
