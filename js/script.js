/******************************************
Random Quote Generator
  -two buttons (inspiration and office)
  -quotes array w quote objects(quote, source, citation, year, rating)
  -using javascript, html, css, and readme.md
******************************************/


/*** 
  array of quotes w six quote objects (3 inspiration & 3 office)
    -5 object values (quote, source, citation, year, rating)
      -year and citation are only for some
    -logged array to console
***/
var quotes = [
  {quote: "The way to get started is to quit talking and begin doing.", source: "Walt Disney", citation: "", year: "", rating: "8/10"},
  {quote: "It’s not whether you get knocked down, it’s whether you get up.", source: "Vince Lombardi", citation: "", year: "", rating: "6/10"},
  {quote: "Speak softly and carry a big stick; you will go far.", source: "Theodore Roosevelt", citation: "McKinley-Roosevelt Campaign", year: "1903", rating: "2/10"},
  {quote: "The worst thing about prison was the dementors.", source: "Michael 'Prison Mike' Scott", citation: "The Office", year: "2006", rating: "9/10 (for accuracy)"},
  {quote: "Occasionally, I’ll hit someone with my car. So sue me.", source: "Michael Scott", citation: "The Office", year: "2007", rating: "7/10"},
  {quote: "I’m not superstitious, but I am a little stitious.", source: "Michael Scott", citation: "The Office", year: "2007", rating: "4/10"}
  ]
  console.log(quotes);

/***
  getOfficeQuote and getInspirationQuote return a random quote from that section and create a 
  variable x thats stores a random number to return quote from quotes array
    -for office quotes add the number of quotes divided by 2 to reach that section of array
      -helps so you can add as many quotes as u want as long as u add 1 insp. quote w 1 off. quote
***/
function getOfficeQuote(){
  var x = (quotes.length/2) * Math.random();
  x =  Math.floor(x);
  x+=quotes.length/2;
  return quotes[x];
}
function getInspirationQuote(){
    var x = (quotes.length/2) * Math.random();
    x =  Math.floor(x);
    return quotes[x];
}



/***
   printQuote functions (printInsQuote & printOffQuote)
    -4 diff sections
      1. get random quote of their type from array and change quotebox text of HTML
      2. change color of body background to random
      3. change color of button background to random
      4. every 30s the function will call itself and print a different quote of its type
***/

function printInsQuote(){
  var quote = getInspirationQuote();
  var HTMLid = '<p class = "quote">' + quote.quote + '</p>' + '<p class = "source">' +quote.source;
  if(quote.citation != ""){
    HTMLid = HTMLid + '<span class ="citation">' + quote.citation + '</span>';
  }
  if(quote.source != ""){
    HTMLid = HTMLid + '<span class ="year">' + quote.year + '</span>';
  }
  HTMLid = HTMLid + '<p class = "rating">' + quote.rating + '</p>';
  HTMLid += "</p>";
  document.getElementById("quote-box").innerHTML = HTMLid;

  var red = Math.floor(Math.random()*255);
  var green = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*255);
  document.body.style.background = 'rgb( ' + red + ',' + green + ',' + blue + ')';

  var redbutton = Math.floor(Math.random()*255);
  var greenbutton = Math.floor(Math.random()*255);
  var bluebutton = Math.floor(Math.random()*255);
  document.getElementById("loadInsQuote").style.background = 'rgb( ' + redbutton + ',' + greenbutton + ',' + bluebutton + ')';
  
  setInterval("printInsQuote()", 30000);
  

}

function printOffQuote(){
  var quote = getOfficeQuote();
  var HTMLid = '<p class = "quote">' + quote.quote + '</p>' + '<p class = "source">' +quote.source;
  if(quote.citation != ""){
    HTMLid = HTMLid + '<span class ="citation">' + quote.citation + '</span>';
  }
  if(quote.source != ""){
    HTMLid = HTMLid + '<span class ="year">' + quote.year + '</span>';
  }
  HTMLid = HTMLid + '<p class = "rating">' + quote.rating + '</p>';
  HTMLid += "</p>";
  document.getElementById("quote-box").innerHTML = HTMLid;

  var red = Math.floor(Math.random()*255);
  var green = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*255);
  document.body.style.background = 'rgb( ' + red + ',' + green + ',' + blue + ')';

  var redbutton = Math.floor(Math.random()*255);
  var greenbutton = Math.floor(Math.random()*255);
  var bluebutton = Math.floor(Math.random()*255);
  document.getElementById("loadOffQuote").style.background = 'rgb( ' + redbutton + ',' + greenbutton + ',' + bluebutton + ')';
  
  setInterval("printOffQuote()", 30000);
  
}




/***
  When click either button, it will show a quote from that 
  section by calling printInsQuote or printOffQuote function
***/

document.getElementById('loadInsQuote').addEventListener("click", printInsQuote, false);
document.getElementById('loadOffQuote').addEventListener("click", printOffQuote, false);