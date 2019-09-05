'use strict';
(function () {
    var init = function () { 

        /* range slider create */ 
        var rangeSlider = new rSlider({
            target: '#slider',
            values: {min: 0, max: 100},
            step: 1,
            range: false,
            set: [39],
            tooltip: true,
            onChange: function (vals) {
                rangeUpdate(vals);
            }
        });
        
        /* donate messages for range slider */
        function rangeUpdate(val) {
            var rangeVal = val || 0;
            var message = "";
            var rangeMessage = document.getElementById("range__description");
            var Slider = slider || document.getElementById("slider");
            Slider.value = rangeVal;
            switch (true) {
                case (rangeVal > 0 && rangeVal < 21):
                    message = "will let us to add a few new modules";
                    break;
                case (rangeVal > 20 && rangeVal < 51):
                    message = "can help us improve this product";
                    break;
                case (rangeVal > 50 && rangeVal < 81):
                    message = "can help us expand this product to other platforms";
                    break; 
                case (rangeVal > 80 && rangeVal < 101):
                    message = "goes a long way. If you'd like to consider becoming a sponsor, please contact us";
                    break;
                default:
                    break;
            }
            rangeMessage.innerHTML = "<span>" + "$" + rangeVal + "</span> " + message; 
        }

        //submit form
        var form = document.getElementById("donate__form");
        form.addEventListener("submit", function( event ) {
            if ( validateRange() && validateSection2() && validateSection3() )
            {
                return true;
            }
            else
            {
                event.preventDefault();
                return false;
            }
        }, true);

        var searchTrigger = document.getElementById("search__trigger");
        var searchWrapper = document.getElementById("search__wrapper");
        searchTrigger.addEventListener("click", function( event ) {
            searchWrapper.classList.toggle("is--hidden");
        }, true);

    };
    window.onload = init;
})();

var Section2 = document.getElementById("section2");
var Section3 = document.getElementById("section3");

/* range slider section validate */
function validateRange() {
    var Range = document.getElementById("slider");
    var Error = document.getElementById("range__error");
    if (Range.value > 0)
    {
        if (!Error.classList.contains('is--hidden')) Error.classList.add("is--hidden");
        Section2.classList.remove("is--hidden");

        Name.addEventListener("blur", function( event ) {   
            validateName(event.target);
        }, true);
        Email.addEventListener("blur", function( event ) {   
            validateEmail(event.target);
        }, true);
        Address.addEventListener("blur", function( event ) {   
            validateAddress(event.target);
        }, true);
        CityState.addEventListener("blur", function( event ) {   
            validateCityState(event.target);
        }, true);
        if (Name.value == "") {Name.focus();}
        return true;
    }
    else
    {
        if (!Section2.classList.contains('is--hidden')) Section2.classList.add("is--hidden");
        if (!Section3.classList.contains('is--hidden')) Section3.classList.add("is--hidden");
        Error.classList.remove("is--hidden");
        return false;
    }
}

/*  validate name, email, address, city state */
var Name = document.getElementById("name");
var Email = document.getElementById("email");
var Address = document.getElementById("address");
var CityState = document.getElementById("citystate");
var ValidName = false;
var ValidEmail = false;
var ValidAddress = false;
var ValidCityState = false;

function validateNotEmpty(value) {
    return (value && value !== '') ? true : false;
}

function validateName(obj) {
    var Error = document.getElementById("name__error");
    var NameFormat = /^[a-zA-Z]+[\s][a-zA-Z]+$/;

    if (validateNotEmpty(obj.value) && obj.value.match(NameFormat))
    {
        if (!Error.classList.contains('is--hidden')) Error.classList.add("is--hidden");
        obj.classList.remove("input--error");
        ValidName = true;
    }
    else
    {
        Error.classList.remove("is--hidden");
        obj.classList.add("input--error");
        ValidName = false;
    }
    validateSection2();
}

function validateEmail(obj) {
    var Error = document.getElementById("email__error");
    var MailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (validateNotEmpty(obj.value) && obj.value.match(MailFormat) )
    {
        if (!Error.classList.contains('is--hidden')) Error.classList.add("is--hidden");
        obj.classList.remove("input--error");
        ValidEmail = true;
    }
    else
    {
        Error.classList.remove("is--hidden");
        obj.classList.add("input--error");
        ValidEmail = false;
    }
    validateSection2();
}

function validateAddress(obj) {
    var Error = document.getElementById("address__error");
    var AddressFormat = /^[a-zA-Z\s]+[,][0-9\s]+$/;

    if (validateNotEmpty(obj.value) && obj.value.match(AddressFormat))
    {
        if (!Error.classList.contains('is--hidden')) Error.classList.add("is--hidden");
        obj.classList.remove("input--error");
        ValidAddress = true;
    }
    else
    {
        Error.classList.remove("is--hidden");
        obj.classList.add("input--error");
        ValidAddress = false;
    }
    validateSection2();
}

function validateCityState(obj) {
    var Error = document.getElementById("citystate__error");
    var CityStateFormat = /^[a-zA-Z]+[,][a-zA-Z\s]+$/;

    if (validateNotEmpty(obj.value) && obj.value.match(CityStateFormat) )
    {
        if (!Error.classList.contains('is--hidden')) Error.classList.add("is--hidden");
        obj.classList.remove("input--error");
        ValidCityState = true;
    }
    else
    {
        Error.classList.remove("is--hidden");
        obj.classList.add("input--error");
        ValidCityState = false;
    }
    validateSection2();
}


/*  validate credit card number, date, cvv, zip */
var CreditNr = document.getElementById("credit_number");
var CreditExtraFields = document.getElementById("credit__extra");
var CreditExtraError = document.getElementById("credit__error--extra");
var CreditSuccess = document.getElementById("credit__success");
var CreditShort = document.getElementById("credit_short");
var CreditDate = document.getElementById("credit_date");
var CreditCVV = document.getElementById("credit_cvv");
var CreditZIP = document.getElementById("credit_zip");

var ValidCreditDate = false;
var ValidCreditCVV = false;
var ValidCreditZIP = false;

function validateCreditNr(obj) {
    var Error = document.getElementById("credit__error");
    var CreditNrFormat = /^[0-9]{16}$/;
    var CardNumber = null; 
    var CardId = null;

    if (validateNotEmpty(obj.value) && obj.value.match(CreditNrFormat))
    {
        if (!Error.classList.contains('is--hidden')) Error.classList.add("is--hidden");
        obj.classList.remove("input--error");

        if (!obj.classList.contains('is--hidden')) obj.classList.add("is--hidden");
        CreditExtraFields.classList.remove("is--hidden");
        CardNumber = CreditNr.value;
        CardId = CardNumber.substring(0,1);
        CreditShort.value = CardNumber.substring(0,3);
        if (CardId == '4') CreditShort.classList.add("is--visa"); else if (CardId == '5') CreditShort.classList.add("is--mastercard");
        CreditDate.focus();
        CreditDate.addEventListener("blur", function( event ) {   
            validateCreditDate(event.target);
        }, true);
        CreditCVV.addEventListener("blur", function( event ) {   
            validateCreditCVV(event.target);
        }, true);
        CreditZIP.addEventListener("blur", function( event ) {   
            validateCreditZIP(event.target);
        }, true);

    }
    else
    {
        Error.classList.remove("is--hidden");
        obj.classList.add("input--error");
    }
}

function validateCreditDate(obj) {
    var DateFormat = /^[0-9]{2}[/][0-9]{2}$/;
    var Error = CreditExtraError;
    Error.innerHTML="Please enter your card's expiration month and year (MM/YY)";
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth()+1;
    currentMonth = currentMonth.toString();
    currentMonth = ( currentMonth < 10 ) ? '0'+currentMonth : currentMonth;
    var currentYear = currentDate.getFullYear();
    currentYear = currentYear.toString().substring(2);
    var objDate = obj.value;
    var objDateMonth = objDate.toString().substring(0,2);
    var objDateYear = objDate.toString().substring(3);

    if (validateNotEmpty(obj.value) && obj.value.match(DateFormat) && objDateMonth <= 12 && objDateYear > currentYear || (objDateYear == currentYear && objDateMonth >= currentMonth)   )
    {
        if (!Error.classList.contains('is--hidden')) Error.classList.add("is--hidden");
        obj.classList.remove("input--error");
        ValidCreditDate = true;
        CreditCVV.focus();
    }
    else
    {
        Error.classList.remove("is--hidden");
        obj.classList.add("input--error");
        ValidCreditDate = false;
        obj.focus();
    }
    validateSection3();
}

function validateCreditCVV(obj) {
    var CVVFormat = /^[0-9]{3}$/;
    var Error = CreditExtraError;
    Error.innerHTML="Please enter the three-digit CVV number found on the back of your card";

    if (validateNotEmpty(obj.value) && obj.value.match(CVVFormat) )
    {
        if (!Error.classList.contains('is--hidden')) Error.classList.add("is--hidden");
        obj.classList.remove("input--error");
        ValidCreditCVV = true;
        CreditZIP.focus();
    }
    else
    {
        Error.classList.remove("is--hidden");
        obj.classList.add("input--error");
        ValidCreditCVV = false;
        obj.focus();
    }
    validateSection3();
}

function validateCreditZIP(obj) {
    var ZIPFormat = /^[0-9]{5}$/;
    var Error = CreditExtraError;
    Error.innerHTML="Please enter the five-digit ZIP number";

    if (validateNotEmpty(obj.value) && obj.value.match(ZIPFormat) )
    {
        if (!Error.classList.contains('is--hidden')) Error.classList.add("is--hidden");
        obj.classList.remove("input--error");
        ValidCreditZIP = true;
    }
    else
    {
        Error.classList.remove("is--hidden");
        obj.classList.add("input--error");
        ValidCreditZIP = false;
        obj.focus();
    }
    validateSection3();
}

/* validate section 2 - whole fields */
function validateSection2() {
    if (ValidName && ValidEmail && ValidAddress && ValidCityState)
    {
        Section3.classList.remove("is--hidden");
        CreditNr.addEventListener("blur", function( event ) {   
            validateCreditNr(event.target);
        }, true);
        if (CreditNr.value == "") CreditNr.focus();

        return true;
    }
    else
    {
        if (!Section3.classList.contains('is--hidden')) Section3.classList.add("is--hidden");
        return false;
    }
}

/* validate section 3 - credit card extra fields */
function validateSection3() {

    if (ValidCreditDate && ValidCreditCVV && ValidCreditZIP)
    {
        CreditSuccess.classList.remove("is--hidden");
        return true;
    }
    else
    {

        return false;
    }
}






