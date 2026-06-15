const input = document.getElementById('task-input');
const btn = document.getElementById('add-btn');
const list = document.getElementById('task-list');

btn.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
    input.value = '';
});