for (horas = 0; horas <= 24; horas++) {
       
        setTimeout(() => {
            horas < 10 && minutos < 10 && segundos < 10  ? Count.innerHTML = `0${horas}:0${minutos}:0${segundos}` : 
            horas < 10 && minutos < 10 ? Count.innerHTML = `0${horas}:0${minutos}:${segundos}` :
            horas < 10 ? Count.innerHTML = `0${horas}:${minutos}:${segundos}` : null
            
        }, horas*1000);

        for(minutos = 0; minutos <= 59; minutos++){
            
            setTimeout(() => {

                horas < 10 && minutos < 10 && segundos < 10  ? Count.innerHTML = `0${horas}:0${minutos}:0${segundos}` : 
                horas < 10 && minutos < 10 ? Count.innerHTML = `0${horas}:0${minutos}:${segundos}` :
                horas < 10 ? Count.innerHTML = `0${horas}:${minutos}:${segundos}` : null
        
            }, minutos*1000);

            for(segundos = 1; segundos <= 59; segundos++){

                setTimeout(() => {
                    horas < 10 && minutos < 10 && segundos < 10  ? console.log(`0${horas}:0${minutos}:0${segundos}`) : 
                    horas < 10 && minutos < 10 ? console.log(`0${horas}:0${minutos}:${segundos}`) :
                    horas < 10 ? console.log(`0${horas}:${minutos}:${segundos}`): null
        
                }, segundos*1000);

            }

        }
    }