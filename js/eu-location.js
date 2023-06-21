var userLang = navigator.language || navigator.userLanguage || navigator.systemLanguage;
// var userLang = navigator.language.substr(3).toUpperCase() || navigator.userLanguage || navigator.systemLanguage;
var regionSelect = document.getElementById("region");
var selectedregion = readCookie("region");

// Display Users Browser Language & Selected Region
$('.browser-results').html(userLang);
// $('.browser-selected').html(selectedregion);
$('.region-selected').html(regionSelect);

// console.log(userLang);

// Geo Locate Visitor
$.get("https://ipinfo.io?token=c87f828c89371a", function(response) {

  $("#welcomeRegion").html(response.region);
  $(".other-title").html(response.region);
  $(".other-region").html(response.region);
  $('.browser-json').html(response.country);
  $(".detected-city").html(response.city);
  $("#detectedCity").attr("value", (response.city));
  $("#detectedCountry").attr("value", (response.country));
  $("#supportRegion").attr("value", (response.region));
  // var sel = $(".region select").val();
  if ((response.country == "GB") || (response.country == "UK"))  {
    $(".region select").val("GB");
    $("#en-gb").attr("selected", "selected");
    $(".en-gb").css("display", "block");
    $(".en-gb").css("opacity", "1");
    $(".fr").css("display", "none");
    $(".de").css("display", "none");
    $(".it").css("display", "none");
    $(".other").css("display", "none");
    $(".form-selector").attr("action", "handlers/eu-sales-handler.php");
    $(".form-selector").attr("data-validation", "validate-gb"); // Validate EN Form
  }
  else if (response.country == "FR") {
    $(".region select").val("FR");
    $("#fr").attr("selected", "selected");
    $(".fr").css("display", "block");
    $(".fr").css("opacity", "1");
    $(".de").css("display", "none");
    $(".it").css("display", "none");
    $(".en-gb").css("display", "none");
    $(".other").css("display", "none");
    $(".form-selector").attr("action", "handlers/eu-sales-handler.php");
    $(".form-selector").attr("data-validation", "validate-fr"); // Validate EN Form
  }
  else if (response.country == "DE") {
    $(".region select").val("DE");
    $("#de").attr("selected", "selected");
    $(".de").css("display", "block");
    $(".de").css("opacity", "1");
    $(".fr").css("display", "none");
    $(".it").css("display", "none");
    $(".en-gb").css("display", "none");
    $(".other").css("display", "none");
    $(".form-selector").attr("action", "handlers/eu-sales-handler.php");
    $(".form-selector").attr("data-validation", "validate-de"); // Validate EN Form
  }
  else if (response.country == "IT") {
    $(".region select").val("IT");
    $("#it").attr("selected", "selected");
    $(".it").css("display", "block");
    $(".it").css("opacity", "1");
    $(".de").css("display", "none");
    $(".fr").css("display", "none");
    $(".en-gb").css("display", "none");
    $(".other").css("display", "none");
    $(".form-selector").attr("action", "handlers/eu-sales-handler.php");
    $(".form-selector").attr("data-validation", "validate-it"); // Validate EN Form
  }
  else {
    $(".region select").val("Other");
    $("#other").attr("selected", "selected");
    $(".other").css("display", "block");
    $(".other").css("opacity", "1");
    $(".en-gb").css("display", "none");
    $(".fr").css("display", "none");
    $(".de").css("display", "none");
    $(".it").css("display", "none");
    $(".form-selector").attr("action", "handlers/eu-sales-handler.php");
    $(".form-selector").attr("data-validation", "validate-en"); // Validate EN Form
  }
  console.log(response.country + " Detected");
}, "jsonp");
// END - Geo Locate Visitor

// Look thru available region selections to create the cookie
if (
    (selectedregion == "UK") ||
    (selectedregion == "GB") ||
    (selectedregion == "FR") ||
    (selectedregion == "DE") ||
    (selectedregion == "IT") ||
    (selectedregion == "Other")
  ) {
  $(".region select").val(selectedregion);
  var sel = $(".region select").val(selectedregion);
}

// Bind the values to persist when changed
$(".region select").bind("change", function() {
 // setCookie("region", this.value, 365);
 var sel = $(".region select").val();
 if (sel == "GB") {
   $(".region select").val("GB");
   $("#en-gb").attr("selected", "selected");
   $(".en-gb").css("display", "block");
   $(".en-gb").css("opacity", "1");
   $(".fr").css("display", "none");
   $(".de").css("display", "none");
   $(".it").css("display", "none");
   $(".other").css("display", "none");
   $(".form-selector").attr("action", "handlers/eu-sales-handler.php");
   $(".form-selector").attr("data-validation", "validate-gb"); // Validate EN Form
   console.log(sel);
 }
 else if (sel == "FR") {
   $(".region select").val("FR");
   $("#fr").attr("selected", "selected");
   $(".fr").css("display", "block");
   $(".fr").css("opacity", "1");
   $(".pl").css("display", "none");
   $(".es").css("display", "none");
   $(".en-gb").css("display", "none");
   $(".other").css("display", "none");
   $(".form-selector").attr("action", "handlers/eu-sales-handler.php");
   $(".form-selector").attr("data-validation", "validate-fr"); // Validate EN Form
   console.log(sel);
 }
 else if (sel == "DE") {
   $(".region select").val("DE");
   $("#de").attr("selected", "selected");
   $(".de").css("display", "block");
   $(".de").css("opacity", "1");
   $(".fr").css("display", "none");
   $(".it").css("display", "none");
   $(".en-gb").css("display", "none");
   $(".other").css("display", "none");
   $(".form-selector").attr("action", "handlers/eu-sales-handler.php");
   $(".form-selector").attr("data-validation", "validate-de");
   console.log(sel);
 }
 else if (sel == "IT") {
   $(".region select").val("IT");
   $("#it").attr("selected", "selected");
   $(".it").css("display", "block");
   $(".it").css("opacity", "1");
   $(".de").css("display", "none");
   $(".fr").css("display", "none");
   $(".en-gb").css("display", "none");
   $(".other").css("display", "none");
   $(".form-selector").attr("action", "handlers/eu-sales-handler.php");
   $(".form-selector").attr("data-validation", "validate-it"); // Validate EN Form
   console.log(sel);
 }
 else {
   $(".region select").val("Other");
   $("#other").attr("selected", "selected");
   $(".other").css("display", "block");
   $(".other").css("opacity", "1");
   $(".en-gb").css("display", "none");
   $(".fr").css("display", "none");
   $(".de").css("display", "none");
   $(".it").css("display", "none");
   $(".form-selector").attr("action", "handlers/eu-sales-handler.php");
   $(".form-selector").attr("data-validation", "validate-en"); // Validate EN Form
   console.log(sel);
 }
});

// Browser Cache the Selected Value via a Cookie
function saveregion(cookieValue) {
  var sel = document.getElementById("regionSelect");
  setCookie("region", cookieValue, 365);
}

function setCookie(cookieName, cookieValue, nDays) {
 var today = new Date();
 var expire = new Date();

 if (nDays==null || nDays==0)
     nDays=1;

expire.setTime(today.getTime() + 3600000*24*nDays);
 document.cookie = cookieName+"="+escape(cookieValue) + ";expires="+expire.toGMTString();
}

function readCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i = 0; i < ca.length; i++) {
 var c = ca[i];
 while (c.charAt(0) == ' ') c = c.substring(1, c.length);
 if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
}
  return null;
}
