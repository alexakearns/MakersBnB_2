$(document).ready(function() {

    $('#confirmation').click(function(e){
        e.preventDefault()
        $('#confirm').html('Booking Confirmed')
        var date = $('#date').val()
            $('#confirmed-date').text('You are stay on ' + date)
        
    })


})

    

