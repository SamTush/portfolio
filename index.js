function myFunction() {
  document.getElementById('show').style.display = "block";
  console.log("Clicked");
};
function closeIcon() {
  document.getElementById('show').style.display = "none";
};
document.getElementById('humburger').onclick = function() { myFunction() };
document.getElementById('close-icon').onclick = function() { closeIcon() };
document.getElementById('click-a').onclick = function() { closeIcon() };
document.getElementById('click-b').onclick = function() { closeIcon() };
document.getElementById('click-c').onclick = function() { closeIcon() };