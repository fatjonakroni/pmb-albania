function setActiveStyleSheet(title) {
  createCookie("style", title, 365);

    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");

  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
  var title = getActiveStyleSheet();


  

var cookie = readCookie("style");