     
      function openDropdown() {
        document.getElementById("myDropdown").style.display = "block";
    }

    
    function closeDropdown() {
        document.getElementById("myDropdown").style.display = "none";
    }

    document.getElementById("dropdownInput").addEventListener("click", function(event) {
        openDropdown();
        event.preventDefault(); 
    });

    window.addEventListener("click", function(event) {
        if (!event.target.matches("#dropdownInput")) {
            closeDropdown();
        }
    });


    const gameListContainer = document.querySelector(".shop");

const games = jsonData.products;

const gameElements = games.map(game => {
    const hasOldPrice = typeof game.old_price !== 'undefined';
            return `
                <div class="game">
                            <img src="${game.image}" alt="">
                            <h3>${game.name}</h3>
                            <div class="about-game">
                                <div class="stars">
                                ${game.stars}
                                </div>
                                <p>$${game.price} ${hasOldPrice ? `<s>$${game.old_price}</s>` : ''}</p>
                            </div>    
                            <div class="add-to-cart">
                                <a href="">Add to cart</a>
                            </div>
                        </div>
            `
});
let banner = document.querySelector(".banner");
let left_btn = document.querySelector(".left_btn")
let right_btn = document.querySelector(".right_btn");

let images = ["image1.jpg", "image2.jpg", "image3.jpg"];

let index = 0;

function slide(index) {
    banner.style.backgroundImage = `url(/src/img/${images[index]})`
}

left_btn.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }

    slide(index);
})

right_btn.addEventListener("click", () => {
    index++;
    if (index > images.length - 1) {
        index = 0;
    }

    slide(index);
})   


const countDownDate = new Date("september 30, 2023 21:00:00").getTime();
const result = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance <= 0) {
        clearInterval(result);
        document.querySelector(".time").innerHTML = "EXPIRED";
    } else {
        if (seconds === 0 && minutes > 0) {
            minutes -= 1;
            seconds = 59;
        } else if (seconds < 0) {
            seconds = 0;
        }

        document.querySelector(".day").innerHTML = days + "d";
        document.querySelector(".hour").innerHTML = hours + "h";
        document.querySelector(".minute").innerHTML = minutes + "m";
        document.querySelector(".second").innerHTML = seconds + "s";
    }
}, 1000);
