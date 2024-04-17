document.addEventListener('DOMContentLoaded', () => {
  // your code here
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.task.value;
    buildTask(e.target.task.value);
  });

  function buildTask(task) {
    let li = document.createElement('li');
    li.textContent = task;
    console.log(li);
    document.querySelector('#tasks').appendChild(li);
  }
});
