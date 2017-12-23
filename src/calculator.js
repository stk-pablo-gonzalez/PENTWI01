$(document).ready(function() {
    var temp = 0;
    var currentOperation = '';

    $("button").click(function() {
        var data = $(this).attr("data-value");
        console.log("clicked: " + data);

        if(data == "clear") {
            temp = 0;
            setResult(0);
        } else if(isDigit(data)) {
            if(currentOperation !== '')
                setResult(0);
            appendDigitToResult(data);
        } else {
            if(currentOperation === '') {
                currentOperation = data;
                temp = getResult();
            } else {
                var b = getResult();
                var r = operations[currentOperation](temp, b);
                currentOperation = '';
                temp = 0;
                setResult(r);
            }
        }
    });

    function isDigit(data) {
        var pattern = /[0-9]/i;
        return pattern.test(data);
    }

    function setResult(value) {
        $("#txtResult").val(value);
    }

    function getResult() {
        return $("#txtResult").val();
    }

    function appendDigitToResult(data) {
        var value = getResult();
        if(value == "0") value = "";
        value += "" + data;
        setResult(value);
    }

    var operations = {
        sum: function(a, b) {
            return a + b;
        },
        substract: function(a, b) {
            return a - b;
        },
        multiply: function(a, b) {
            return a * b;
        },
        divide: function(a, b) {
            return a / b;
        },
        pct: function(a, b) {
            return a * (b / 100);
        },
        equal: function() {

        }
    };

    function init() {
        $("#txtResult").css("width", "100%");
        $("button").css("width", "100%");  
    }

    init();
});