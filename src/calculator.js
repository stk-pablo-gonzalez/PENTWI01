$(document).ready(function() {
    var result = 0;
    var temp = 0;

    $("button").click(function() {
        var data = $(this).attr("data-value");
        console.log("clicked: " + data);

        if(data == "clear") {
            temp = 0;
            result = 0;
        } else {
            var value = $("#txtResult").val();
            if(value == "0") value = "";
            value += "" + data;
            setResult(value);
        }
    });

    function setResult(value) {
        $("#txtResult").val(value);
    }
});