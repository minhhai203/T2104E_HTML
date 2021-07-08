$.ajax({
    url:"https://api.openweathermap.org/data/2.5/weather?q=hanoi,vietnam&&units=metric&appid=09a71427c59d38d6a34f89b47d75975c",
    method:"GET",
    success:function(rs){
        var nhietdo = rs.main.temp;
        var nhietdoMin = rs.main.temp  ;
        var nhietdoMax = rs.main.temp ;
        $("#nhietdo").text(nhietdo);
        $("#min").text(nhietdoMin);
        $("#max").text(nhietdoMax);
        $("#city").text(rs.name+","+rs.sys.country);
            for(var i=0;i<rs.weather.length;i++){
                $("#desc").text(rs.weather[i].main+","+rs.weather[i].description);
            }
    }
});