const h1 = document.querySelector(".heading1")
const h2 = document.querySelector(".heading2")
const h3 = document.querySelector(".heading3")
const h4 = document.querySelector(".heading4")
const h5 = document.querySelector(".heading5")
const h6 = document.querySelector(".heading6")
const h7 = document.querySelector(".heading7")
setTimeout(() => {
    h1.textContent = "one"
    h1.style.color = "violet"

    setTimeout(() => {
        h2.textContent = "Two"
        h2.style.color = "purple"

        setTimeout(() => {
            h3.textContent = "Three"
            h3.style.color = "red"
            setTimeout(() => {
                h4.textContent = "Four"
                h4.style.color = "pink"
                setTimeout(() => {
                    h5.textContent = "Five"
                    h5.style.color = "green"

                    setTimeout(() => {
                        h6.textContent = "six"
                        h6.style.color = "blue"

                        setTimeout(() => {
                            h7.textContent = "seven"
                            h7.style.color = "brown"
                        }, 1000);
                    }, 3000);
                }, 2000);
            }, 1000);
        }, 2000);
    }, 2000);
}, 1000);








