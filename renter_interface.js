$(document).ready(function() {

    $('#confirmation').click(function(e){
        e.preventDefault()
        $('#confirm').html('Booking Confirmed')
        var date = $('#date').val()
        var price = $('#price').val()
        $('#confirmed-date').text('You are staying at the beach shack on ' + date)
        $('#confirmed-price').text('Price: £250')
        
    })


})

    

