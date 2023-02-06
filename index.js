
document.getElementById('humburger').addEventListener('click', myFunction);
document.getElementById('close-icon').addEventListener('click', closeIcon);
document.getElementById('click-a').addEventListener('click', closeIcon);
document.getElementById('click-b').addEventListener('click', closeIcon);
document.getElementById('click-c').addEventListener('click', closeIcon);
function myFunction() {
  document.getElementById('show').style.display = 'block';
}
function closeIcon() {
  document.getElementById('show').style.display = 'none';
}