$(document).ready(function() {
  $("#shout-form").submit(function(event) {
    var sentenceShoutInput = $("input#sentence-shout").val();
    var wordShoutBoldInput = $("input#word-shout-bold").val();
    var wordShoutItalicInput = $("input#word-shout-italic").val();

    $(".sentence-shout").text(sentenceShoutInput.toUpperCase());
    $(".word-shout-bold").text(wordShoutBoldInput.toUpperCase());
    $(".word-shout-italic").text(wordShoutItalicInput.toUpperCase());

    $("#shouting").show();

    event.preventDefault();
  });
});
