// Accordian
var action = "click";
var speed = "300";
function copyTextFun() {
    $('#alert').slideToggle(speed).delay( 800 ).slideToggle(speed)
    /* Get the text field */
    var policyID = '47bd5dc5bd174ef911fdcbf540d37e1a74d0b3e91e923f395a633fbf';
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(policyID);

    /* Alert the copied text */
    // alert("Copied the text: " + policyID.value);
    
}
$(document).ready(function () {
    // Question handler
    $('li.q').on(action, function () {

        $(this).children('img').toggleClass('rotate-90');

        // Get next element
        $(this).next()
            .slideToggle(speed)
            // Select all other answers
            .siblings('li.a')
            .slideUp()


    });
});
$(document).ready(function () {

    // jQuery methods go here...
    // $('nav').hide();
    $('#translate').addClass("md:translate-x-0")
    $('#translate-1').addClass("md:translate-x-0")

    function hello() {
        console.log("HEYYYY")
    }
    $('#openMenu').click(function () {
        $('aside').removeClass("-right-52");
        $('aside').addClass("right-0");
        console.log('Clicked!')
    })
    $('#closeMenu').click(function () {
        $('aside').removeClass("right-0");
        $('aside').addClass("-right-52");
        console.log('Clicked!')
    })
});