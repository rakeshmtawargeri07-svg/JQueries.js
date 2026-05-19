console.log($("h1").css("font-size"));
jQuery("button").css("background-color","yellow");

$("input").keypress(functionevent);

    function functionevent(event){
        console.log(event.key);
    $("h1").text(event.key);
    }

    $("h1").on("mouseover",colorfunction);
function colorfunction(){
    $("h1").css("color","red");
}

$("h1").click(chnagetext);
function changetext(event){
    $("h1").text("love u");
}

$("h1").before("<button>start of code</button>");
$("h1").after("<button>end of code</button>");
$("h1").prepend("<button>before the code</button>");
$("h1").append("<button>after the code</button>");