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
$.i18n().locale = params["lang"];

$.i18n()
  .load({
    en: "i18n/en.json",
    es: "i18n/es.json",
    ch: "i18n/ch.json",
    de: "i18n/de.json",
  })
  .done(function () {
    loadVars();
    $("body").i18n();
    assingvalue("download");
    assingvalue("send");
    document.getElementById("email").placeholder = $.i18n("send_place");
    console.log($.i18n("p0"));
  });

/* $.i18n().defaultLocale = "en";
$.i18n().locale = "en"; */
//$.i18n().currentLocale();

function assingvalue(tag) {
  document.getElementById(tag).value = $.i18n(tag);
}

function loadVars() {
  prompts = [
    {
      prompt: $.i18n("p0"),
      weight: 1,
      value: 0,
      class: "group0",
      category: 0,
    },
    {
      prompt: $.i18n("p1"),
      weight: 1,
      value: 0,
      class: "group1",
      category: 0,
    },
    {
      prompt: $.i18n("p2"),
      weight: 1,
      value: 0,
      class: "group2",
      category: 0,
    },
    {
      prompt: $.i18n("p3"),
      weight: 1,
      value: 0,
      class: "group3",
      category: 0,
    },
    // development 4 -9
    {
      prompt: $.i18n("p4"),
      weight: 1,
      value: 0,
      class: "group4",
      category: 1,
    },
    {
      prompt: $.i18n("p5"),
      weight: 1,
      value: 0,
      class: "group5",
      category: 1,
    },
    {
      prompt: $.i18n("p6"),
      weight: 1,
      value: 0,
      class: "group6",
      category: 1,
    },
    {
      prompt: $.i18n("p7"),
      weight: 1,
      value: 0,
      class: "group7",
      category: 1,
    },
    // Health 10 -14
    {
      prompt: $.i18n("p8"),
      weight: 1,
      value: 0,
      class: "group8",
      category: 2,
    },
    {
      prompt: $.i18n("p9"),
      weight: 1,
      value: 0,
      class: "group9",
      category: 2,
    },
    {
      prompt: $.i18n("p10"),
      weight: 1,
      value: 0,
      class: "group10",
      category: 2,
    },
    {
      prompt: $.i18n("p11"),
      weight: 1,
      value: 0,
      class: "group11",
      category: 2,
    },
    // Wealth 13 -16
    {
      prompt: $.i18n("p12"),
      weight: 1,
      value: 0,
      class: "group12",
      category: 3,
    },
    {
      prompt: $.i18n("p13"),
      weight: 1,
      value: 0,
      class: "group13",
      category: 3,
    },
    {
      prompt: $.i18n("p14"),
      weight: 1,
      value: 0,
      class: "group14",
      category: 3,
    },
    {
      prompt: $.i18n("p15"),
      weight: 1,
      value: 0,
      class: "group15",
      category: 3,
    },
    // Relationsip
    {
      prompt: $.i18n("p16"),
      weight: 1,
      value: 0,
      class: "group16",
      category: 4,
    },
    {
      prompt: $.i18n("p17"),
      weight: 1,
      value: 0,
      class: "group17",
      category: 4,
    },
    {
      prompt: $.i18n("p18"),
      weight: 1,
      value: 0,
      class: "group18",
      category: 4,
    },
    {
      prompt: $.i18n("p19"),
      weight: 1,
      value: 0,
      class: "group19",
      category: 4,
    },
    // Relationship life partner
    {
      prompt: $.i18n("p20"),
      weight: 1,
      value: 0,
      class: "group20",
      category: 5,
    },
    {
      prompt: $.i18n("p21"),
      weight: 1,
      value: 0,
      class: "group21",
      category: 5,
    },
    {
      prompt: $.i18n("p22"),
      weight: 1,
      value: 0,
      class: "group22",
      category: 5,
    },
    {
      prompt: $.i18n("p23"),
      weight: 1,
      value: 0,
      class: "group23",
      category: 5,
    },
    // Connection to Society: People and Planet
    {
      prompt: $.i18n("p24"),
      weight: 1,
      value: 0,
      class: "group24",
      category: 6,
    },
    {
      prompt: $.i18n("p25"),
      weight: 1,
      value: 0,
      class: "group25",
      category: 6,
    },
    {
      prompt: $.i18n("p26"),
      weight: 1,
      value: 0,
      class: "group26",
      category: 6,
    },
    {
      prompt: $.i18n("p27"),
      weight: 1,
      value: 0,
      class: "group27",
      category: 6,
    },
    // Connection to Myself: Values and Spirituality
    {
      prompt: $.i18n("p28"),
      weight: 1,
      value: 0,
      class: "group28",
      category: 7,
    },
    {
      prompt: $.i18n("p29"),
      weight: 1,
      value: 0,
      class: "group29",
      category: 7,
    },
    {
      prompt: $.i18n("p30"),
      weight: 1,
      value: 0,
      class: "group30",
      category: 7,
    },
    {
      prompt: $.i18n("p31"),
      weight: 1,
      value: 0,
      class: "group31",
      category: 7,
    },
  ];

  totalCat = [
    {
      category: $.i18n("cat1"),
      avg: 0,
      total: 0,
      cant: 0,
    },
    {
      category: $.i18n("cat2"),
      avg: 0,
      total: 0,
      cant: 0,
    },
    {
      category: $.i18n("cat3"),
      avg: 0,
      total: 0,
      cant: 0,
    },
    {
      category: $.i18n("cat4"),
      avg: 0,
      total: 0,
      cant: 0,
    },
    {
      category: $.i18n("cat5"),
      avg: 0,
      total: 0,
      cant: 0,
    },
    {
      category: $.i18n("cat6"),
      avg: 0,
      total: 0,
      cant: 0,
    },
    {
      category: $.i18n("cat7"),
      avg: 0,
      total: 0,
      cant: 0,
    },
    {
      category: $.i18n("cat8"),
      avg: 0,
      total: 0,
      cant: 0,
    },
  ];

  totalDime = [
    {
      category: $.i18n("avg1"),
      avg: 0,
    },
    {
      category: $.i18n("avg2"),
      avg: 0,
    },
    {
      category: $.i18n("avg3"),
      avg: 0,
    },
    {
      category: $.i18n("avg4"),
      avg: 0,
    },
  ];

  // This array stores all of the possible values and the weight associated with the value.
  // The stronger agreeance/disagreeance, the higher the weight on the user's answer to the prompt.

  createPromptItemsI($.i18n("catdet1"), prompts, 0, 3);
  createValueButtonsI(prompts, 0, 3);
  createPromptItemsI($.i18n("catdet2"), prompts, 4, 7);
  createValueButtonsI(prompts, 4, 7);

  createPromptItemsI($.i18n("catdet3"), prompts, 8, 11);
  createValueButtonsI(prompts, 8, 11);
  createPromptItemsI($.i18n("catdet4"), prompts, 12, 15);
  createValueButtonsI(prompts, 12, 15);
  createPromptItemsI($.i18n("catdet5"), prompts, 16, 19);
  createValueButtonsI(prompts, 16, 19);
  createPromptItemsI($.i18n("catdet6"), prompts, 20, 23);
  createValueButtonsI(prompts, 20, 23);
  createPromptItemsI($.i18n("catdet7"), prompts, 24, 27);
  createValueButtonsI(prompts, 24, 27);
  createPromptItemsI($.i18n("catdet8"), prompts, 28, 31);
  createValueButtonsI(prompts, 28, 31);

  $(".value-btn").mousedown(function () {
    var classList = $(this).attr("class");

    var classArr = classList.split(" ");

    var this_group = classArr[0];

    var cat = findPromptCat(prompts, this_group);
    total -= findPromptWeight(prompts, this_group);

    var sel = parseInt(classList.replace("group", ""));
    console.log("Sel", sel);

    totalCat[cat].total -=
      findPromptWeight(prompts, this_group) *
      findValueWeight(prompt_values, $("." + this_group + ".active").text());

    prompts[sel].value -=
      findPromptWeight(prompts, this_group) *
      findValueWeight(prompt_values, $("." + this_group + ".active").text());

    if ($("." + this_group + ".active").text() == "") {
      totalCat[cat].cant += 1;
    }

    $("." + this_group).removeClass("active");

    $(this).addClass("active");

    totalCat[cat].total +=
      findPromptWeight(prompts, this_group) *
      findValueWeight(prompt_values, $(this).text());

    prompts[sel].value +=
      findPromptWeight(prompts, this_group) *
      findValueWeight(prompt_values, $("." + this_group + ".active").text());

    totalCat[cat].avg = totalCat[cat].total / totalCat[cat].cant;
    if (totalCat[cat].cant == 4) {
      $("#slide-" + (cat + 2)).prop("checked", true);
    }
    $("#lis-" + (cat + 1)).addClass("colsel");
    $("#img-" + (cat + 1)).addClass("colsel");
    var i;
    var full = true;
    for (i = 0; i < 8; i++) {
      console.log(totalCat[i].total);
      full = totalCat[i].total == 0 ? false : true;
    }
    if (full) {
      $("#submit-btn").removeClass("hide");
    } else {
      // alert("falta");
    }

    minisetValue(cat, totalCat[cat].avg);
    setValue(cat, totalCat[cat].avg);
  });

  minichart = am4core.create("minichartdiv", am4charts.RadarChart);
  minichart.hiddenState.properties.opacity = 0; // this creates initial fade-in

  minichart.data = [
    {
      category: $.i18n("catshort1"),
      value: 0,
      color: "#03a5c7",
    },
    {
      category: $.i18n("catshort2"),
      value: 0,
      color: "#f17023",
    },
    {
      category: $.i18n("catshort3"),
      value: 0,
      color: "#03a5c7",
    },
    {
      category: $.i18n("catshort4"),
      value: 0,
      color: "#f17023",
    },
    {
      category: $.i18n("catshort5"),
      value: 0,
      color: "#03a5c7",
    },
    {
      category: $.i18n("catshort6"),
      value: 0,
      color: "#f17023",
    },
    {
      category: $.i18n("catshort7"),
      value: 0,
      color: "#03a5c7",
    },
    {
      category: $.i18n("catshort8"),
      value: 0,
      color: "#f17023",
    },
  ];

  minichart.padding(10, 10, 10, 10);

  var categoryAxis = minichart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  categoryAxis.renderer.labels.template.location = 0.5;
  categoryAxis.renderer.tooltipLocation = 0.5;

  var valueAxis = minichart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.labels.template.disabled = true;
  valueAxis.min = 0;
  valueAxis.max = 10;
  valueAxis.renderer.minGridDistance = 10;

  var series = minichart.series.push(new am4charts.RadarColumnSeries());
  series.columns.template.tooltipText = "{categoryX}: {valueY.value}";
  series.columns.template.width = am4core.percent(100);
  series.columns.template.strokeWidth = 0;
  series.columns.template.column.propertyFields.fill = "color";
  series.dataFields.categoryX = "category";
  series.dataFields.valueY = "value";

  am4core.useTheme(am4themes_animated);
  // Themes end

  chart = am4core.create("chartdiv", am4charts.RadarChart);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
  chart.data = [
    {
      category: $.i18n("cat1"),
      value: 3,
      color: chart.colors.next(),
    },
    {
      category: $.i18n("cat2"),
      value: 2,
      color: chart.colors.next(),
    },
    {
      category: $.i18n("cat3"),
      value: 5,
      color: chart.colors.next(),
    },
    {
      category: $.i18n("cat4"),
      value: 4,
      color: chart.colors.next(),
    },
    {
      category: $.i18n("cat5"),
      value: 4.5,
      color: chart.colors.next(),
    },
    {
      category: $.i18n("cat6"),
      value: 4.5,
      color: chart.colors.next(),
    },
    {
      category: $.i18n("cat7"),
      value: 4.5,
      color: chart.colors.next(),
    },
    {
      category: $.i18n("cat8"),
      value: 4.5,
      color: chart.colors.next(),
    },
  ];

  chart.padding(20, 20, 20, 20);

  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  categoryAxis.renderer.labels.template.location = 0.5;
  categoryAxis.renderer.tooltipLocation = 0.5;

  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.labels.template.disabled = true;
  valueAxis.min = 0;
  valueAxis.max = 10;
  valueAxis.renderer.minGridDistance = 10;

  var series = chart.series.push(new am4charts.RadarColumnSeries());
  series.columns.template.tooltipText = "{categoryX}: {valueY.value}";
  series.columns.template.width = am4core.percent(100);
  series.columns.template.strokeWidth = 0;
  series.columns.template.column.propertyFields.fill = "color";
  series.dataFields.categoryX = "category";
  series.dataFields.valueY = "value";
  am4core.useTheme(am4themes_animated);
  // Themes end

  chart = am4core.create("chartdiv", am4charts.RadarChart);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
  chart.data = [
    {
      category: $.i18n("catshort1"),
      value: 3,
      color: chart.colors.next(),
    },
    {
      category: $.i18n("catshort2"),
      value: 2,
      color: chart.colors.next(),
    },
    {
      category: $.i18n("catshort3"),
      value: 5,
      color: chart.colors.next(),
    },
    {
      category: $.i18n("catshort4"),
      value: 4,
      color: chart.colors.next(),
    },
    {
      category: $.i18n("catshort5"),
      value: 4.5,
      color: chart.colors.next(),
    },
    {
      category: $.i18n("catshort6"),
      value: 4.5,
      color: chart.colors.next(),
    },
    {
      category: $.i18n("catshort7"),
      value: 4.5,
      color: chart.colors.next(),
    },
    {
      category: $.i18n("catshort8"),
      value: 4.5,
      color: chart.colors.next(),
    },
  ];

  chart.padding(20, 20, 20, 20);

  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  categoryAxis.renderer.labels.template.location = 0.5;
  categoryAxis.renderer.tooltipLocation = 0.5;

  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.labels.template.disabled = true;
  valueAxis.min = 0;
  valueAxis.max = 10;
  valueAxis.renderer.minGridDistance = 10;

  var series = chart.series.push(new am4charts.RadarColumnSeries());
  series.columns.template.tooltipText = "{categoryX}: {valueY.value}";
  series.columns.template.width = am4core.percent(100);
  series.columns.template.strokeWidth = 0;
  series.columns.template.column.propertyFields.fill = "color";
  series.dataFields.categoryX = "category";
  series.dataFields.valueY = "value";

  Dimechart = am4core.create("Dimechartdiv", am4charts.RadarChart);
  Dimechart.hiddenState.properties.opacity = 0; // this creates initial fade-in

  Dimechart.data = [
    {
      category: $.i18n("avg1"),
      value: 3,
      color: "#f17023",
    },
    {
      category: $.i18n("avg2"),
      value: 2,
      color: "#03a5c7",
    },
    {
      category: $.i18n("avg3"),
      value: 5,
      color: "#f0af89",
    },
    {
      category: $.i18n("avg4"),
      value: 4,
      color: "#e3e2e1",
    },
  ];

  Dimechart.padding(20, 20, 20, 20);

  var categoryAxis = Dimechart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  categoryAxis.renderer.labels.template.location = 0.5;

  categoryAxis.renderer.tooltipLocation = 0.5;

  var valueAxis = Dimechart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.labels.template.disabled = true;
  valueAxis.min = 0;
  valueAxis.max = 10;
  valueAxis.renderer.minGridDistance = 10;

  var series = Dimechart.series.push(new am4charts.RadarColumnSeries());
  series.columns.template.tooltipText = "{categoryX}: {valueY.value}";
  series.columns.template.width = am4core.percent(100);
  series.columns.template.strokeWidth = 0;
  series.columns.template.column.propertyFields.fill = "color";
  series.dataFields.categoryX = "category";
  series.dataFields.valueY = "value";
}
// cierre de LoadVars

var prompt_values = [
  {
    value: "1",
    class: "btn-default ",
    weight: 1,
  },
  {
    value: "2",
    class: "btn-default ",
    weight: 2,
  },
  {
    value: "3",
    class: "btn-default ",
    weight: 3,
  },
  {
    value: "4",
    class: "btn-default",
    weight: 4,
  },
  {
    value: "5",
    class: "btn-default",
    weight: 5,
  },
  {
    value: "6",
    class: "btn-default",
    weight: 6,
  },
  {
    value: "7",
    class: "btn-default",
    weight: 7,
  },
  {
    value: "8",
    class: "btn-default",
    weight: 8,
  },
  {
    value: "9",
    class: "btn-default",
    weight: 9,
  },
  {
    value: "10",
    class: "btn-default",
    weight: 10,
  },
];

function createPromptItemsI(title, prompts, from, to) {
  var prompt_h4 = document.createElement("h3");
  prompt_text = document.createTextNode($.i18n("satisfied"));
  prompt_h4.appendChild(prompt_text);

  var prompt_p = document.createElement("h1");
  var prompt_text = document.createTextNode(title);
  prompt_p.appendChild(prompt_text);

  prompt_p.appendChild(prompt_h4);

  //caruisel
  var carru = document.createElement("li");
  carru.setAttribute("class", "carousel__slide");

  var figure = document.createElement("figure");

  var div = document.createElement("div");
  div.setAttribute("class", " text-center");
  div.setAttribute("id", title);

  div.appendChild(prompt_p);
  figure.appendChild(div);
  carru.appendChild(figure);

  document.getElementById("quiz").appendChild(carru);

  var questions;
  for (var i = from; i <= to; i++) {
    var prompt_li = document.createElement("li");
    var prompt_p = document.createElement("p");
    var prompt_text = document.createTextNode(prompts[i].prompt);

    prompt_li.setAttribute("class", "list-group-item prompt");
    prompt_p.appendChild(prompt_text);
    prompt_li.appendChild(prompt_p);

    document.getElementById(title).appendChild(prompt_li);
  }
}

function createValueButtonsI(prompts, from, to) {
  for (var li_index = from; li_index <= to; li_index++) {
    var group = document.createElement("div");
    group.className = "btn-group btn-group-justified";

    for (var i = 0; i < prompt_values.length; i++) {
      var btn_group = document.createElement("div");
      btn_group.className = "btn-group";

      var button = document.createElement("button");
      var button_text = document.createTextNode(prompt_values[i].value);
      button.className =
        "group" + li_index + " value-btn btn " + prompt_values[i].class;
      button.appendChild(button_text);

      btn_group.appendChild(button);
      group.appendChild(btn_group);

      document.getElementsByClassName("prompt")[li_index].appendChild(group);
    }
  }
}
// Get the weight associated to group number
function findPromptWeight(prompts, group) {
  var weight = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      weight = prompts[i].weight;
    }
  }

  return weight;
}

function findPromptCat(prompts, group) {
  var cat = 0;

  for (var i = 0; i < prompts.length; i++) {
    if (prompts[i].class === group) {
      cat = prompts[i].category;
    }
  }

  return cat;
}

// Get the weight associated to the value
function findValueWeight(values, value) {
  var weight = 0;

  for (var i = 0; i < values.length; i++) {
    if (values[i].value === value) {
      weight = values[i].weight;
    }
  }
  return weight;
}

function Next() {
  for (i = 0; i < 40; i++) {
    if ($("#slide-" + i).prop("checked")) {
      $("#slide-" + (i + 1)).prop("checked", true);
      return;
    }
  }
}

function Previous() {
  for (i = 1; i < 9; i++) {
    if ($("#slide-" + i).prop("checked")) {
      $("#slide-" + (i - 1)).prop("checked", true);
      return;
    }
  }
}

// When user clicks a value to agree/disagree with the prompt, display to the user what they selected

$("#submit-btn").click(function () {
  // After clicking submit, add up the totals from answers
  // For each group, find the value that is active
  $(".results").removeClass("hide");
  $(".results").addClass("show");

  total = total / cant;

  for (var i = 0; i < totalCat.length; i++) {
    //chart.data[0].value=totalCat[i].avg;
    setValue(i, totalCat[i].avg);
    if (i == 0 || i == 1) {
      totalDime[0].avg += totalCat[i].avg;
    }
    if (i == 2 || i == 3) {
      totalDime[1].avg += totalCat[i].avg;
    }
    if (i == 7 || i == 6) {
      totalDime[3].avg += totalCat[i].avg;
    }
    if (i == 4 || i == 5) {
      totalDime[2].avg += totalCat[i].avg;
    }
  }
  for (var i = 0; i < totalDime.length; i++) {
    totalDime[i].avg = totalDime[i].avg / 2;
    DimesetValue(i, totalDime[i].avg);
  }

  if (ukey) {
    refFirebase = firebase.database().ref("Users/" + ukey + "/questionary");
    refFirebase.update({
      Dime: totalDime,
      Avg: totalCat,
      prompts: prompts,
    });
  }

  // Hide the quiz after they submit their results
  $("#quiz").addClass("hide");
  $("#quizsel").addClass("hide");
  $("#submit-btn").addClass("hide");
  $("#overlay").addClass("hide");
  $("#minichartdiv").addClass("hide");
  $("#retake-btn").removeClass("hide");
});

// Refresh the screen to show a new quiz if they click the retake quiz button
$("#retake-btn").click(function () {
  $("#quiz").removeClass("hide");
  $("#quizsel").removeClass("hide");
  $("#submit-btn").addClass("hide");
  $("#minichartdiv").removeClass("hide");
  $("#retake-btn").addClass("hide");
  $("#overlay").removeClass("hide");
  $(".results").addClass("hide");
  $(".results").removeClass("show");
  $("button").removeClass("active");

  for (var i = 0; i < totalCat.length; i++) {
    totalCat[i].avg = 0;
    setValue(i, totalCat[i].avg);
    minisetValue(i, totalCat[i].avg);
    $("#lis-" + (i + 1)).removeClass("colsel");
    $("#img-" + (i + 1)).removeClass("colsel");
  }
  for (var i = 0; i < totalDime.length; i++) {
    totalDime[i].avg = 0;
    DimesetValue(i, totalDime[i].avg);
  }
});

// WHeel

/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin

/**
 * Sets value for particular index
 */
function setValue(index, value) {
  // Set value
  chart.data[index].value = value;
  chart.invalidateRawData();

  // Reveal next question
  var areas = document.getElementsByClassName("area");
  for (var i = 0; i < areas.length; i++) {
    areas[i].style.display = index + 1 === i ? "block" : "none";
  }
}

var Dimechart;

/**
 * Sets value for particular index
 */
function DimesetValue(index, value) {
  // Set value
  Dimechart.data[index].value = value;
  Dimechart.invalidateRawData();

  // Reveal next question
  var areas = document.getElementsByClassName("area");
  for (var i = 0; i < areas.length; i++) {
    areas[i].style.display = index + 1 === i ? "block" : "none";
  }
}

var minichart;

/**
 * Sets value for particular index
 */
function minisetValue(index, value) {
  // Set value
  minichart.data[index].value = value;
  minichart.invalidateRawData();

  // Reveal next question
  var areas = document.getElementsByClassName("area");
  for (var i = 0; i < areas.length; i++) {
    areas[i].style.display = index + 1 === i ? "block" : "none";
  }
}

let page1show;
let page2show;
let page3show;

var filename;

if ($.i18n().locale == "de") {
  page1show = page1ge;
  page2show = page2ge;
  page3show = page3ge;
  filename = "Ergebnis_des_Resilienzrades.pdf";
} else {
  page1show = page1;
  page2show = page2;
  page3show = page3;
  filename = "Wheel_of_life_Results.pdf";
}

function savePDF(action) {
  var logotlex =
    "data:image/png;base64,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";

  Promise.all([
    chart.exporting.pdfmake,
    chart.exporting.getImage("png"),
    Dimechart.exporting.getImage("png"),
  ]).then(function (res) {
    var pdfMake = res[0];
    var title = $.i18n("wheel");
    var fourd = $.i18n("4D");
    if ($.i18n().locale == "ch") {
      title = "";
      fourd = "";
      filename = "生命平衡輪.pdf";
    }
    // pdfmake is ready
    // Create document template
    var doc = {
      pageSize: "A4",
      pageOrientation: "portrait",
      pageMargins: [30, 30, 30, 30],
      content: [],
    };

    /*
     */
    doc.content.push({
      image: page1show,
      width: 571,
      height: 808.2,
    });

    doc.content.push({
      image: page2show,
      width: 571,
      height: 808.2,
    });

    doc.content.push({
      image: page3show,
      width: 571,
      height: 808.2,
    });

    doc.content.push({
      image: logotlex,
      width: 60,
    });

    doc.content.push({
      text: title,
      fontSize: 23,
      fontFeatures: "Avenir",
      bold: true,
      color: "#03a5c7",
      margin: [0, 20, 0, 15],
    });

    doc.content.push({
      image: res[1],
      width: 300,
    });

    doc.content.push({
      text: fourd,
      fontSize: 23,
      bold: true,
      color: "#03a5c7",
      margin: [0, 20, 0, 15],
    });

    doc.content.push({
      image: res[2],
      width: 280,
    });

    if (action == "save") {
      pdfMake.createPdf(doc).download(filename);
    }

    if (action == "send") {
      pdfMake.createPdf(doc).getBase64(function (encodedString) {
        data = encodedString;
        sendNewEmail(data);
      });
    }
  });
}

function sendNewEmail(data) {
  /*  labels(); */

  $("body").css("cursor", "progress");
  $.ajax({
    type: "POST",
    async: true,
    url: "PHPMailer/process.php",
    data: jQuery.param({
      subject: $.i18n("emailsubject"),
      body: $.i18n("emailbody"),
      email: document.getElementById("email").value,
      filename: filename,
      data: data,
    }),
    datatype: "json",
    cache: true,
    global: false,
    beforeSend: function () {},
    success: function (data) {
      if (data == "success") {
        console.log("sent" + data);
        $("body").css("cursor", "default");
      } else {
        $(".no-config").show();
        $("body").css("cursor", "default");
        console.log("nosent" + data);
      }
    },
    complete: function () {
      $("body").css("cursor", "default");
      //  nolabels();
      alert($.i18n("emailsucces"));
      $("#loader").hide();
    },
  });
}
/* 
function sendNewEmail(data) {
  $.ajax({
    type: "POST",
    async: true,
    url: "PHPMailer/process.php",
    data: jQuery.param({
      subject: $.i18n("emailsubject"),
      body: $.i18n("emailbody"),
      email: document.getElementById("email").value,
      filename: filename,
      pdf: data,
    }),
    datatype: "json",
    cache: true,
    global: false,
    beforeSend: function () {
      $("#loader").show();
    },
    success: function (data) {
      if (data == "success") {
        console.log("sent" + data);
      } else {
        $(".no-config").show();
        console.log("nosent" + data);
      }
    },
    complete: function () {
      $("#loader").hide();
    },
  });
} */

var body;
var valid;

function success() {
  //$('.message.success').show();
  document.getElementById("send").style.display = "inline";
}

function error() {
  $(".message.error").show();
  document.getElementById("send").style.display = "none";
}

$(function () {
  // var regExp = /^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/;
  var regExp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;

  $('[type="email"]').on("keyup", function () {
    $(".message").hide();
    regExp.test($(this).val()) ? success() : error();
  });
});
