window.onload = inicializar();

var data;
var refFirebase;
const platform = "Workshop";

function inicializar() {
  console.log("inciializar");
  console.log("refFirebase1", refFirebase);
  refFirebase = firebase.database().ref("Codes");
  console.log("refFirebase2", refFirebase);
  refFirebase.on("value", function (snap) {
    data = snap.val();
  });
}
function fillSelect(sel, values) {
  var element;
  console.log("values", values);
  sel.innerHTML = "";
  var opt = document.createElement("option");
  const noteam = $.i18n("select");
  opt.value = noteam;
  opt.selected = true;
  opt.innerHTML = noteam; // whatever property it has
  sel.appendChild(opt);

  values.forEach((element, index) => {
    var opt = document.createElement("option");
    opt.value = element;
    opt.innerHTML = element; // whatever property it has

    // then append it to the select element
    sel.appendChild(opt);
  });
}

function getCodes(code) {
  const team = document.getElementById("Team");
  const selectTeam = document.getElementById("selectTeam");

  for (var key in data) {
    console.log(data[key].platform);
    if (data[key].platform == platform)
      if (code == data[key].workshopcode) {
        keyCode = key;
        document.getElementById("form-demo").style.display = "block";
        document.getElementById("teamdiv").style.display = "block";

        var Teamsfb = data[key].team.split("\n");
        fillSelect(selectTeam, Teamsfb);

        return true;
      } else {
        document.getElementById("form-demo").style.display = "none";
        document.getElementById("teamdiv").style.display = "none";
      }
  }
}

function EnableDisable(txtCode) {
  console.log("llamada");
  getCodes(txtCode.value.trim());
}

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
if (typeof params["type"] != "undefined") {
  if (params["type"] != "Team") {
    document.getElementById("workshop").style.display = "none";
    document.getElementById("individual").style.display = "block";
    document.getElementById("form-demo").style.display = "block";
  } else {
    document.getElementById("form-demo").style.display = "none";
    document.getElementById("individual").style.display = "none";
  }
}
