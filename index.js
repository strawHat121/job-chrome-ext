async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log(tab)
    return tab;
    //tab.url will give the current url
}

const button = document.querySelector("button")
button.addEventListener('click', () => {
    getCurrentTab()
})