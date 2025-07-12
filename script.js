
// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', () => {
  document.getElementById('title').textContent = 'Text Changed with JavaScript!';
  document.getElementById('dynamicBox').textContent = 'The box text has been updated!';
});

// Modify CSS styles dynamically
document.getElementById('changeStyleBtn').addEventListener('click', () => {
  const box = document.getElementById('dynamicBox');
  box.style.backgroundColor = 'darkblue';
  box.style.color = 'white';
  box.style.fontWeight = 'bold';
});

// Add or remove an element
document.getElementById('toggleElementBtn').addEventListener('click', () => {
  const container = document.getElementById('container');
  const existingPara = document.getElementById('dynamicParagraph');

  if (existingPara) {
    container.removeChild(existingPara);
  } else {
    const newPara = document.createElement('p');
    newPara.id = 'dynamicParagraph';
    newPara.textContent = 'This paragraph was added with JavaScript!';
    container.appendChild(newPara);
  }
});


