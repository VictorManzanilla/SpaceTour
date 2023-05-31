
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');


tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
   
});



let tabFocus = 0;

// The numbers are the keycodes for the right and left keys. To that
// do console.log(e.keycode)
tabList.addEventListener('keydown', (e) => {
    // console.log(e.keyCode)
    const keydownLeft = 37;
    const keydownRight = 39;

    //change the tabindex of the current tab to -1
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    }

    //if the right key is pushed, move to the next tab on the right
    if (e.keyCode === keydownRight) {
        tabFocus++;
         if (tabFocus >= tabs.length) {
            tabFocus = 0;
         }
        // console.log(tabFocus)
    }
    //if the left key is pushed, move to the next tab on the left
    if (e.keyCode === keydownLeft) {
        tabFocus = tabFocus - 1;
        if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
        }
        // console.log(tabFocus)
    }
//its set to zero
    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();

})

function changeTabPanel(e) {
    const  targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;
 
    //we are selecting all articles
    //then we loop through them and setting all to be hidden
    mainContainer
    .querySelectorAll('[role="tabpanel"]')
    .forEach((article) => article.setAttribute("hidden", true));
    //then here we are selecting the one have hidden removed
    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');
    // console.log(mainContainer)

    mainContainer
    .querySelectorAll('picture')
    .forEach((pic) => pic.setAttribute("hidden", true));
}