

//PROGRAMOS LA MUESTRA DE LA CARTA

var imgUnoRemoved = false;
var imgDosRemoved = false;
var turnos = 0;


function flip(event){ 
    var arr = [
        {
            "pregunta": "(1) Oversett: Jeg vasker meg / Hun vasker seg",
            "respuesta": "(1) (Yo) me lavo / Ella se lava"
        },
        {
            "pregunta":"(2) Oversett: Han gir dem mange problemer",
            "respuesta":"(2) Él les da muchos problemas"
        },
        {
            "pregunta": "(3) Oversett: Jeg spiser din pizza",
            "respuesta": "(3) (Yo) como tu pizza"
        },
        {
            "pregunta": "(4) Oversett: Takk for din pizza",
            "respuesta": "(4) Gracias por tu pizza"
        },
        {
            "pregunta": "(5) Oversett: Vi må gi henne alle bøkene",
            "respuesta": "(5) (nosotros-as) le tenemos que dar todos los libros"
        },
        {
            "pregunta": "(6) Oversett: Paula skriver han et fint brev",
            "respuesta": "(6) Paula le escribe una carta linda"
        },
        {
            "pregunta": "(7) Oversett: Juan føler seg dårlig i dag",
            "respuesta": "(7) Juan se siente mal el día de hoy"
        },
        {
            "pregunta": "(8) Oversett: Hun skal legge seg tidlig",
            "respuesta": "(8) Ella va a acostarse temprano"
        },
        {
            "pregunta": "(9) Oversett: De skal studere Matematikk i morgen",
            "respuesta": "(9) Ellos-as van a estudiar Matemáticas mañana"
        },
        {
            "pregunta": "(10) Oversett: Jeg vil våkne opp kl. 6 i morgen",
            "respuesta": "(10) (Yo) me quiero levantar a las 6 mañana)"
        },
        {
            "pregunta": "(11) Oversett: Vi liker å gå på kino",
            "respuesta": "(11) (A nosotros-as) Nos gusta ir al cine"
        },
        {
            "pregunta": "(12) Oversett: Hun liker å høre musikk",
            "respuesta": "(12) (A ella) le gusta escuchar música"
        },
        {
            "pregunta": "(13) Oversett: Jeg ser på mye TV om kvelden",
            "respuesta": "(13) (Yo) veo mucha TV por la noche"
        },
        {
            "pregunta": "(14) Oversett: Jeg har reist til Barcelona i sommer",
            "respuesta": "(14) (Yo) he viajado a Barcelona este verano"
        },
        {
            "pregunta": "(15) Oversett: Det er sol i dag",
            "respuesta": "(15) Hay sol hoy == Hace sol hoy"
        },
        {
            "pregunta": "(16) Oversett: Det skal være sol i dag",
            "respuesta": "(16) Va a hacer sol hoy"
        },
        {
            "pregunta": "(17) Oversett: Det har regnet hele dagen",
            "respuesta": "(17) Ha llovido todo el día"
        },
        {
            "pregunta": "(18) Oversett: Det har vært varmt/kaldt forrige sommer",
            "respuesta": "(18) Ha hecho calor/frío el verano pasado"
        },
        {
            "pregunta": "(19) Oversett: Hvem vil komme til mitt hus?",
            "respuesta": "(19) Quién quiere venir a mi casa"
        },
        {
            "pregunta":"(20) Oversett: Skal vi studere på ditt eller mitt hus",
            "respuesta":"(20) (Nosotros-as) Vamos a estudiar en tu o en mi casa"
        },
        {
            "pregunta": "(21) Oversett: Så fin er din klokke!",
            "respuesta": "¡Qué bonito es tu reloj!"
        },
        {
            "pregunta": "(22) Oversett: Når våkner du?",
            "respuesta": "(22) ¿Cuándo te levantas?"
        },
        {
            "pregunta": "(23) Oversett: Gitaren til Paula / Paulas guitar",
            "respuesta": "(23) La guitarra de Paula"
        },
        {
            "pregunta": "(24) Oversett: Boka til Lene / Lenes bok",
            "respuesta": "(24) El libro de Lene"
        },
        {
            "pregunta": "(25) Oversett: Blyanten til gutten / Guttens blyant",
            "respuesta": "(25) El lápiz del (del == de el) niño"
        },
        {
            "pregunta": "(26) Traducir: No quiero comer",
            "respuesta": "(26) Jeg vil ikke spise "
        },
        {
            "pregunta": "(27) Traducir: ¿Hablas ruso? No, no hablo ruso",
            "respuesta": "(27) Snakker du russisk? Nei, jeg snakker ikke russisk"
        },
        {
            "pregunta": "(28) Traducir: No hay tigres en Noruega",
            "respuesta": "(28) Det finnes ikke tigere i Norge"
        },
        {
            "pregunta": "(29) Traducir: En mi clase no hay muchos alumnos",
            "respuesta": "(29) I klassen min er det ikke mange elever "
        },
        {
            "pregunta": "(30) Traducir: Me he levantado temprano el día de hoy",
            "respuesta": "(30) Jeg har stått opp tidlig i dag"
        },
        {
            "pregunta": "(31) Traducir: No me he lavado hoy",
            "respuesta": "(31) Jeg har ikke vasket meg i dag"
        },
        {
            "pregunta": "(32) Traducir: Este regalo es para mí",
            "respuesta": "(32) Denne gaven er til meg"
        },
        {
            "pregunta": "(33) Traducir: Me acuerdo de ti",
            "respuesta": "(33) Jeg husker deg"
        },
        {
            "pregunta": "(34) Traducir: Mi madre nos espera",
            "respuesta": "(34) Min mor venter på oss"
        },
        {
            "pregunta": "(35) Traducir: Esta chica es súper simpática (== simpatiquísima)",
            "respuesta": "(35) Denne jenta er kjempehyggelig"
        },
        {
            "pregunta": " (36) Traducir: ¡Estos zapatos son súper caros (==carísimos)",
            "respuesta": "(36) Disse skoene er kjempedyre!"
        },
        {
            "pregunta": "(37) Traducir: Esta comida está buenísima (== muy buena)",
            "respuesta": "(37) Denne maten er kjempegod"
        },
        {
            "pregunta": "(38) Traducir: Mi casa es la más bonita",
            "respuesta": "Mitt hus er det vakreste huset"
        },
        {
            "pregunta": "(39) Traducir: Mi cuaderno es más viejo que tu cuaderno",
            "respuesta": "(39) Min skrevebok er eldre enn din skrivebok"
        },
        {
            "pregunta": "(40) Traducir: La casa blanca",
            "respuesta": "(40) Det hvite huset"
        },
        {
            "pregunta": "(41) Traducir: Las murallas amarillas",
            "respuesta": "(41) De gule veggene"
        },
        {
            "pregunta": "(42) Traducir: Un chico/chica simpático/a",
            "respuesta": "(42) En hyggelig gutt / Ei hyggelig jente"
        },
        {
            "pregunta": "(43) Traducir: ¿Qué has hecho este fin de semana?",
            "respuesta": "(43) Hva har du gjort i helga?"
        },
        {
            "pregunta": "(44) Traducir: Mi papá ha vivido toda su vida en Madrid",
            "respuesta": "(44) Min pappa har bodd hele livet sitt i Madrid"
        },
        {
            "pregunta": "(45) Traducir: A los 20 años he empezado a trabajar",
            "respuesta": "(45) Når jeg var 20 år gammel har jeg begynt å jobbe"
        },
        {
            "pregunta": "(46) Traducir: La última semana ha sido muy tranquila (==tranquilísima)",
            "respuesta": "(46) Den forrige uka var veldig rolig"
        },
        {
            "pregunta": "(47) Traducir: Todos los veranos viajamos a Gran Canaria",
            "respuesta": "(47) Alle somrene reiser vi til Gran Canaria"
        },
        {
            "pregunta": "(48) Traducir: Hace dos años visitamos México",
            "respuesta": "(48) For to år siden besøker vi Mexico"
        },
        {
            "pregunta": "(49) Traducir: Hace tres días yo he estudiado por última vez",
            "respuesta": "(49) For tre dager siden jeg har studert på siste gangen"
        },
        {
            "pregunta": "(50) Traducir: Ayer ",
            "respuesta": "(50) I går"
        }
        
    ]
    
    var i = arr.length-1, j, temp;

    while(i > 0, i--){
        j = Math.floor(Math.random() * (arr.length));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }

    
    var respuesta = arr[0].respuesta;
    document.getElementById("button-respuesta").addEventListener("click", function() {
        document.getElementById("parrafo-dos").innerHTML = respuesta;
      });


    var randomCart = arr[0].pregunta;
    var textoCarta = document.getElementById("parrafo");
    textoCarta.innerHTML = randomCart; 
    
}




   document.getElementById("button-siguiente").addEventListener("click", function() {
        var portadaUno = document.getElementById("fondo-respuesta");
        var portadaDos = document.getElementById("portada-dos");
        portadaUno.style.backgroundColor = "##8B0000";
        document.getElementById("parrafo-dos").innerText = "RESPUESTA";
        portadaDos.style.backgroundColor = "##8B0000";
        document.getElementById("parrafo").innerText = "PREGUNTA";

    });
/*   
function siguientePregunta(){
        var portadaUno = document.getElementById("portada-uno");
        var portadaDos = document.getElementById("portada-dos");
        portadaUno.style.backgroundColor = "black";
    }
    setTimeout(() => siguientePregunta(), 9000);   

    

    






   




   



            

        
    
    
        



    


    












/*
const cardsArray = Array.from(cards);
console.log(cardsArray);
*/

/*
let cardsShuffle = function (cardsArray){
    let newPos;
    for (let i = cardsArray.lenght -1; i> 0; i--){
        newPos = Math.floor(Math.random()* ( i+1));
        temp = cardsArray[i];
        cardsArray[i]=cardsArray[newPos];
        cardsArray[newPos] = temp;
    }
    return cardsArray;
};
*/














    

  
   

 





