const input = document.getElementById('task-input');
const btn = document.getElementById('add-btn');
const list = document.getElementById('task-list');

btn.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.textContent = text;
    li.style.cursor = 'pointer';

    li.addEventListener('click', () => {
        li.style.textDecoration =
            li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
    });

    list.appendChild(li);
    input.value = '';
});