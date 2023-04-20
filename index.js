const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone clicks the hamburger button
navToggle.addEventListener("click", () => {
//    the data-visible comes from ul attribute data-visible(prefix is data then name it whatever after that, so we have visible)
    // if the nav is closed, open it
    const visiblity = nav.getAttribute("data-visible");
        // if the nav is closed, open it
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);

    }
    // console.log(visiblity)
    // console.log(navToggle.getAttribute("aria-expanded"))
    
    
})