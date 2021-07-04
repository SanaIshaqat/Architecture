// alert ("Welcome to my Website!")


// var name = prompt ("What is your name?")
// alert ( "Welcome to my website " + name + " :) " )

// console.log (name)

var favoritearchitecturalstyle = prompt ("What Is Your Favorite Architectural Style? (Classical Architecture, Modern Architecture,Contemperary Architecture)")

console.log (favoritearchitecturalstyle)

function archfunc() {

if (favoritearchitecturalstyle == "Modern")
{alert ("You Entered Modern")}
else if (favoritearchitecturalstyle != null)
{document.write ("<h4>" + favoritearchitecturalstyle + "</h4>")}
else {alert ("You didn't enter anything")}



if (favoritearchitecturalstyle == "Classical Architecture"){var times= prompt ("How Many More Times Would You Like to see it ?")}

while (times>10){times=prompt("Please Enter Less Than 10 Value")}

for (var i = 0; i<times ; i++){document.write("<div>"+"<h3>"+ favoritearchitecturalstyle +"</h3>"+"<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIC9tpblkyDmypDI8cUlGaslqvvP-XnjET4OYInqA45-VcufePydqup856AHHBOs1BKBs&usqp=CAU' alt='Classical Architecture'>" +"</div>" )
} 
while (favoritearchitecturalstyle != "Classical Architecture" && favoritearchitecturalstyle != "Modern Architecture" && favoritearchitecturalstyle != "Contemperary Architecture"){favoritearchitecturalstyle=prompt("Please Enter Your Favorite Type From Displayed Options (Classical Architecture, Modern Architecture,Contemperary Architecture)")}




if (favoritearchitecturalstyle == "Modern Architecture"){var times= prompt ("How Many More Times Would You Like to see it ?")}

while (times>10){times=prompt("Please Enter Less Than 10 Value")}


for (var i = 0; i<times ; i++){document.write("<div>"+"<h3>"+ favoritearchitecturalstyle +"</h3>"+"<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-BtZtNHi3SQ_LSGrB_EJ5tpGiLNE08fXjcpPx-tiqtcvaJZq_9JutwIMekm2Hd7CE4Q&usqp=CAU' alt='Modern Architecture'>" +"</div>" )
} 


if (favoritearchitecturalstyle == "Contemperary Architecture"){var times= prompt ("How Many More Times Would You Like to see it ?")}

while (times>10){times=prompt("Please Enter Less Than 10 Value")}


for (var i = 0; i<times ; i++){document.write("<div>"+"<h3>"+ favoritearchitecturalstyle +"</h3>"+"<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkaAboXe9kesOGomEZVbtqS1sP3uKenOi4-S6MmfJEw4pUbSVQ0rttWYBIstdt3HoGVs&usqp=CAU' alt='Contemperary Architecture'>" +"</div>" )
} 

while (favoritearchitecturalstyle != "Classical Architecture" && favoritearchitecturalstyle != "Modern Architecture" && favoritearchitecturalstyle != "Contemperary Architecture"){favoritearchitecturalstyle=prompt("Please Enter Your Favorite Type From Displayed Options")}
}

archfunc();





var rate= prompt("How many stars would you rate us? ")
console.log (rate)

function ratefunc (number){

  var answer=" "

  for (var a=0; a<number;a++){ 

    console.log(answer);
    answer= answer +"<img src='https://lh3.googleusercontent.com/proxy/5-HkhJn4ISyMl5kLYScbiUAIv0mM5m7wk6K6tgIQwxgrx_ywJHgKL4hSC9evMutsGpm2iOVq2-Pno2EHCqb89qIFCkxUru8' alt='star'>"
  }
  return answer ;
}

document.write(ratefunc(rate))



