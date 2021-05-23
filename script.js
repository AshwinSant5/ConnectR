function addMoi() {
  var me = document.createElement("li");
  name = document.getElementById("getName").value
  var text = document.createTextNode(name);
  me.appendChild(text);
  me.classList.add("me");
  var container = document.getElementById("me-container");
  container.appendChild(me);
  document.getElementById("getName").value = "";
}
//Top Content Tabs and Description
$(".tab-list li").on("click", function() {
  var tabId = ".tab-list li#" + $(this).attr("id");
  var tabDivId = ".tabs-content#content-" + $(this).attr("id");

  if (!$(this).hasClass("active")) {
    $(".tab-list li").removeClass("active");
    $(this).addClass("active");

    $(".tabs-content").removeClass("active");
    $(tabDivId).addClass("active");
  }
});