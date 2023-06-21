// Do things when the user scrolls - Reset them when scrolled back
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 60) {
    $("#ppcNavWrapper").addClass("ppc-nav-light");
    $("#mix-logo").addClass("ppc-logo-dark");
  } else {
    $("#ppcNavWrapper").removeClass("ppc-nav-light");
    $("#mix-logo").removeClass("ppc-logo-dark");
  }
  if (scroll >= 130) {
    $(".ppc-nav-subtext").addClass("ppc-nav-subtext-remove");
  } else {
    $(".ppc-nav-subtext").removeClass("ppc-nav-subtext-remove");
  }
});

// Display success/error message after the form has been submitted
if (window.location.href.indexOf("#thank-you") > -1) {
  $("#ppcFormSuccess").css("display", "block"); // Error Message
  console.log('Thank You')
}
if (window.location.href.indexOf("#message-error") > -1) {
  $("#ppcFormError").css("display", "block"); // Error Message
  console.log('Error')
}

// Focus on First Name input field when CTA is clicked
$(".mix-nav-cta").click(function(){
  $(".uk-input").each(function(){
    if($(this).val() == ''){
      this.focus();
      return false;
    }
  });
});

jQuery(function () {
 jQuery(".mix-nav-item, .uk-section").each(function() {
  if(location.pathname == this.pathname)
  UIkit.scroll(this, {offset: 120});
 });
});

$('.more-button').attr('colspan', function(index, attr){
    return attr == 6 ? null : 6;
});

// Generate the Email Address Based on the Username + Lastname + Company NAME
function getEmail() {
  var firstName = document.getElementsByName('mix_firstname')[0].value;
  var lastName = document.getElementsByName('mix_lastname')[0].value;
  var company = document.getElementsByName('mix_company')[0].value;
  var total = (firstName) + ('.') + (lastName) + ('@') + (company).replace(/\s/g, "") + ('.com');
  document.getElementsByName('mix_email')[0].value = total.toLowerCase();
}

// Get Location for Number
function getIp(callback) {
 fetch('https://ipinfo.io/json?token=c87f828c89371a', { headers: { 'Accept': 'application/json' }})
   .then((resp) => resp.json())
   .catch(() => {
     return {
       country: 'us',
     };
   })
   .then((resp) => callback(resp.country));
}

const phoneInputField = document.querySelector("#mix_phone");
const phoneInput = window.intlTelInput(phoneInputField, {
 preferredCountries: ["us", "gb", "za", "au", "br", "ae"],
 initialCountry: "auto",
 geoIpLookup: getIp,
 utilsScript:
   "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const info = document.querySelector(".alert-info");
const validNumberInput = document.querySelector(".valid-number-inject");
const validExtension = document.querySelector(".iti__selected-flag");
const error = document.querySelector(".alert-error");

// Process the error message
function process(event) {
  // event.preventDefault();

  const phoneNumber = phoneInput.getNumber();

  info.style.display = "none";
  error.style.display = "none";

  if (phoneInput.isValidNumber()) {
    info.style.display = "none";
    info.innerHTML = `Valid: <strong>${phoneNumber}</strong>`;
    validNumberInput.value = `${phoneNumber}`;
  } else {
    error.style.display = "none";
    error.innerHTML = `Invalid phone number.`;
    validNumberInput.value = `${phoneNumber}`;
  }
}
// END - Get Location for number

// jQuery validate
$(document).ready(function() {
  // Validate Fields
  $("#salesForm").validate({
    ignore: ".ignore",
      rules: {
        "mix_firstname": {
        	required: true,
        	minlength: 1
        },
        "mix_lastname": {
        	required: true,
        	minlength: 1
        },
        "mix_company": {
        	required: true,
        	minlength: 1
        },
        "mix_email": {
        	required: true,
        	email: true
        },
        "mix_phone": {
          required: true,
          minlength: 9
        },
        "mix_fleet_size": {
          required: true,
        },
        "termsconditionsfw": {
          required: true
        }
      },
      messages: {
      "mix_firstname": {
        required: "You have not entered a first name",
        minlength: "Your first name must consist of atleast 1 character",
      },
      "mix_lastname": {
        required: "You have not entered a surname",
        minlength: "Your surname must consist of atleast 1 character",
      },
      "mix_company": {
        required: "You have not entered a company name",
        minlength: "Your company name must consist of atleast 1 character",
      },
      "mix_phone": {
        required: "You have not entered a valid number",
      },
      "mix_email": {
        required: "You have not entered an email address",
        email: "Please use a valid email address",
      },
      "mix_fleet_size": {
        required: "You have not entered a fleet size",
      },
      "termsconditionsfw": {
        required: "Please read and accept our terms and conditions to get in touch with us."
      }
    }
  });
  // Disable / Enable Based on the Values of the Input Field
  $('.europa-cp-selector input').bind('keyup blur click change', function () { // fires on every keyup & blur
    if ($('.europa-cp-selector').validate().checkForm()) {  // checks form for validity
    	$('.enable-btn').removeClass('uk-disabled').prop('disabled', false); // enables button
    	$('.enable-btn').addClass('uk-button-primary'); // styles button
    	$('.form-message').addClass('uk-hidden'); // Show Form Submission Message
    } else {
    	$('.enable-btn').addClass('uk-disabled').prop('disabled', true);   // disables button
      $('.enable-btn').removeClass('uk-buttom-primary'); // styles button
      $('.form-message').addClass('uk-visible'); // Hide Form Submission Message
    }
  });
  // Show the Spinner After the Button Has been Clicked
  $(".ppc-get-in-touch-btn").click(function() {  //use a class, since your ID gets mangled
    $(".ppc-get-in-touch-spinner").removeClass("uk-hidden"); //remove the class to the clicked element
  });
});
// END - jQuery validate

var ppcRegionSlider = $(".ppc-slider-list-item").val();
if (ppcRegionSlider == "uk-active") {
  jQuery(".ppc-graph-slider-item-value").each(function() {
    jQuery(this).prop("Counter", 0).animate({
      Counter: jQuery(this).text()
    }, {
      duration: 2000,
      easing: "swing",
      step: function(now) {
        jQuery(this).text(Math.ceil(now));
      }
    });
  });
}

$('.ppc-slider-list-item').on('classChange', function() {
   // do stuff
   jQuery(".ppc-graph-slider-item-value").each(function() {
     jQuery(this).prop("Counter", 0).animate({
       Counter: jQuery(this).text()
     }, {
       duration: 2000,
       easing: "swing",
       step: function(now) {
         jQuery(this).text(Math.ceil(now));
       }
     });
   });
});

// Trigger the Counter when in view - PPC Case Study
var inview = new Waypoint.Inview({
element: $(".ppc-case-study-value-count")[0],
  entered: function(direction) {
    jQuery(".ppc-case-study-value-count").each(function() {
      jQuery(this).prop("Counter", 0).animate({
        Counter: jQuery(this).text()
      }, {
        duration: 2000,
        easing: "swing",
        step: function(now) {
          jQuery(this).text(Math.ceil(now));
        }
      });
    });
  },
})

// Trigger the Counter when in view - PPC Case Study
var inview = new Waypoint.Inview({
element: $(".growth-counter")[0],
  entered: function(direction) {
    jQuery(".growth-counter").each(function() {
      jQuery(this).prop("Counter", 0).animate({
        Counter: jQuery(this).text()
      }, {
        duration: 2000,
        easing: "swing",
        step: function(now) {
          jQuery(this).text(Math.ceil(now));
        }
      });
    });
  },
})
