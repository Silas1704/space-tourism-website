const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

tabList.addEventListener("keydown", ChangeTabFocus);

let tabFocus = 0;
function ChangeTabFocus(e) {
  const keydownleft = 37;
  const keydownRight = 39;
  //change the tabindex of current tab to -1
  if (e.keyCode === keydownleft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);
  }

  if (e.keyCode === keydownRight) {
    tabFocus++;
    tabFocus = tabFocus % tabs.length;
    // console.log(tabFocus);
  }
  if (e.keyCode === keydownleft) {
    tabFocus--;
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1;
    }
    // console.log(tabFocus);
  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
}

function changeTabPanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const tabContainer = targetTab.parentNode;
  const MainContainer = tabContainer.parentNode;

  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);

  MainContainer.querySelectorAll("article").forEach((article) =>
    article.setAttribute("hidden", true)
  );

  MainContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden");

  const imagepanel = targetTab.getAttribute("data-image");

  MainContainer.querySelectorAll("picture").forEach((pic) =>
    pic.setAttribute("hidden", true)
  );

  MainContainer.querySelector([`#${imagepanel}`]).removeAttribute("hidden");
}
