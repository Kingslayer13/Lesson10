/**
 * Created by оо on 02.12.13.
 */
;(function($){
    $.get("JS/main.json", {
        "name": "artem",
        "age": 25
        }
        ,function(result){
        console.log(result);
    }, "json");



})(jQuery);