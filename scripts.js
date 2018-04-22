$(function() {
  // elemek összegyűjtése
  let $progressBar = $('.progress-bar');
  let $input = $('form input');
  let $button = $('button[type="submit"]');
  let $questionsWrapper = $('div.questions');
  let $thanksWrapper = $('div.thanks');

  // progress bar kezdeti érték megadása
  UpdateProgressBar(0);

  // változásokra reagálás
  $input.keyup(function() {
    let percent = Math.round(CountFilledInputs() / CountInputs() * 100);
    UpdateProgressBar(percent);

    if(percent == 100){
      $button.prop('disabled', false);
    }
  });

  // submitra reagálás
  $button.click(function(event){
    // alapértelmezett működés megakasztása
    event.preventDefault();

    // kérdések elrejtése
    $questionsWrapper.hide();

    // köszönő szöveg megjelenítése
    $thanksWrapper.show();
  });

  //////////////////////////////////////////////////

  // progress bar állítása
  function UpdateProgressBar(percent) {
    $progressBar.attr('aria-valuenow', percent);
    $progressBar.css('width', percent + '%');
    $progressBar.text(percent + '%');
  }

  // kitöltött mezők megszámlálása
  function CountFilledInputs() {
    let count = 0;

    // összes mezőn végigfutás
    $input.each(function(index, element) {
      let $element = $(element);

      // számláló növelése, ha nem üres a mező
      if ($element.val()) {
        count++;
      }
    });

    // a függvény visszaadja a számlálót
    return count;
  }

  // összes mező megszámlálása
  function CountInputs() {
    return $input.length;
  }
});
