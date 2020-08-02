///////////////////////////////////////
////////////// Accordion //////////////
///////////////////////////////////////

let acc = document.querySelectorAll(".accordion__btn"), // <----- your buttons identification
    panels = document.querySelectorAll(".panel"); // <----- tabs wrapper (learn HTML in detail!)

acc.forEach((item, i) => {
  item.addEventListener("click", function() {
    if (panels[i].style.maxHeight){
      panels[i].style.maxHeight = null;
    } else {
      panels[i].style.maxHeight = panels[i].scrollHeight + "px";
    } 
    hideTabs();
    item.classList.toggle("active"); // <----- toggle your active class
    showTabs(i);
  });
});


hideTabs(); // <----- hide all tabs first
showTabs(); // <----- show tab, set by default is second (you can change this value in the function body or here!)


function hideTabs () {
  panels.forEach(item => {
    item.style.maxHeight = null;
  });
  acc.forEach(item => {
    item.classList.remove('active'); // <----- remove your active class
  });
}

function showTabs (i = 1) {
  acc[i].classList.add("active"); // <----- add your active class
  panels[i].style.maxHeight = panels[i].scrollHeight + "px";
}
