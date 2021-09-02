$.getJSON("http://dataservice.accuweather.com/forecasts/v1/daily/5day/125594?apikey=Your_API_KEY&language=es-es&metric=true", function(dades){ // llamada a JSON i declaro funcion "dades"
    console.log(dades); // paso per consola
    //alert(dades);
    
    document.getElementById("frase").innerHTML += "<p class='phrase'>" +  dades["Headline"]["Text"] + "</p>"; // poso al html la frase de prediccioexem: "Tormentes electriques el dijous"

    
    for( i=0; i<dades["DailyForecasts"].length; i++){ // Faig bucle i el recorro
        
       

        var iconDay = dades["DailyForecasts"][i]["Day"]["Icon"]; // var de dia per posar la icona de dia.
        //var iconNight = dades["DailyForecasts"][i]["Night"]["Icon"]; // var de nit, per posar la icona de nit.
        
        var fecha = dades["DailyForecasts"][i]["Date"];

        var dia_semana = dayoftheweek(fecha); // L'hi dic que la var dia_semana es = al dia que toqui de la setmana...

        

        document.getElementById("data"+i).innerHTML += "<p>" + dia_semana + fecha.substring(8, 10)+"</p>"; // introdueixo al web la data.

        
        
        document.getElementById("tempmin"+i).innerHTML += dades["DailyForecasts"][i]["Temperature"]["Minimum"]["Value"] +" Temp.Min. "; // Temp. minima

        document.getElementById("tempmax"+i).innerHTML +=  dades["DailyForecasts"][i]["Temperature"]["Maximum"]["Value"] +" Temp.Max."; // Temp.max

        document.getElementById("icon"+i).innerHTML = "<img src=img/icons/"+ iconDay +".png>"; // si es de dia

        document.getElementById("prediccio"+i).innerHTML +="<p>"+ dades["DailyForecasts"][i]["Day"]["IconPhrase"]+ "</p>";

        //document.getElementById("icon"+i).innerHTML = "<img src=img/icons/"+ iconNight +".png>"; // si es de nit...
        
        //document.getElementById("prediccio"+i).innerHTML +="<p>"+ dades["DailyForecasts"][i]["Night"]["IconPhrase"]+ "</p>";
        
    }
})

function dayoftheweek(fecha){
    var ndia = new Date(fecha).getDay(); // Agafo el num del día de la semana
    var days = [" Domingo "," Lunes "," Martes "," Miércoles "," Jueves "," Viernes "," Sabado "]
    return days[ndia];
}






/*
var weekday = (dayoftheweek)

function datoftheweek(date){
    var=date = new Date(date).getDay();
    var dats = [dll,dms, dime, djs, dv, dss, diu]
}
*/ 