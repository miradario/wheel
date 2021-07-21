var parseQueryString = function () {
  var str = window.location.search;
  var objURL = {};

  str.replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function ($0, $1, $2, $3) {
      objURL[$1] = $3;
    }
  );
  return objURL;
};

//Example how to use it:
var params = parseQueryString();
var total, cant, totalCat, totalDime, ukey;
var p1;

var prompts = [];

$.i18n()
  .load({
    en: "i18n/en.json",
    es: "i18n/es.json",
    ch: "i18n/ch.json",
    de: "i18n/de.json",
  })
  .done(function () {
    console.log("done!");
  });
if (typeof params["lang"] === "undefined") {
  $.i18n().locale = "en";
} else {
  $.i18n().locale = params["lang"];
}
$("body").i18n();
/* $.i18n({
  locale: "en",
});
$.i18n().locale = "en"; */
