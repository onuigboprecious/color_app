const colors = ['green', 'pink', 'orange', 'red', 'blue', 'Yellow', 'Purple'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  const x = getRandomNumber();
  console.log(x);
  document.body.style.backgroundColor = colors[x];
  color.textContent = colors[x];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
