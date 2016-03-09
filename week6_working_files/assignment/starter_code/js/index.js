var city = ["NYC","SF","LA","ATX","SYD"];


for (var i = 0; i < city.length; i++ ) {
  $('#city-type').append('<option>'+city[i]+'</option>');
}

$('form').on('change', '#city-type', function(){
  var city = $('#city-type').val();

  city = city.toLowerCase().trim();
      if (city === "nyc") {
        $('body').attr("class","nyc");
        $("p").html("New York");

    } else if (city === "sf" ){
        $('body').attr('class','sf');
        $("p").html("San Francisco");

    } else if (city === "la") {
        $('body').attr('class','la');
        $("p").html("Los Angeles");

    } else if (city === "atx") {
        $('body').attr('class','austin');
        $("p").html("Austin");

    } else if (city === "syd") {
        $('body').attr('class','sydney');
        $("p").html("Sydney");

    } else if (city == "") {
        alert("Enter another City");

    $("#city-type").val("");
}
});
