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

    fetch("json/names.json")
     .then(response => response.json())
     .then(countries => {
       var countries = (countries);
       var foundCountryCode = (response.country);
       var countryName = countries[foundCountryCode];
       $(".detected-city").html(countryName);
     });

    // var sel = $(".region select").val();
    if (response.country == "US") {
      $(".region select").val("US");
      $("#en-us").attr("selected", "selected");
      $(".en-us").css("display", "block");
      $(".en-us").css("opacity", "1");
      $(".country-flag").attr("src", "https://www.mixtelematics.com/js/location/img/us-flag.svg");
      $(".en-gb").css("display", "none");
      $(".en-za").css("display", "none");
      $(".en-au").css("display", "none");
      $(".pt-br").css("display", "none");
      $(".ar").css("display", "none");
      $(".es").css("display", "none");
      $(".other").css("display", "none");
      $(".mixfleet").css("display", "block");
      $("#mix_firstname").attr("placeholder", "First Name *"); // Firstname Placeholder
      $("#mix_lastname").attr("placeholder", "Last Name *"); // Firstname Placeholder
      $("#mix_company").attr("placeholder", "Company *"); // US Last Name Placeholder
      $("#mix_phone").attr("placeholder", "Contact Number *"); // Firstname Placeholder
      $("#mix_email").attr("placeholder", "E-mail *"); // Firstname Placeholder
      $("#message").attr("placeholder", "Message *"); // Firstname Placeholder
      $("#mix_fleet_size").attr("placeholder", "Fleet Size *"); // Firstname Placeholder
      $(".industry-disabled").html(" Industry ");
      $(".mixind").css("display", "none");
      $(".mixadd").css("display", "none");
      $(".mixcit").css("display", "none");
      $(".mixsta").css("display", "none");
      $(".mixzip").css("display", "none");
      $(".mixcnpj").css("display", "none");
      $(".mixcou").css("display", "none");
      $(".con-selector").attr("action", "https://www.mixtelematics.com/construction/handlers/us-handler.php"); // FY22-US: Industry LP .com - 020222
      $(".ppc-region-number-value").html("561-717-3111"); // US Number Display
      $(".ppc-region-number").attr("href", "tel:5617173111"); // US Number Link
      $(".ppc-region-mail").attr("href", "https://us.mixtelematics.com/#/login"); // US Login Link
      // Not in use
      $("#mix_firstname-error").html("EN FIRST NAME");
    }

    else if (response.country == "ZA") {
      $(".region select").val("ZA");
      $("#en-za").attr("selected", "selected");
      $(".en-za").css("display", "block");
      $(".en-za").css("opacity", "1");
      $(".country-flag").attr("src", "https://www.mixtelematics.com/js/location/img/za-flag.svg");
      $(".en-us").css("display", "none");
      $(".en-gb").css("display", "none");
      $(".en-au").css("display", "none");
      $(".pt-br").css("display", "none");
      $(".ar").css("display", "none");
      $(".es").css("display", "none");
      $(".other").css("display", "none");
      $(".mixfleet").css("display", "block");
      $("#mix_firstname").attr("placeholder", "First Name *"); // Firstname Placeholder
      $("#mix_lastname").attr("placeholder", "Last Name *"); // Firstname Placeholder
      $("#mix_company").attr("placeholder", "Company *"); // US Last Name Placeholder
      $("#mix_phone").attr("placeholder", "Contact Number *"); // Firstname Placeholder
      $("#mix_email").attr("placeholder", "E-mail *"); // Firstname Placeholder
      $("#message").attr("placeholder", "Message *"); // Firstname Placeholder
      $("#mix_fleet_size").attr("placeholder", "Fleet Size *"); // Firstname Placeholder
      $(".industry-disabled").html(" Industry ");
      $(".mixind").css("display", "none");
      $(".mixadd").css("display", "none");
      $(".mixcit").css("display", "none");
      $(".mixsta").css("display", "none");
      $(".mixzip").css("display", "none");
      $(".mixcnpj").css("display", "none");
      $(".mixcou").css("display", "none");
      $(".con-selector").attr("action", "https://www.mixtelematics.com/construction/handlers/za-handler.php"); // FY22: Transport-&-Logistics - 021022 - Sales
      // Not in use
      $("#mix_firstname-error").html("EN FIRST NAME");
      $(".ppc-region-number-value").html("+27 11 654 8000"); // ZA Number Display
      $(".ppc-region-number").attr("href", "tel:+27116548000"); // ZA Number Link
      $(".ppc-region-mail").attr("href", "https://za.mixtelematics.com/#/login"); // ZA Login Link
    }

    else if (response.country == "AU") {
      $(".region select").val("AU");
      $("#en-au").attr("selected", "selected");
      $(".en-au").css("display", "block");
      $(".en-au").css("opacity", "1");
      $(".country-flag").attr("src", "https://www.mixtelematics.com/js/location/img/au-flag.svg");
      $(".en-us").css("display", "none");
      $(".en-za").css("display", "none");
      $(".en-gb").css("display", "none");
      $(".pt-br").css("display", "none");
      $(".ar").css("display", "none");
      $(".es").css("display", "none");
      $(".other").css("display", "none");
      $(".mixfleet").css("display", "block");
      $("#mix_firstname").attr("placeholder", "First Name *"); // Firstname Placeholder
      $("#mix_lastname").attr("placeholder", "Last Name *"); // Firstname Placeholder
      $("#mix_company").attr("placeholder", "Company *"); // US Last Name Placeholder
      $("#mix_phone").attr("placeholder", "Contact Number *"); // Firstname Placeholder
      $("#mix_email").attr("placeholder", "E-mail *"); // Firstname Placeholder
      $("#message").attr("placeholder", "Message *"); // Firstname Placeholder
      $("#mix_fleet_size").attr("placeholder", "Fleet Size *"); // Firstname Placeholder
      $(".industry-disabled").html(" Industry ");
      $(".mixind").css("display", "none");
      $(".mixadd").css("display", "none");
      $(".mixcit").css("display", "none");
      $(".mixsta").css("display", "none");
      $(".mixzip").css("display", "none");
      $(".mixcnpj").css("display", "none");
      $(".mixcou").css("display", "none");
      $(".con-selector").attr("action", "https://www.mixtelematics.com/construction/handlers/au-handler.php"); // FY22-AU: Industry LP .com - 020222
      // Not in use
      $("#mix_firstname-error").html("EN FIRST NAME");
      $(".ppc-region-number-value").html("+61 8 9388 5800"); // AU Number Display
      $(".ppc-region-number").attr("href", "tel:+61893885800"); // AU Number Link
      $(".ppc-region-mail").attr("href", "https://au.mixtelematics.com/#/login"); // AU Login Link
    }

    else if (response.country == "BR") {
      $(".region select").val("BR");
      $("#pt-br").attr("selected", "selected");
      $(".pt-br").css("display", "block");
      $(".pt-br").css("opacity", "1");
      $(".country-flag").attr("src", "https://www.mixtelematics.com/js/location/img/br-flag.svg");
      $(".en-us").css("display", "none");
      $(".en-za").css("display", "none");
      $(".en-au").css("display", "none");
      $(".en-gb").css("display", "none");
      $(".ar").css("display", "none");
      $(".es").css("display", "none");
      $(".other").css("display", "none");
	    $("#mix_firstname").attr("placeholder", "Nome *"); // Firstname Placeholder
      $("#mix_fleet_size").attr("placeholder", "Tamanho da frota *"); // Firstname Placeholder
      $("#mix_lastname").attr("placeholder", "Sobrenome *"); // Firstname Placeholder
      $("#mix_company").attr("placeholder", "Razão Social *"); // US Last Name Placeholder
      $("#mix_phone").attr("placeholder", "Telefone *"); // Firstname Placeholder
      $("#mix_email").attr("placeholder", "Endereço de E-mail *"); // Firstname Placeholder
      $("#mix_address").attr("placeholder", "Endereço *"); // Firstname Placeholder
      $("#mix_city").attr("placeholder", "Cidade *"); // Firstname Placeholder
      $("#mix_state").attr("placeholder", "Estado *"); // US Last Name Placeholder
      $("#mix_zip_code").attr("placeholder", "CEP *"); // Firstname Placeholder
      $("#mix_cnpj").attr("placeholder", "CNPJ/CPF  *"); // Firstname Placeholder
      $("#mix_country").attr("placeholder", "País *"); // Firstname Placeholder
      $("#select_industry_vldMV_fy21").attr("placeholder", "Industria *"); // Firstname Placeholder
      $("#mix_industry").attr("placeholder", "Industria *"); // MiX Industry
      $(".industry-disabled").html(" Segmento");
      $(".industry-one").html(" Óleo & Gás");
      $(".industry-two").html(" Mineração");
      $(".industry-three").html(" Construção");
      $(".industry-four").html(" Utilidades");
      $(".industry-five").html(" Energia Renovável");
      $(".industry-six").html(" Transporte Público");
      $(".industry-seven").html(" Transporte e Distribuição");
      $(".industry-eight").html(" Alimentos e Bebidas");
      $(".industry-nine").html(" Locação");
      $(".industry-ten").html(" Serviços de Emergência");
      $(".industry-eleven").html(" Governo");
      $(".industry-twelve").html(" Segurança");
      $(".industry-thirteen").html(" Telecomunicação");
      $(".industry-fourteen").html(" Educação");
      $(".industry-fithteen").html(" Gestão de Pequenas Frotas");
      $(".industry-sixteen").html(" Controle de Pestes");
      $(".industry-seventeen").html(" Climatização");
      $(".industry-eighteen").html(" Field Service");
      $(".industry-nineteen").html(" Paisagismo");
      $(".industry-twenty").html(" Encanamento");
      $(".industry-twentyone").html(" Outro");
	    $(".mixfl").css("display", "none");
      $(".mixind").css("display", "block");
      $(".mixadd").css("display", "block");
      $(".mixcit").css("display", "block");
      $(".mixsta").css("display", "block");
      $(".mixzip").css("display", "block");
      $(".mixcnpj").css("display", "block");
      $(".mixcou").css("display", "block");
      $("#message").attr("placeholder", "Mensagem *"); // Firstname Placeholder
      $(".con-selector").attr("action", "https://www.mixtelematics.com/construction/handlers/br-handler.php"); // FY22-BR: Industry LP .com - 020222
      // Not in use
      $("#mix_firstname-error").html("BR FIRST NAME");
      $(".ppc-region-number-value").html("+55 11 3393 8111"); // BR Number Display
      $(".ppc-region-number").attr("href", "tel:+551133938111"); // BR Number Link
      // $(".ppc-region-mail").attr("href", "https://om.mixtelematics.com/#/login"); // BR Login Link
    }

    else if (response.country == "ES") {
      $(".region select").val("ES");
      $("#es").attr("selected", "selected");
      $(".es").css("display", "block");
      $(".pt-br").css("opacity", "1");
      $(".country-flag").attr("src", "https://www.mixtelematics.com/js/location/img/es-flag.svg");
      $(".en-us").css("display", "none");
      $(".en-za").css("display", "none");
      $(".en-au").css("display", "none");
      $(".en-gb").css("display", "none");
      $(".ar").css("display", "none");
      $(".pt-br").css("display", "none");
      $(".other").css("display", "none");
	    $("#mix_firstname").attr("placeholder", "Nombre *"); // Firstname Placeholder
      $("#mix_fleet_size").attr("placeholder", "Tamaño de la flota*"); // Firstname Placeholder
      $("#mix_lastname").attr("placeholder", "Apellido *"); // Firstname Placeholder
      $("#mix_company").attr("placeholder", "Nombre de la Empresa  *"); // US Last Name Placeholder
      $("#mix_phone").attr("placeholder", "Teléfono *"); // Firstname Placeholder
      $("#mix_email").attr("placeholder", "Dirección de correo electrónico *"); // Firstname Placeholder
	    $(".mixfl").css("display", "none");
      $(".mixind").css("display", "block");
      $(".mixadd").css("display", "block");
      $(".mixcit").css("display", "block");
      $(".mixsta").css("display", "block");
      $(".mixzip").css("display", "block");
      $(".mixcnpj").css("display", "block");
      $(".mixcou").css("display", "block");
      $("#mix_address").attr("placeholder", "Dirección *"); // Firstname Placeholder
      $("#mix_city").attr("placeholder", "Ciudad *"); // Firstname Placeholder
      $("#mix_state").attr("placeholder", "Estado *"); // US Last Name Placeholder
      $("#mix_zip_code").attr("placeholder", "Código Postal *"); // Firstname Placeholder
      $("#mix_cnpj").attr("placeholder", "Registro Federal de Contribuyentes *"); // Firstname Placeholder
      $("#mix_country").attr("placeholder", "País *"); // Firstname Placeholder
      $("#select_industry_vldMV_fy21").attr("placeholder", "Industria *"); // Firstname Placeholder
      $("#mix_industry").attr("placeholder", "Industria *"); // MiX Industry
      $(".industry-disabled").html(" Segmento de Actuación ");
      $(".industry-seventeen").html(" Aire Acondicionado");
      $(".industry-nine").html(" Alquiler");
      $(".industry-one").html(" Petróleo y Gas");
      $(".industry-two").html(" Minería");
      $(".industry-three").html(" Construcción");
      $(".industry-four").html(" Utilidades");
      $(".industry-five").html(" Energías Renovables");
      $(".industry-six").html(" Transporte Público");
      $(".industry-seven").html(" Transporte y Distribución");
      $(".industry-eight").html(" Comida y Bebida");
      $(".industry-ten").html(" Servicios de Emergencia");
      $(".industry-eleven").html(" Gobierno");
      $(".industry-twelve").html(" Seguridad");
      $(".industry-thirteen").html(" Telecomunicaciones");
      $(".industry-fourteen").html(" Educación");
      $(".industry-fithteen").html(" Gestión de Flotas Pequeñas");
      $(".industry-sixteen").html(" Control de Plagas");
      $(".industry-eighteen").html(" Field Service");
      $(".industry-nineteen").html(" Paisajismo");
      $(".industry-twenty").html(" Fontanería");
      $(".industry-twentyone").html(" Otro");
      $("#message").attr("placeholder", "Mensaje *"); // Firstname Placeholder
      $(".con-selector").attr("action", "https://www.mixtelematics.com/construction/handlers/es-handler.php"); // FY22-ES: Industry LP .com - 020222
      // Not in use
      $("#mix_firstname-error").html("BR FIRST NAME");
      $(".ppc-region-number-value").html("+55 11 3393 8111"); // ES Number Display
      $(".ppc-region-number").attr("href", "tel:+551133938111"); // ES Number Link
      // $(".ppc-region-mail").attr("href", "https://om.mixtelematics.com/#/login"); // ES Login Link
    }

    else if ((response.country == "GB") || (response.country == "UK"))  {
      $(".region select").val("GB");
      $("#en-gb").attr("selected", "selected");
      $(".en-gb").css("display", "block");
      $(".en-gb").css("opacity", "1");
      $(".country-flag").attr("src", "https://www.mixtelematics.com/js/location/img/uk-flag.svg");
      $(".en-us").css("display", "none");
      $(".en-za").css("display", "none");
      $(".en-au").css("display", "none");
      $(".pt-br").css("display", "none");
      $(".ar").css("display", "none");
      $(".es").css("display", "none");
      $(".other").css("display", "none");
      $(".mixfleet").css("display", "block");
      $("#mix_firstname").attr("placeholder", "First Name *"); // Firstname Placeholder
      $("#mix_lastname").attr("placeholder", "Last Name *"); // Firstname Placeholder
      $("#mix_company").attr("placeholder", "Company *"); // US Last Name Placeholder
      $("#mix_phone").attr("placeholder", "Contact Number *"); // Firstname Placeholder
      $("#mix_email").attr("placeholder", "E-mail *"); // Firstname Placeholder
      $("#message").attr("placeholder", "Message *"); // Firstname Placeholder
      $("#mix_fleet_size").attr("placeholder", "Fleet Size *"); // Firstname Placeholder
      $(".industry-disabled").html(" Industry ");
      $(".mixind").css("display", "none");
      $(".mixadd").css("display", "none");
      $(".mixcit").css("display", "none");
      $(".mixsta").css("display", "none");
      $(".mixzip").css("display", "none");
      $(".mixcnpj").css("display", "none");
      $(".mixcou").css("display", "none");
      $(".con-selector").attr("action", "https://www.mixtelematics.com/construction/handlers/uk-handler.php"); // FY22-UK: Industry LP .com - 020222
      // Not in use
      $("#mix_firstname-error").html("EN FIRST NAME");
      $(".ppc-region-number-value").html("+44 121 717 5360"); // UK Number Display
      $(".ppc-region-number").attr("href", "tel:+441217175360"); // UK Number Link
    }

    else if (response.country == "AE") {
      $(".region select").val("AE");
      $("#ar").attr("selected", "selected");
      $(".ar").css("display", "block");
      $(".ar").css("opacity", "1");
      $(".country-flag").attr("src", "https://www.mixtelematics.com/js/location/img/ae-flag.svg");
      $(".en-us").css("display", "none");
      $(".en-za").css("display", "none");
      $(".en-au").css("display", "none");
      $(".pt-br").css("display", "none");
      $(".en-gb").css("display", "none");
      $(".ar").css("display", "none");
      $(".es").css("display", "none");
      $(".other").css("display", "none");
      $(".mixfleet").css("display", "block");
      $("#mix_firstname").attr("placeholder", "First Name *"); // Firstname Placeholder
      $("#mix_lastname").attr("placeholder", "Last Name *"); // Firstname Placeholder
      $("#mix_company").attr("placeholder", "Company *"); // US Last Name Placeholder
      $("#mix_phone").attr("placeholder", "Contact Number *"); // Firstname Placeholder
      $("#mix_email").attr("placeholder", "E-mail *"); // Firstname Placeholder
      $("#message").attr("placeholder", "Message *"); // Firstname Placeholder
      $("#mix_fleet_size").attr("placeholder", "Fleet Size *"); // Firstname Placeholder
      $(".industry-disabled").html(" Industry ");
      $(".mixind").css("display", "none");
      $(".mixadd").css("display", "none");
      $(".mixcit").css("display", "none");
      $(".mixsta").css("display", "none");
      $(".mixzip").css("display", "none");
      $(".mixcnpj").css("display", "none");
      $(".mixcou").css("display", "none");
      $(".con-selector").attr("action", "https://www.mixtelematics.com/construction/handlers/ar-handler.php"); // FY22-AE: Industry LP .com - 020222
      // Not in use
      $("#mix_firstname-error").html("EN FIRST NAME");
      $(".ppc-region-number-value").html("+971 4 204 5650"); // AR Number Display
      $(".ppc-region-number").attr("href", "tel:+97142045650"); // AR Number Link
      $(".ppc-region-mail").attr("href", "https://ae.mixtelematics.com/#/login"); // AE Login Link
    }

    else {
      $(".region select").val("Other");
      $("#other").attr("selected", "selected");
      $(".other").css("display", "block");
      $(".other").css("opacity", "1");
      $(".country-flag").attr("uk-icon", "https://www.mixtelematics.com/js/location/img/other-flag.svg"); // Set To ICON
      $(".en-za").css("display", "none");
      $(".en-us").css("display", "none");
      $(".en-gb").css("display", "none");
      $(".en-au").css("display", "none");
      $(".pt-br").css("display", "none");
      $(".ar").css("display", "none");
      $(".es").css("display", "none");
      $(".mixfleet").css("display", "block");
      $("#mix_firstname").attr("placeholder", "First Name *"); // Firstname Placeholder
      $("#mix_lastname").attr("placeholder", "Last Name *"); // Firstname Placeholder
      $("#mix_company").attr("placeholder", "Company *"); // US Last Name Placeholder
      $("#mix_phone").attr("placeholder", "Contact Number *"); // Firstname Placeholder
      $("#mix_email").attr("placeholder", "E-mail *"); // Firstname Placeholder
      $("#message").attr("placeholder", "Message *"); // Firstname Placeholder
      $("#mix_fleet_size").attr("placeholder", "Fleet Size *"); // Firstname Placeholder
      $(".industry-disabled").html(" Industry ");
      $(".mixind").css("display", "none");
      $(".mixadd").css("display", "none");
      $(".mixcit").css("display", "none");
      $(".mixsta").css("display", "none");
      $(".mixzip").css("display", "none");
      $(".mixcnpj").css("display", "none");
      $(".mixcou").css("display", "none");
      $(".con-selector").attr("action", "https://www.mixtelematics.com/construction/handlers/other-handler.php"); // FY22-Other: Industry LP .com - 020222
      // Not in use
      $("#mix_firstname-error").html("EN FIRST NAME");
      $(".ppc-region-number-value").html("561-717-3111"); // AR Number Display
      $(".ppc-region-number").attr("href", "tel:5617173111"); // AR Number Link
      // $(".ppc-region-mail").attr("href", "https://us.mixtelematics.com/#/login"); // Other Login Link
    }
    console.log(response.country + " Detected");
}, "jsonp");
// END - Geo Locate Visitor

// Look thru available region selections to create the cookie
if ((selectedregion == "US") ||
    (selectedregion == "ZA") ||
    (selectedregion == "AU") ||
    (selectedregion == "BR") ||
    (selectedregion == "GB") ||
    (selectedregion == "AE") ||
    (selectedregion == "UK") ||
    (selectedregion == "ES") ||
    (selectedregion == "Other")) {
  $(".region select").val(selectedregion);
  var sel = $(".region select").val(selectedregion);
}

// Bind the values to persist when changed
$(".region select").bind("change", function() {
 // setCookie("region", this.value, 365);
 var sel = $(".region select").val();

 if (sel == "US") {
   $("#en-us").attr("selected", "selected");
   $(".en-us").css("display", "block");
   $(".en-us").css("opacity", "1");
   $(".country-flag").attr("src", "https://www.mixtelematics.com/js/location/img/us-flag.svg"); // Set To ICON
   $(".en-gb").css("display", "none");
   $(".en-za").css("display", "none");
   $(".en-au").css("display", "none");
   $(".pt-br").css("display", "none");
   $(".ar").css("display", "none");
   $(".es").css("display", "none");
   $(".other").css("display", "none");
   $(".mixfleet").css("display", "block");
   $("#mix_firstname").attr("placeholder", "First Name *"); // Firstname Placeholder
   $("#mix_lastname").attr("placeholder", "Last Name *"); // Firstname Placeholder
   $("#mix_company").attr("placeholder", "Company *"); // US Last Name Placeholder
   $("#mix_phone").attr("placeholder", "Contact Number *"); // Firstname Placeholder
   $("#mix_email").attr("placeholder", "E-mail *"); // Firstname Placeholder
   $("#message").attr("placeholder", "Message *"); // Firstname Placeholder
   $("#mix_fleet_size").attr("placeholder", "Fleet Size *"); // Firstname Placeholder
   $(".industry-disabled").html(" Industry ");
   $(".mixind").css("display", "none");
   $(".mixadd").css("display", "none");
   $(".mixcit").css("display", "none");
   $(".mixsta").css("display", "none");
   $(".mixzip").css("display", "none");
   $(".mixcnpj").css("display", "none");
   $(".mixcou").css("display", "none");
   $(".con-selector").attr("action", "https://www.mixtelematics.com/construction/handlers/us-handler.php"); // FY22-US: Industry LP .com - 020222
   // Not in use
   $("#mix_firstname-error").html("EN FIRST NAME");
   $(".ppc-region-number-value").html("561-717-3111"); // US Number Display
   $(".ppc-region-number").attr("href", "tel:5617173111"); // US Number Link
   $(".ppc-region-mail").attr("href", "https://us.mixtelematics.com/#/login"); // US Login Link
   console.log(sel);
 }

 else if (sel == "ZA") {
   $("#en-za").attr("selected", "selected");
   $(".en-za").css("display", "block");
   $(".en-za").css("opacity", "1");
   $(".country-flag").attr("src", "https://www.mixtelematics.com/js/location/img/za-flag.svg"); // Set To ICON
   $(".en-us").css("display", "none");
   $(".en-gb").css("display", "none");
   $(".en-au").css("display", "none");
   $(".pt-br").css("display", "none");
   $(".ar").css("display", "none");
   $(".es").css("display", "none");
   $(".other").css("display", "none");
   $(".mixfleet").css("display", "block");
   $("#mix_firstname").attr("placeholder", "First Name *"); // Firstname Placeholder
   $("#mix_lastname").attr("placeholder", "Last Name *"); // Firstname Placeholder
   $("#mix_company").attr("placeholder", "Company *"); // US Last Name Placeholder
   $("#mix_phone").attr("placeholder", "Contact Number *"); // Firstname Placeholder
   $("#mix_email").attr("placeholder", "E-mail *"); // Firstname Placeholder
   $("#message").attr("placeholder", "Message *"); // Firstname Placeholder
   $("#message").attr("placeholder", "Message *"); // Firstname Placeholder
   $("#mix_fleet_size").attr("placeholder", "Fleet Size *"); // Firstname Placeholder
   $(".industry-disabled").html(" Industry ");
   $(".mixind").css("display", "none");
   $(".mixadd").css("display", "none");
   $(".mixcit").css("display", "none");
   $(".mixsta").css("display", "none");
   $(".mixzip").css("display", "none");
   $(".mixcnpj").css("display", "none");
   $(".mixcou").css("display", "none");
   $(".con-selector").attr("action", "https://www.mixtelematics.com/construction/handlers/za-handler.php"); // FY22: Transport-&-Logistics - 021022 - Sales
   // Not in use
   $("#mix_firstname-error").html("EN FIRST NAME");
   $(".ppc-region-number-value").html("+27 11 654 8000"); // ZA Number Display
   $(".ppc-region-number").attr("href", "tel:+27116548000"); // ZA Number Link
   $(".ppc-region-mail").attr("href", "https://za.mixtelematics.com/#/login"); // ZA Login Link
   console.log(sel);
 }

 else if (sel == "AU") {
   $(".region select").val("AU");
   $("#en-au").attr("selected", "selected");
   $(".en-au").css("display", "block");
   $(".en-au").css("opacity", "1");
   $(".country-flag").attr("src", "https://www.mixtelematics.com/js/location/img/au-flag.svg"); // Set To ICON
   $(".en-us").css("display", "none");
   $(".en-za").css("display", "none");
   $(".en-gb").css("display", "none");
   $(".pt-br").css("display", "none");
   $(".ar").css("display", "none");
   $(".es").css("display", "none");
   $(".other").css("display", "none");
   $(".mixfleet").css("display", "block");
   $("#mix_firstname").attr("placeholder", "First Name *"); // Firstname Placeholder
   $("#mix_lastname").attr("placeholder", "Last Name *"); // Firstname Placeholder
   $("#mix_company").attr("placeholder", "Company *"); // US Last Name Placeholder
   $("#mix_phone").attr("placeholder", "Contact Number *"); // Firstname Placeholder
   $("#mix_email").attr("placeholder", "E-mail *"); // Firstname Placeholder
   $("#message").attr("placeholder", "Message *"); // Firstname Placeholder
   $("#mix_fleet_size").attr("placeholder", "Fleet Size *"); // Firstname Placeholder
   $(".industry-disabled").html(" Industry ");
   $(".mixind").css("display", "none");
   $(".mixadd").css("display", "none");
   $(".mixcit").css("display", "none");
   $(".mixsta").css("display", "none");
   $(".mixzip").css("display", "none");
   $(".mixcnpj").css("display", "none");
   $(".mixcou").css("display", "none");
   $(".con-selector").attr("action", "https://www.mixtelematics.com/construction/handlers/au-handler.php"); // FY22-AU: Industry LP .com - 020222
   // Not in use
   $("#mix_firstname-error").html("EN FIRST NAME");
   $(".ppc-region-number-value").html("+61 8 9388 5800"); // AU Number Display
   $(".ppc-region-number").attr("href", "tel:+61893885800"); // AU Number Link
   $(".ppc-region-mail").attr("href", "https://au.mixtelematics.com/#/login"); // AU Login Link
   console.log(sel);
 }

 else if (sel == "BR") {
   $(".region select").val("BR");
   $("#pt-br").attr("selected", "selected");
   $(".pt-br").css("display", "block");
   $(".pt-br").css("opacity", "1");
   $(".country-flag").attr("src", "https://www.mixtelematics.com/js/location/img/br-flag.svg"); // Set To ICON
   $(".en-us").css("display", "none");
   $(".en-za").css("display", "none");
   $(".en-au").css("display", "none");
   $(".en-gb").css("display", "none");
   $(".ar").css("display", "none");
   $(".es").css("display", "none");
   $(".other").css("display", "none");
   $("#mix_firstname").attr("placeholder", "Nome *"); // Firstname Placeholder
   $("#mix_fleet_size").attr("placeholder", "Tamanho da frota *"); // Firstname Placeholder
   $("#mix_lastname").attr("placeholder", "Sobrenome *"); // Firstname Placeholder
   $("#mix_company").attr("placeholder", "Razão Social *"); // US Last Name Placeholder
   $("#mix_phone").attr("placeholder", "Telefone *"); // Firstname Placeholder
   $("#mix_email").attr("placeholder", "Endereço de E-mail *"); // Firstname Placeholder
   $(".mixfl").css("display", "none");
   $(".mixind").css("display", "block");
   $(".mixadd").css("display", "block");
   $(".mixcit").css("display", "block");
   $(".mixsta").css("display", "block");
   $(".mixzip").css("display", "block");
   $(".mixcnpj").css("display", "block");
   $(".mixcou").css("display", "block");
   $("#mix_address").attr("placeholder", "Endereço *"); // Firstname Placeholder
   $("#mix_city").attr("placeholder", "Cidade *"); // Firstname Placeholder
   $("#mix_state").attr("placeholder", "Estado *"); // US Last Name Placeholder
   $("#mix_zip_code").attr("placeholder", "CEP *"); // Firstname Placeholder
   $("#mix_cnpj").attr("placeholder", "CNPJ/CPF  *"); // Firstname Placeholder
   $("#mix_country").attr("placeholder", "País *"); // Firstname Placeholder
   $("#select_industry_vldMV_fy21").attr("placeholder", "Industria *"); // Firstname Placeholder
   $("#mix_industry").attr("placeholder", "Industria *"); // MiX Industry
   $(".industry-disabled").html(" Segmento");
   $(".industry-one").html(" Óleo & Gás");
   $(".industry-two").html(" Mineração");
   $(".industry-three").html(" Construção");
   $(".industry-four").html(" Utilidades");
   $(".industry-five").html(" Energia Renovável");
   $(".industry-six").html(" Transporte Público");
   $(".industry-seven").html(" Transporte e Distribuição");
   $(".industry-eight").html(" Alimentos e Bebidas");
   $(".industry-nine").html(" Locação");
   $(".industry-ten").html(" Serviços de Emergência");
   $(".industry-eleven").html(" Governo");
   $(".industry-twelve").html(" Segurança");
   $(".industry-thirteen").html(" Telecomunicação");
   $(".industry-fourteen").html(" Educação");
   $(".industry-fithteen").html(" Gestão de Pequenas Frotas");
   $(".industry-sixteen").html(" Controle de Pestes");
   $(".industry-seventeen").html(" Climatização");
   $(".industry-eighteen").html(" Field Service");
   $(".industry-nineteen").html(" Paisagismo");
   $(".industry-twenty").html(" Encanamento");
   $(".industry-twentyone").html(" Outro");
   $("#message").attr("placeholder", "Mensagem *"); // Firstname Placeholder
   $(".con-selector").attr("action", "https://www.mixtelematics.com/construction/handlers/br-handler.php"); // FY22-BR: Industry LP .com - 020222
   // Not in use
   $("#mix_firstname-error").html("BR FIRST NAME");
   $(".ppc-region-number-value").html("+55 11 3393 8111"); // BR Number Display
   $(".ppc-region-number").attr("href", "tel:+551133938111"); // BR Number Link
   // $(".ppc-region-mail").attr("href", "https://om.mixtelematics.com/#/login"); // BR Login Link
   console.log(sel);
 }

 else if (sel == "ES") {
   $(".region select").val("ES");
   $("#es").attr("selected", "selected");
   $(".es").css("display", "block");
   $(".es").css("opacity", "1");
   $(".country-flag").attr("src", "https://www.mixtelematics.com/js/location/img/es-flag.svg"); // Set To ICON
   $(".en-us").css("display", "none");
   $(".en-za").css("display", "none");
   $(".en-au").css("display", "none");
   $(".en-gb").css("display", "none");
   $(".ar").css("display", "none");
   $(".pt-br").css("display", "none");
   $(".other").css("display", "none");
   $("#mix_firstname").attr("placeholder", "Nombre *"); // Firstname Placeholder
   $("#mix_fleet_size").attr("placeholder", "Tamaño de la flota*"); // Firstname Placeholder
   $("#mix_lastname").attr("placeholder", "Apellido *"); // Firstname Placeholder
   $("#mix_company").attr("placeholder", "Nombre de la Empresa  *"); // US Last Name Placeholder
   $("#mix_phone").attr("placeholder", "Teléfono *"); // Firstname Placeholder
   $("#mix_email").attr("placeholder", "Dirección de correo electrónico *"); // Firstname Placeholder
   $(".mixfl").css("display", "none");
   $(".mixind").css("display", "block");
   $(".mixadd").css("display", "block");
   $(".mixcit").css("display", "block");
   $(".mixsta").css("display", "block");
   $(".mixzip").css("display", "block");
   $(".mixcnpj").css("display", "block");
   $(".mixcou").css("display", "block");
   $("#mix_address").attr("placeholder", "Dirección *"); // Firstname Placeholder
   $("#mix_city").attr("placeholder", "Ciudad *"); // Firstname Placeholder
   $("#mix_state").attr("placeholder", "Estado *"); // US Last Name Placeholder
   $("#mix_zip_code").attr("placeholder", "Código Postal *"); // Firstname Placeholder
   $("#mix_cnpj").attr("placeholder", "Registro Federal de Contribuyentes *"); // Firstname Placeholder
   $("#mix_country").attr("placeholder", "País *"); // Firstname Placeholder
   $("#select_industry_vldMV_fy21").attr("placeholder", "Industria *"); // Firstname Placeholder
   $("#mix_industry").attr("placeholder", "Industria *"); // MiX Industry
   $(".industry-disabled").html(" Segmento de Actuación ");
   $(".industry-seventeen").html(" Aire Acondicionado");
   $(".industry-nine").html(" Alquiler");
   $(".industry-one").html(" Petróleo y Gas");
   $(".industry-two").html(" Minería");
   $(".industry-three").html(" Construcción");
   $(".industry-four").html(" Utilidades");
   $(".industry-five").html(" Energías Renovables");
   $(".industry-six").html(" Transporte Público");
   $(".industry-seven").html(" Transporte y Distribución");
   $(".industry-eight").html(" Comida y Bebida");
   $(".industry-ten").html(" Servicios de Emergencia");
   $(".industry-eleven").html(" Gobierno");
   $(".industry-twelve").html(" Seguridad");
   $(".industry-thirteen").html(" Telecomunicaciones");
   $(".industry-fourteen").html(" Educación");
   $(".industry-fithteen").html(" Gestión de Flotas Pequeñas");
   $(".industry-sixteen").html(" Control de Plagas");
   $(".industry-eighteen").html(" Field Service");
   $(".industry-nineteen").html(" Paisajismo");
   $(".industry-twenty").html(" Fontanería");
   $(".industry-twentyone").html(" Otro");
   $("#message").attr("placeholder", "Mensaje *"); // Firstname Placeholder
   $(".con-selector").attr("action", "https://www.mixtelematics.com/construction/handlers/es-handler.php"); // FY22-ES: Industry LP .com - 020222
   // Not in use
   $("#mix_firstname-error").html("BR FIRST NAME");
   $(".ppc-region-number-value").html("+55 11 3393 8111"); // ES Number Display
   $(".ppc-region-number").attr("href", "tel:+551133938111"); // ES Number Link
   // $(".ppc-region-mail").attr("href", "https://om.mixtelematics.com/#/login"); // ES Login Link
   console.log(sel);
 }


 else if ((sel == "GB") || (sel == "UK")) {
   $(".region select").val("GB");
   $("#en-gb").attr("selected", "selected");
   $(".en-gb").css("display", "block");
   $(".en-gb").css("opacity", "1");
   $(".country-flag").attr("src", "https://www.mixtelematics.com/js/location/img/uk-flag.svg"); // Set To ICON
   $(".en-us").css("display", "none");
   $(".en-za").css("display", "none");
   $(".en-au").css("display", "none");
   $(".pt-br").css("display", "none");
   $(".ar").css("display", "none");
   $(".es").css("display", "none");
   $(".other").css("display", "none");
   $(".mixfleet").css("display", "block");
   $("#mix_firstname").attr("placeholder", "First Name *"); // Firstname Placeholder
   $("#mix_lastname").attr("placeholder", "Last Name *"); // Firstname Placeholder
   $("#mix_company").attr("placeholder", "Company *"); // US Last Name Placeholder
   $("#mix_phone").attr("placeholder", "Contact Number *"); // Firstname Placeholder
   $("#mix_email").attr("placeholder", "E-mail *"); // Firstname Placeholder
   $("#message").attr("placeholder", "Message *"); // Firstname Placeholder
   $("#mix_fleet_size").attr("placeholder", "Fleet Size *"); // Firstname Placeholder
   $(".industry-disabled").html(" Industry ");
   $(".mixind").css("display", "none");
   $(".mixadd").css("display", "none");
   $(".mixcit").css("display", "none");
   $(".mixsta").css("display", "none");
   $(".mixzip").css("display", "none");
   $(".mixcnpj").css("display", "none");
   $(".mixcou").css("display", "none");
   $(".con-selector").attr("action", "https://www.mixtelematics.com/construction/handlers/uk-handler.php"); // FY22: Transport-&-Logistics - 021022 - Sales
   // Not in use
   $("#mix_firstname-error").html("EN FIRST NAME");
   $(".ppc-region-number-value").html("+44 121 717 5360"); // UK Number Display
   $(".ppc-region-number").attr("href", "tel:+441217175360"); // UK Number Link
   $(".ppc-region-mail").attr("href", "https://uk.mixtelematics.com/#/login"); // UK Login Link
   console.log(sel);
 }

 else if (sel == "AE") {
   $(".region select").val("AE");
   $("#ar").attr("selected", "selected");
   $(".ar").css("display", "block");
   $(".ar").css("opacity", "1");
   $(".country-flag").attr("src", "https://www.mixtelematics.com/js/location/img/ar-flag.svg"); // Set To ICON
   $(".en-us").css("display", "none");
   $(".en-za").css("display", "none");
   $(".en-au").css("display", "none");
   $(".pt-br").css("display", "none");
   $(".en-gb").css("display", "none");
   $(".es").css("display", "none");
   $(".other").css("display", "none");
   $(".mixfleet").css("display", "block");
   $("#mix_firstname").attr("placeholder", "First Name *"); // Firstname Placeholder
   $("#mix_lastname").attr("placeholder", "Last Name *"); // Firstname Placeholder
   $("#mix_company").attr("placeholder", "Company *"); // US Last Name Placeholder
   $("#mix_phone").attr("placeholder", "Contact Number *"); // Firstname Placeholder
   $("#mix_email").attr("placeholder", "E-mail *"); // Firstname Placeholder
   $("#message").attr("placeholder", "Message *"); // Firstname Placeholder
   $("#mix_fleet_size").attr("placeholder", "Fleet Size *"); // Firstname Placeholder
   $(".industry-disabled").html(" Industry ");
   $(".mixind").css("display", "none");
   $(".mixadd").css("display", "none");
   $(".mixcit").css("display", "none");
   $(".mixsta").css("display", "none");
   $(".mixzip").css("display", "none");
   $(".mixcnpj").css("display", "none");
   $(".mixcou").css("display", "none");
   $(".con-selector").attr("action", "https://www.mixtelematics.com/construction/handlers/ar-handler.php"); // FY22-AE: Industry LP .com - 020222
   // Not in use
   $("#mix_firstname-error").html("EN FIRST NAME");
   $(".ppc-region-number-value").html("+971 4 204 5650"); // AR Number Display
   $(".ppc-region-number").attr("href", "tel:+97142045650"); // AR Number Link
   $(".ppc-region-mail").attr("href", "https://ae.mixtelematics.com/#/login"); // AE Login Link
   console.log(sel);
 }

 else {
   $(".region select").val("Other");
   $("#other").attr("selected", "selected");
   $(".other").css("display", "block");
   $(".other").css("opacity", "1");
   $(".country-flag").attr("src", "https://www.mixtelematics.com/js/location/img/other-flag.svg"); // Set To ICON
   $(".en-za").css("display", "none");
   $(".en-us").css("display", "none");
   $(".en-gb").css("display", "none");
   $(".en-au").css("display", "none");
   $(".pt-br").css("display", "none");
   $(".ar").css("display", "none");
   $(".es").css("display", "none");
   $(".mixfleet").css("display", "block");
   $("#mix_firstname").attr("placeholder", "First Name *"); // Firstname Placeholder
   $("#mix_lastname").attr("placeholder", "Last Name *"); // Firstname Placeholder
   $("#mix_company").attr("placeholder", "Company *"); // US Last Name Placeholder
   $("#mix_phone").attr("placeholder", "Contact Number *"); // Firstname Placeholder
   $("#mix_email").attr("placeholder", "E-mail *"); // Firstname Placeholder
   $("#message").attr("placeholder", "Message *"); // Firstname Placeholder
   $("#mix_fleet_size").attr("placeholder", "Fleet Size *"); // Firstname Placeholder
   $(".industry-disabled").html(" Industry ");
   $(".mixind").css("display", "none");
   $(".mixadd").css("display", "none");
   $(".mixcit").css("display", "none");
   $(".mixsta").css("display", "none");
   $(".mixzip").css("display", "none");
   $(".mixcnpj").css("display", "none");
   $(".mixcou").css("display", "none");
   $(".con-selector").attr("action", "https://www.mixtelematics.com/construction/handlers/other-handler.php"); // FY22-Other: Industry LP .com - 020222
   // Not in use
   $("#mix_firstname-error").html("EN FIRST NAME");
   $(".ppc-region-number-value").html("561-717-3111"); // AR Number Display
   $(".ppc-region-number").attr("href", "tel:5617173111"); // AR Number Link
   // $(".ppc-region-mail").attr("href", "https://us.mixtelematics.com/#/login"); // ZA Login Link
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
