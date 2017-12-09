
$('body').on('click','.change-devored',function(){
   change=$(this).attr('data-id');
   var newEat = $(this).attr("data-devored");
console.log(newEat)

   var eatenState = {
    eaten: newEat
  };
console.log(eatenState)
  // Send the PUT request.
  $.ajax("/api/cats/" + change, {
    type: "PUT",
    data: eatenState
  }).then(
    function() {
      console.log("changed sleep to", newEat);
      // Reload the page to get the updated list
      location.reload();
    }
  );


})

$('#submit').on("click", function(event) {
    // event.preventDefault();

    var newBurger={
burger_name: $('#bur').val().trim()

}

console.log(newBurger); 
   
    // $.post("/api/burger",newBurger, function (data) {

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                alert('Adding New Burger!')
                // Reload the page to get the updated list
                location.reload();
            })


    })
