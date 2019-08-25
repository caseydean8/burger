// $(function() {
    $("#devoured").on("click", function(event) {
        console.log("eat it!")
      var id = $(this).data("id");
    //   var devoured = $(this).data("newsleep");
  
      var nowDevoured = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: nowDevoured
      }).then(
        function() {
          console.log("changed devoured to 1");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    })
// })