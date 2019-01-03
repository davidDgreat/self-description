var user = alert("WELCOME TO EMPEROR'S BIO");
var user = alert("HOPE YOU ENJOY YOUR TIME HERE");
var user = alert("WELCOME WILLYSCAR");
var user = alert("willyscar's songs are here and free for you to stream and download anytime thank me later...");
var user = alert("ENJOY MY MUSIC LIBRARY BELOW PAGE!");
var user = confirm("are you ready to view this page?");
var images = [
    "project.jpg",
    "me-wendorf.jpg",
    "me-people.jpg",
    "me-stand.jpg",
    "htmlcss.jpg",
    "download.jpg"
];
var num = 0;
function next() {
    document.getElementById('slider');
    num++;
    if(num >= images.length){
      num = 0;
}
 slider.src = images[num];
}
function prev() {
    document.getElementById('slider')
    num--;
    if(num < 0){
        num = images.length-1;
    }
   slider.src = images[num];
}