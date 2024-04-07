window.addEventListener("load", () => {
    let btn_menu = document.querySelector(".menu")
    let btn_games = document.querySelector(".games")
    let btn_books = document.querySelector(".books")
    let btn_applications = document.querySelector(".applications")
    let btn_music = document.querySelector(".music")
    let menu_field = document.querySelector(".menu_field")
    let btn_filter = document.querySelector(".filter")
    let btn_main = document.querySelector(".main")

    // window.open("games", Игры [])
    console.log(btn_menu)
    btn_menu.addEventListener("click", function dropdown_menu() {
        document.getElementById("menu_field_cont").classList.toggle("show")
    })

    btn_filter.addEventListener("click", function dropdown_menu() {
        document.getElementById("menu_field_cont").classList.toggle("show")
    })

    btn_games.addEventListener("click", function () {
        window.location.href = "games"
    }, 
    )

    btn_applications.addEventListener("click", function () {
        window.location.href = "applications"
    }, 5 * 1000
    )

    btn_books.addEventListener("click", function () {
        window.location.href = "books"
    }, 5 * 1000
    )

    btn_music.addEventListener("click", function () {
        window.location.href = "music"
    }, 5 * 1000
    )

    btn_main.addEventListener("click", function () {
        window.location.href = "main"
    }, 5 * 1000
    )
})


