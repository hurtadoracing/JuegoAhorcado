// JavaScript Document
errors=0;
pkt=0;
toggle=0;
difficulty=2;
hints = 0;

word = [
    "HAMBURGUESA", "TELEFONO", "AUTO", "CABALLO", "RATON", "PERRO", "MESA", "TANQUE", "CUADRADO", "CASA", "PIZZA", "TORO", "TORRE", "BOLSA", "LIBRO", "PLATO", "PERFUME", "LAPICERO", 
    "ESCRITORIO","BLOQUE", "ELEFANTE", "COMEDOR", "LAPTOP", "CABLE", "PODER", "SPAM", "MANO", "OIDO", "PIEZA", "VESTIDO", "BLANCO", "ZAPATO", "GATO", "SANDALIAS", "SHAMPOO", "TIBURON", 
    "DIBUJO", "FIGURA", "ESCRITORIO", "LIBRETA", "AGUA", "SANDWICH", "CAMIONETA", "OVEJA", "GUITARRA", "BATERIA", "PIANO", "PLATA", "JUEGO", "TIGRE", "OSO", "LEON", "MEME",
    "FOLDER", "ARCHIVO", "LISTA", "RELOJ", "ZORRO", "MARIPOSA", "TECLADO", "CAMARA", "PANTALONES", "SMARTPHONE", "PESCADO", "TIENDA", "ROPA", "TURTUGA", "DELFIN", "BONO", "HIELO", 
    "GRANDE", "SALADO", "MORDER", "AEROPUERTO", "TREN", "METRO", "BORREGO", "FESTIVAL", "FOTO", "CADENA", "SILLA", "BRACELETE", "COLLAR", "DIVERTIDO", "PELOTA", "SINTAXIS", "GALLETA", "ACUARIO", "ESCOBA",
    "ESCOPETA", "CARPA", "BANDA", "CINTURON", "DRAGON", "GASOLINA", "GLOBO", "MICROSCOPIO", "CHAQUETA", "PINTURA", "KARMA", "RITMO", "ABOGADO", "CONTADOR", "CASOS", "OVNI", "ESCORPION",
    "BROMA", "FRIJOL", "SERPIENTE", "ESCALERA"
    ];
    
   

$(document).ready(function(){
    $("#alphabet span").click(function(){
        var input = $(this).html();
        var styyl = $(this).attr("id");
        check(input, styyl);
    });
    $("#difficulty").html("DIFFICULTAD: "+difficulty);
    $("#back").hide();
    $(".hint").click(function(){
        if(hints==1){
            alert("Las pistas estaràn disponibles pronto");
        }
        else{
            alert("Solo  disponible en modo fácil");
        }
    });
});

function showMenu() {
    $("#menu").show();
    $("#game").hide();
    $("#opcje").hide();
    $("#autor").hide();
    $(".title").show();
    $("#back").toggle();

}
function showOptions() {
    $("#back").toggle();
    $("#menu").hide();
    $("#opcje").show();
}
function showInfo() {
    $("#back").toggle();
    $("#menu").hide();
    $("#autor").show();
}
function exit(){
    c=confirm("¿Etsás Seguro?");
    if (c===true){
        window.location.href = "index.html";
    }
}
function hide() {
    $("#svg svg").hide();
}
function startpass(){
    boxy = new Array();
    hiden="";
    hub=wordp;
    i=hub.length;
    for(i=0; i<hub.length; i++)
    {
        hiden=hiden+"*";
        boxy[i]="*";
    }
    $("#pass").text(hiden);
}
function startGame(){
    switch(difficulty){
        case 1:
        errors=0;
        hide();
        hints=1;
        $(".hint").css("opacity","1.0");
        break;
        case 2:
        errors=0;
        hide();
        hints=0;
        $(".hint").css("opacity","0.4");
        break;
        case 3:
        if(errors==11){
            errors=0;
        }
        hints=0;
        $(".hint").css("opacity","0.4");
        break;
    }
    var palabra = document.getElementById('word').value;
    var palabraUpper = palabra.toUpperCase();
    word.push(palabraUpper);
    n=Math.floor(Math.random() * 110);
    wordp=word[n];
    clearAlphabet();
    startpass();
    $("#menu").hide();
    $("#game").show();
    $(".title").hide();
    $("#back").show();
    $("#autor").hide();
}
function switchDifficulty(){
    switch(difficulty){
        case 1:
        difficulty++;
        $("#difficulty").html("DIFFICULTAD: "+difficulty);
        break;
        case 2:
        difficulty++;
        $("#difficulty").html("DIFFICULTAD: "+difficulty);
        break;
        case 3:
        difficulty=1;
        $("#difficulty").html("DIFFICULTAD: "+difficulty);
        break;
    }
}

function addError(){
    errors++;
    if(errors<11){
        $("#t"+errors).show();
    }
    else{
        $("#t"+errors).show();
        alert("Tu perdiste! \nWord is: "+wordp+"\nMarcador final es: "+pkt);
        window.setTimeout(gameOver, 600);
    }
}
function gameOver(){
    pkt=0;
    hide();
    showMenu();
}
function clearAlphabet(){
    $("#alphabet span").removeClass("red green");
}
function check(val,styl){
    if (wordp.indexOf(val) > -1){
        $("#"+styl).addClass("green");
        slowa(val);
    }
    else{
        $("#"+styl).addClass("red");
        addError();
    }
}
function slowa(val){
    n=wordp.length;
    for(i=0; i<n; i++){
        st=wordp.indexOf(val, i);
        boxy[st]=val;}
        hiden='';
    for(d=0; d<n; d++){
        hiden+=boxy[d];
        $("#pass").text(hiden);
    }
    checkWords();
}
function checkWords(){
    if(hiden==wordp){
    window.setTimeout(win, 600);
    }
}
function win(){
        pkt++;
    alert("Felicidades! \nTu marcador es: "+pkt+"\nContinuemos!");
    startGame();
}
function jump(){
    if(toggle==0){
        $("#stickman").css("animation","jmp 4s ease-out infinite");
        toggle=1;
    }
    else{
        $("#stickman").css("animation","none");
        toggle=0;
    }
}
