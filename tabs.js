
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

// The numbers are the keycodes for the right and left keys. To that
// do console.log(e.keycode)
tabList.addEventListener('keydown', (e) => {
    const keydownLeft = 37;
    const keydownRight = 39;
})