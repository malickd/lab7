/* Using JavaScript

var columns = document.querySelectorAll('.columns');
for (var item in columns ) {
    columns[item].onclick = function() {
        this.style.display= "none";
    }
}

*/



/* Using jQuery */


/*
$('.columns').click ( function() {
        this.style.display= "none";
});

OR  

$('.columns').click ( function() {
        $(this).hide();
});

OR
.hide('slow');
.hide('fast');
.hide(1000ms);

.fade();
.fadeOut()
can also be used with 'slow', 'fast', etc.

See http://api.jquery.com, click on API Documentation for more details
*/

/* The followiong use of document.ready incapsulate our code, its protects it */
$(document).ready(function(){
    
    $('.toggle').click ( function() {
        $(this).next().fadeToggle('slow');
        $(this).next().text('Hello, I have just been changed.');
    });

})