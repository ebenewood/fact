var factArray = []
var x = 1;

function arrayMake ( num ) {
  for ( i = num; i != 0; i -= 1 ) {
    factArray.push(i);
  };
};

function factorArray ( arrayName ) {
  for ( i = 0; i < arrayName.length; i += 1 ) {
    x *= arrayName[i];
    console.log(x);
  };
};

function showAnswer () {
  
}

$(function () {
  arrayMake(parseInt($('input#fact').val()));
  $('#numberCheck').click(function () {
    $('div.ans').text(factorArray(factArray));
  });
});
