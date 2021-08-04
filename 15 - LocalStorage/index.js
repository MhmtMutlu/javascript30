const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
};

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, index) => {
    return `
      <li>
        <input 
          type="checkbox" 
          data-index=${index} 
          id="items${index}" 
          ${plate.done ? 'checked' : ''}
        />
        <label for="items${index}">${plate.text}</label>
      </li>
    `;
  }).join('');
};

function toggleDone(e) {
  if (!e.target.matches('input')) {
    return;
  }
  
  const selectedElement = e.target;
  const index = selectedElement.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
};


addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
