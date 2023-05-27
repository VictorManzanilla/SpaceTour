
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');


tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
   
})



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

    
}