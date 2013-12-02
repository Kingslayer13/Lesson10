/**
 * Created by оо on 02.12.13.
 */
;(function($){
    $.ajax({
        url: "index.txt",
        type: "GET",
        data: {name: "asd"},
        dataType: "text",
        success: function(ready){},
        error: function(){},
        complete: function(){}
    });



})(jQuery);