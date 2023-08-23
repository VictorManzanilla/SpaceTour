
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
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");
    
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode
    // const picture = document.getElementById("rock")
    // console.log(picture)
    
    
    mainContainer
        .querySelectorAll('article')
        .forEach((article) => article.setAttribute("hidden", true));
    
    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');
    
     mainContainer
        .querySelectorAll('picture')
        .forEach((picture) => picture.setAttribute("hidden", true));

        mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');

        
}

// function changeTabPanel(e) {
//     const targetTab = e.target;
//     const targetPanel = targetTab.getAttribute("aria-controls");
    
//     const tabContainer = targetTab.parentNode;
//     const mainContainer = tabContainer.parentNode;
    

    
//     mainContainer
//         .querySelectorAll('[role="tabpanel"]')
//         .forEach((panel) => panel.setAttribute("hidden", true));
    
//     mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');
    
//     mainContainer
//         .querySelectorAll('[role="pic"]')
//         .forEach((pic) => pic.setAttribute("hidden", true));
        
// }







        
    // const  targetTab = e.target;
    // const targetPanel = targetTab.getAttribute("aria-controls");
    // const targetImage = targetTab.getAttribute("data-image");

    
    // const tabContainer = targetTab.parentNode;
    // const mainContainer = tabContainer.parentNode;

    // tabContainer
    //     .querySelector('[aria-selected="true"]')
    //     .setAttribute("aria-selected", false);
        
    // targetTab.setAttribute("aria-selected", true);
 
    // // we are selecting all articles
    // // then we loop through them and setting all to be hidden
    // mainContainer
    // .querySelectorAll('[role="tabpanel"]')
    // .forEach((panel) => panel.setAttribute("hidden", true));
    // // then here we are selecting the one have hidden removed
    // mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');

    // mainContainer
    // .querySelectorAll('img')
    // .forEach((img) => img.setAttribute("hidden", true));
    

    // mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');

    // console.log(targetImage, 'HEREEEEEEEEEEEEEEEEEE')


////////////////////////AFTER REFRACTORING/////////////////////////
//     tabContainer
//     .querySelector('[aria-selected="true"]')
//     .setAttribute("aria-selected", false);
    
// targetTab.setAttribute("aria-selected", true);

// hideContent(mainContainer, '[role="tabpanel"]');
// showContent(mainContainer, [`#${targetPanel}`]);

// hideContent(mainContainer, 'picture')
// showContent(mainContainer, [`#${targetImage}`])
// }

// function hideContent(parent, content) {
// parent
//     .querySelectorAll(content)
//     .forEach((item) => item.setAttribute("hidden", true));
// }

// function showContent(parent, content) {
//  parent.querySelector(content).removeAttribute('hidden');
// }
