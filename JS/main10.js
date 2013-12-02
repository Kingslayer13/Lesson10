/**
 * Created by оо on 02.12.13.
 */
;(function($){
    var promise = $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: encodeURI("css")
        },
        success: function(result){
            console.log(result)
        }
    }).promise();



})(jQuery);