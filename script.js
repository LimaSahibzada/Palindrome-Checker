document.getElementById('check-btn').addEventListener('click', () => {
  const input = document.getElementById('text-input').value.trim();
  const result = document.getElementById('result');

  if (input === '') {
    alert('Please input a value');
  } else {
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');

    if (cleanedInput === reversedInput) {
      result.textContent = `${input} is a palindrome`;
      result.style.color = 'black';
    } else {
      result.textContent = `${input} is not a palindrome`;
      result.style.color = 'red';
    }
  }
});

document.getElementById('dark-mode-toggle').addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
