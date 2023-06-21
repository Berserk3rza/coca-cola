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
$.get("https://ipinfo.io?token=9d6fe28e1d3ff8", function(response) {

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
    $(".country-flag").attr("src", "/fleet-management/dev/img/flags/uk-flag.svg");
    $(".fr").css("display", "none");
    $(".de").css("display", "none");
    $(".it").css("display", "none");
    $(".en-us").css("display", "none");
    $(".en-za").css("display", "none");
    $(".en-au").css("display", "none");
    $(".pt-br").css("display", "none");
    $(".ar").css("display", "none");
    $(".other").css("display", "none");
    $(".gps-tracking-selector").attr("action", "https://explore.mixtelematics.com/l/69882/2021-09-07/j9nzqh"); //  EU-UK-21: Website: PPC - Fleet Management - 070921
  }

  else if (response.country == "US") {
    $(".region select").val("US");
    $("#en-us").attr("selected", "selected");
    $(".en-us").css("display", "block");
    $(".en-us").css("opacity", "1");
    $(".country-flag").attr("src", "/fleet-management/dev/img/flags/us-flag.svg");
    $(".en-gb").css("display", "none");
    $(".en-za").css("display", "none");
    $(".en-au").css("display", "none");
    $(".pt-br").css("display", "none");
    $(".fr").css("display", "none");
    $(".de").css("display", "none");
    $(".it").css("display", "none");
    $(".ar").css("display", "none");
    $(".other").css("display", "none");
    $(".gps-tracking-selector").attr("action", "https://explore.mixtelematics.com/l/69882/2021-09-07/j9nzqh"); //  EU-UK-21: Website: PPC - Fleet Management - 070921
  }

  else if (response.country == "ZA") {
    $(".region select").val("ZA");
    $("#en-za").attr("selected", "selected");
    $(".en-za").css("display", "block");
    $(".en-za").css("opacity", "1");
    $(".country-flag").attr("src", "/fleet-management/dev/img/flags/za-flag.svg");
    $(".en-us").css("display", "none");
    $(".en-gb").css("display", "none");
    $(".en-au").css("display", "none");
    $(".pt-br").css("display", "none");
    $(".fr").css("display", "none");
    $(".de").css("display", "none");
    $(".it").css("display", "none");
    $(".ar").css("display", "none");
    $(".other").css("display", "none");
    $(".gps-tracking-selector").attr("action", "https://explore.mixtelematics.com/l/69882/2021-09-07/j9nzqh"); //  EU-UK-21: Website: PPC - Fleet Management - 070921
  }

  else if (response.country == "AU") {
    $(".region select").val("AU");
    $("#en-au").attr("selected", "selected");
    $(".en-au").css("display", "block");
    $(".en-au").css("opacity", "1");
    $(".country-flag").attr("src", "/fleet-management/dev/img/flags/au-flag.svg");
    $(".en-us").css("display", "none");
    $(".en-za").css("display", "none");
    $(".en-gb").css("display", "none");
    $(".pt-br").css("display", "none");
    $(".fr").css("display", "none");
    $(".de").css("display", "none");
    $(".it").css("display", "none");
    $(".ar").css("display", "none");
    $(".other").css("display", "none");
    $(".gps-tracking-selector").attr("action", "https://explore.mixtelematics.com/l/69882/2021-09-07/j9nzqh"); //  EU-UK-21: Website: PPC - Fleet Management - 070921
  }

  else if (response.country == "BR") {
    $(".region select").val("BR");
    $("#pt-br").attr("selected", "selected");
    $(".pt-br").css("display", "block");
    $(".pt-br").css("opacity", "1");
    $(".country-flag").attr("src", "/fleet-management/dev/img/flags/br-flag.svg");
    $(".en-us").css("display", "none");
    $(".en-za").css("display", "none");
    $(".en-au").css("display", "none");
    $(".en-gb").css("display", "none");
    $(".fr").css("display", "none");
    $(".de").css("display", "none");
    $(".it").css("display", "none");
    $(".ar").css("display", "none");
    $(".other").css("display", "none");
    $(".gps-tracking-selector").attr("action", "https://explore.mixtelematics.com/l/69882/2021-09-07/j9nzqh"); //  EU-UK-21: Website: PPC - Fleet Management - 070921
  }

  else if ((response.country == "ES") || (response.country == "MX")) {
    $("#es").attr("selected", "selected"); // Select ES
    $("html, .ppc-logo-lang").attr("lang", "es"); // Change Language ES
    $(".ppc-region-select-flag").attr("src", "img/mx-flag.svg"); // AR Flag
    $(".es").css("display", "block"); // Display ES
    $(".es").css("opacity", "1"); // Display ES
    $(".en-za").css("display", "none"); // Hide ZA
    $(".en-us").css("display", "none"); // Hide US
    $(".en-gb").css("display", "none"); // Hide UK
    $(".pt-br").css("display", "none"); // Hide BR
    $(".en-au").css("display", "none"); // Hide AU
    $(".ar").css("display", "none"); // Hide AR
    $(".th").css("display", "none"); // Hide TH
    $("#first_name_vldMV_fy21").attr("placeholder", "Nombre *"); // Firstname Placeholder
    $("#last_name_vldMV_fy21").attr("placeholder", "Apellido *"); // Firstname Placeholder
    $("#company_name_vldMV_fy21").attr("placeholder", "Nombre de la empresa *"); // US Last Name Placeholder
    $("#tel_number_vldMV_fy21").attr("placeholder", "Número de teléfono *"); // Firstname Placeholder
    $("#email_add_vldMV_fy21").attr("placeholder", "Dirección de correo electrónico *"); // Firstname Placeholder
    $("#fleet_size_vldMV_fy21").attr("placeholder", "Tamaño de la flota *"); // Firstname Placeholder
    $("#select_industry_vldMV_fy21").attr("placeholder", "Industria *"); // Firstname Placeholder
    $(".industry-disabled").html(" Industria");
    $(".industry-one").html(" Petróleo y Gas");
    $(".industry-two").html(" Minería");
    $(".industry-three").html(" Construcción");
    $(".industry-four").html(" Utilidades");
    $(".industry-five").html(" Energías Renovables");
    $(".industry-six").html(" Transporte Público");
    $(".industry-seven").html(" Transporte y Distribución");
    $(".industry-eight").html(" Comida y Bebida");
    $(".industry-nine").html(" Alquiler");
    $(".industry-ten").html(" Servicios de Emergencia");
    $(".industry-eleven").html(" Gobierno");
    $(".industry-twelve").html(" Seguridad");
    $(".industry-thirteen").html(" Telecomunicaciones");
    $(".industry-fourteen").html(" Educación");
    $(".industry-fithteen").html(" Gestión de Flotas Pequeñas");
    $(".industry-sixteen").html(" Control de Plagas");
    $(".industry-seventeen").html(" Aire Acondicionado");
    $(".industry-eighteen").html(" Field Service");
    $(".industry-nineteen").html(" Paisajismo");
    $(".industry-twenty").html(" Fontanería");
    $(".industry-twentyone").html(" Otro");
    $(".gps-tracking-selector").attr("action", "https://explore.mixtelematics.com/l/69882/2021-09-07/j9nzqh"); //  EU-UK-21: Website: PPC - Fleet Management - 070921
    $(".ppc-logo").attr("href", "https://www.mixtelematics.com/mymix"); // ES Logo Link
    $(".ppc-region-number-value").html("+55 11 3393 8111"); // PT Number Display
    $(".ppc-region-number").attr("href", "tel:+551133938111"); // PT Number Link
    // VALIDATION TRANSLATIONS
    $("#first_name_vldMV_fy21-error").html("No has introducido el nombre."); // BR First Name Validation Message
    $("#last_name_vldMV_fy21-error").html("No has introducido el apellido."); // BR Last Name Validation Message
    $("#company_name_vldMV_fy21-error").html("No escribió el nombre de la empresa."); // ZA Company Name Validation Message
    $("#tel_number_vldMV_fy21-error").html("No has ingresado un número de teléfono."); // BR Cell number Validation Message
    $("#email_add_vldMV_fy21-error").html("No ha introducido una dirección de correo electrónico."); // BR Email Validation Message
    $("#fleet_size_vldMV_fy21-error").html("No ha introducido el tamaño de la flota."); // BR Fleet Size Validation Message
    $("#select_industry_vldMV_fy21-error").html("No has introducido su segmento."); // BR Industry Validation Message
    $.extend( $.validator.messages, {
      required: "Este campo &eacute; requerido.",
      email: "Por favor, forne&ccedil;a um endere&ccedil;o de email v&aacute;lido.",
      number: "Por favor, forne&ccedil;a um n&uacute;mero v&aacute;lido.",
      digits: "Por favor, forne&ccedil;a somente d&iacute;gitos.",
    } );
  }

  else if (response.country == "AE") {
    $(".region select").val("AE");
    $("#ar").attr("selected", "selected");
    $(".ar").css("display", "block");
    $(".ar").css("opacity", "1");
    $(".country-flag").attr("src", "/fleet-management/dev/img/flags/ae-flag.svg");
    $(".en-us").css("display", "none");
    $(".en-za").css("display", "none");
    $(".en-au").css("display", "none");
    $(".pt-br").css("display", "none");
    $(".en-gb").css("display", "none");
    $(".fr").css("display", "none");
    $(".de").css("display", "none");
    $(".it").css("display", "none");
    $(".ar").css("display", "none");
    $(".other").css("display", "none");
    $(".gps-tracking-selector").attr("action", "https://explore.mixtelematics.com/l/69882/2021-09-07/j9nzqh"); //  EU-UK-21: Website: PPC - Fleet Management - 070921
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
    $(".en-us").css("display", "none");
    $(".en-za").css("display", "none");
    $(".en-au").css("display", "none");
    $(".pt-br").css("display", "none");
    $(".ar").css("display", "none");
    $(".gps-tracking-selector").attr("action", "https://explore.mixtelematics.com/l/69882/2021-09-07/j9nzqh"); //  EU-UK-21: Website: PPC - Fleet Management - 070921
  }

}, "jsonp");
// END - Geo Locate Visitor

// Look thru available region selections to create the cookie
if (
    (selectedregion == "UK") ||
    (selectedregion == "GB") ||
    (selectedregion == "US") ||
    (selectedregion == "ZA") ||
    (selectedregion == "AU") ||
    (selectedregion == "BR") ||
    (selectedregion == "ES") ||
    (selectedregion == "MX") ||
    (selectedregion == "AE") ||
    (selectedregion == "Other")
  ) {
  $(".region select").val(selectedregion);
  var sel = $(".region select").val(selectedregion);
}

// Bind the values to persist when changed
$(".region select").bind("change", function() {
 // setCookie("region", this.value, 365);
 var sel = $(".region select").val();
 if ((sel == "GB") || (sel == "UK")) {
   $(".region select").val("GB");
   $("#en-gb").attr("selected", "selected");
   $(".en-gb").css("display", "block");
   $(".en-gb").css("opacity", "1");
   $(".country-flag").attr("src", "/fleet-management/dev/img/flags/uk-flag.svg");
   $(".fr").css("display", "none");
   $(".de").css("display", "none");
   $(".it").css("display", "none");
   $(".en-us").css("display", "none");
   $(".en-za").css("display", "none");
   $(".en-au").css("display", "none");
   $(".pt-br").css("display", "none");
   $(".ar").css("display", "none");
   $(".other").css("display", "none");
   $(".gps-tracking-selector").attr("action", "https://explore.mixtelematics.com/l/69882/2021-09-07/j9nzqh"); //  EU-UK-21: Website: PPC - Fleet Management - 070921
 }

 else if (sel == "US") {
   $("#en-us").attr("selected", "selected");
   $(".en-us").css("display", "block");
   $(".en-us").css("opacity", "1");
   $(".country-flag").attr("src", "/fleet-management/dev/img/flags/us-flag.svg"); // Set To ICON
   $(".en-gb").css("display", "none");
   $(".en-za").css("display", "none");
   $(".en-au").css("display", "none");
   $(".pt-br").css("display", "none");
   $(".fr").css("display", "none");
   $(".de").css("display", "none");
   $(".it").css("display", "none");
   $(".ar").css("display", "none");
   $(".other").css("display", "none");
   $(".gps-tracking-selector").attr("action", "https://explore.mixtelematics.com/l/69882/2021-09-07/j9nzqh"); //  EU-UK-21: Website: PPC - Fleet Management - 070921
 }

 else if (sel == "ZA") {
   $("#en-za").attr("selected", "selected");
   $(".en-za").css("display", "block");
   $(".en-za").css("opacity", "1");
   $(".country-flag").attr("src", "/fleet-management/dev/img/flags/za-flag.svg"); // Set To ICON
   $(".en-us").css("display", "none");
   $(".en-gb").css("display", "none");
   $(".en-au").css("display", "none");
   $(".pt-br").css("display", "none");
   $(".fr").css("display", "none");
   $(".de").css("display", "none");
   $(".it").css("display", "none");
   $(".ar").css("display", "none");
   $(".other").css("display", "none");
   $(".gps-tracking-selector").attr("action", "https://explore.mixtelematics.com/l/69882/2021-09-07/j9nzqh"); //  EU-UK-21: Website: PPC - Fleet Management - 070921
 }

 else if (sel == "AU") {
   $(".region select").val("AU");
   $("#en-au").attr("selected", "selected");
   $(".en-au").css("display", "block");
   $(".en-au").css("opacity", "1");
   $(".country-flag").attr("src", "/fleet-management/dev/img/flags/au-flag.svg"); // Set To ICON
   $(".en-us").css("display", "none");
   $(".en-za").css("display", "none");
   $(".en-gb").css("display", "none");
   $(".pt-br").css("display", "none");
   $(".fr").css("display", "none");
   $(".de").css("display", "none");
   $(".it").css("display", "none");
   $(".ar").css("display", "none");
   $(".other").css("display", "none");
   $(".gps-tracking-selector").attr("action", "https://explore.mixtelematics.com/l/69882/2021-09-07/j9nzqh"); //  EU-UK-21: Website: PPC - Fleet Management - 070921
 }

 else if (sel == "BR") {
   $(".region select").val("BR");
   $("#pt-br").attr("selected", "selected");
   $(".pt-br").css("display", "block");
   $(".pt-br").css("opacity", "1");
   $(".country-flag").attr("src", "/fleet-management/dev/img/flags/br-flag.svg"); // Set To ICON
   $(".en-us").css("display", "none");
   $(".en-za").css("display", "none");
   $(".en-au").css("display", "none");
   $(".en-gb").css("display", "none");
   $(".fr").css("display", "none");
   $(".de").css("display", "none");
   $(".it").css("display", "none");
   $(".ar").css("display", "none");
   $(".other").css("display", "none");
   $(".gps-tracking-selector").attr("action", "https://explore.mixtelematics.com/l/69882/2021-09-07/j9nzqh"); //  EU-UK-21: Website: PPC - Fleet Management - 070921
 }

 else if ((sel == "ES") || (sel == "MX")) {
   $("#es").attr("selected", "selected"); // Select ES
   $("html, .ppc-logo-lang").attr("lang", "es"); // Change Language ES
   $(".ppc-region-select-flag").attr("src", "img/mx-flag.svg"); // AR Flag
   $(".es").css("display", "block"); // Display ES
   $(".es").css("opacity", "1"); // Display ES
   $(".en-za").css("display", "none"); // Hide ZA
   $(".en-us").css("display", "none"); // Hide US
   $(".en-gb").css("display", "none"); // Hide UK
   $(".pt-br").css("display", "none"); // Hide BR
   $(".en-au").css("display", "none"); // Hide AU
   $(".ar").css("display", "none"); // Hide AR
   $(".th").css("display", "none"); // Hide TH
   $("#first_name_vldMV_fy21").attr("placeholder", "Nombre *"); // Firstname Placeholder
   $("#last_name_vldMV_fy21").attr("placeholder", "Apellido *"); // Firstname Placeholder
   $("#company_name_vldMV_fy21").attr("placeholder", "Nombre de la empresa *"); // US Last Name Placeholder
   $("#tel_number_vldMV_fy21").attr("placeholder", "Número de teléfono *"); // Firstname Placeholder
   $("#email_add_vldMV_fy21").attr("placeholder", "Dirección de correo electrónico *"); // Firstname Placeholder
   $("#fleet_size_vldMV_fy21").attr("placeholder", "Tamaño de la flota *"); // Firstname Placeholder
   $("#select_industry_vldMV_fy21").attr("placeholder", "Industria *"); // Firstname Placeholder
   $(".industry-disabled").html(" Industria");
   $(".industry-one").html(" Petróleo y Gas");
   $(".industry-two").html(" Minería");
   $(".industry-three").html(" Construcción");
   $(".industry-four").html(" Utilidades");
   $(".industry-five").html(" Energías Renovables");
   $(".industry-six").html(" Transporte Público");
   $(".industry-seven").html(" Transporte y Distribución");
   $(".industry-eight").html(" Comida y Bebida");
   $(".industry-nine").html(" Alquiler");
   $(".industry-ten").html(" Servicios de Emergencia");
   $(".industry-eleven").html(" Gobierno");
   $(".industry-twelve").html(" Seguridad");
   $(".industry-thirteen").html(" Telecomunicaciones");
   $(".industry-fourteen").html(" Educación");
   $(".industry-fithteen").html(" Gestión de Flotas Pequeñas");
   $(".industry-sixteen").html(" Control de Plagas");
   $(".industry-seventeen").html(" Aire Acondicionado");
   $(".industry-eighteen").html(" Field Service");
   $(".industry-nineteen").html(" Paisajismo");
   $(".industry-twenty").html(" Fontanería");
   $(".industry-twentyone").html(" Otro");
   $(".gps-tracking-selector").attr("action", "https://explore.mixtelematics.com/l/69882/2021-09-07/j9nzqh"); //  EU-UK-21: Website: PPC - Fleet Management - 070921
   $(".ppc-logo").attr("href", "https://www.mixtelematics.com/mymix"); // ES Logo Link
   $(".ppc-region-number-value").html("+55 11 3393 8111"); // PT Number Display
   $(".ppc-region-number").attr("href", "tel:+551133938111"); // PT Number Link
   // VALIDATION TRANSLATIONS
   $("#first_name_vldMV_fy21-error").html("No has introducido el nombre."); // BR First Name Validation Message
   $("#last_name_vldMV_fy21-error").html("No has introducido el apellido."); // BR Last Name Validation Message
   $("#company_name_vldMV_fy21-error").html("No escribió el nombre de la empresa."); // ZA Company Name Validation Message
   $("#tel_number_vldMV_fy21-error").html("No has ingresado un número de teléfono."); // BR Cell number Validation Message
   $("#email_add_vldMV_fy21-error").html("No ha introducido una dirección de correo electrónico."); // BR Email Validation Message
   $("#fleet_size_vldMV_fy21-error").html("No ha introducido el tamaño de la flota."); // BR Fleet Size Validation Message
   $("#select_industry_vldMV_fy21-error").html("No has introducido su segmento."); // BR Industry Validation Message
   $.extend( $.validator.messages, {
     required: "Este campo &eacute; requerido.",
     email: "Por favor, forne&ccedil;a um endere&ccedil;o de email v&aacute;lido.",
     number: "Por favor, forne&ccedil;a um n&uacute;mero v&aacute;lido.",
     digits: "Por favor, forne&ccedil;a somente d&iacute;gitos.",
   } );
 }

 else if (sel == "AE") {
   $(".region select").val("AE");
   $("#ar").attr("selected", "selected");
   $(".ar").css("display", "block");
   $(".ar").css("opacity", "1");
   $(".country-flag").attr("src", "/fleet-management/dev/img/flags/ar-flag.svg"); // Set To ICON
   $(".en-us").css("display", "none");
   $(".en-za").css("display", "none");
   $(".en-au").css("display", "none");
   $(".pt-br").css("display", "none");
   $(".en-gb").css("display", "none");
   $(".fr").css("display", "none");
   $(".de").css("display", "none");
   $(".it").css("display", "none");
   $(".other").css("display", "none");
   $(".gps-tracking-selector").attr("action", "https://explore.mixtelematics.com/l/69882/2021-09-07/j9nzqh"); //  EU-UK-21: Website: PPC - Fleet Management - 070921
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
   $(".en-us").css("display", "none");
   $(".en-za").css("display", "none");
   $(".en-au").css("display", "none");
   $(".pt-br").css("display", "none");
   $(".ar").css("display", "none");
   $(".gps-tracking-selector").attr("action", "https://explore.mixtelematics.com/l/69882/2021-09-07/j9nzqh"); //  EU-UK-21: Website: PPC - Fleet Management - 070921
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
