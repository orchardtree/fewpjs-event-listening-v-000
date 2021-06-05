function addingEventListener() {
  const input = document.getElementById('input');
  input.addEventListener('click', function(event) {
  alert('I was clicked!');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  alert('I was clicked!');
  });
