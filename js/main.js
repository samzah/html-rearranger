var $belowUl = $('<ul>');
var $aboveUl = $('<ul>');

$('body').append('<h1>Below ground veggies</h1>');
$('body').append($belowUl);

$('body').append('<h1>Above ground veggies</h1>');
$('body').append($aboveUl);

$('ul li').each(function () {
  if ($(this).hasClass('below')) {
    $belowUl.append($(this));
  } else {
    $aboveUl.append($(this));
  }
});

