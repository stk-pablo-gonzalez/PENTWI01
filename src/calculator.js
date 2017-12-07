$(document).ready(function() {
    var result = 0;
    var temp = 0;
    var currentOperation = '';

    $("button").click(function() {
        var data = $(this).attr("data-value");
        console.log("clicked: " + data);

        if(data == "clear") {
            temp = 0;
            result = 0;
        } else if(data == "multiply") {
            if(result == 0)
                result
        } else {
            
        }
    });

    function displayResult() {
        $("#txtResult").val(result);
    }

    function setResult(value) {
        $("#txtResult").val();
    }

    function getResult() {
        return $("#txtResult").val();
    }

    function appendDigitToResult() {
        var value = $("#txtResult").val();
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
        }
    }
});