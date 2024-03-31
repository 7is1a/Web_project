let btn_menu = document.querySelector(".menu")
let btn_games = document.querySelector(".games")
let btn_books = document.querySelector(".books")
let btn_applications = document.querySelector(".applications")
let btn_music = document.querySelector(".music")
let menu_field = document.querySelector(".menu_field")

btn_menu.addEventListener("click", function() {
    document.getElementById("menu_field_cont").classList.toggle("show")
})
btn_games.addEventListener("click", setTimeout(function(){
    window.location.href="games"}, 5*1000
))
btn_applications.addEventListener("click", setTimeout(function(){
    window.location.href="applications"}, 5*1000
))
btn_books.addEventListener("click", setTimeout(function(){
    window.location.href="books"}, 5*1000
))
btn_music.addEventListener("click", setTimeout(function(){
    window.location.href="music"}, 5*1000
))
