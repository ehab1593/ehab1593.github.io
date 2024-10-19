const paragraph = document.getElementById('text-to-highlight');

const newWords = paragraph.textContent.split(' ').map(word => {
  const span = document.createElement('span');
  span.textContent = word +' ';
  span.classList.add('word');
  return span;
})

paragraph.textContent = '';

// Append each word wrapped in span to the paragraph
newWords.forEach(spanWord => {
paragraph.appendChild(spanWord);

  spanWord.addEventListener('mouseover', function(){
      spanWord.classList.add('highlighted');
  });

  spanWord.addEventListener('mouseout', function(){
      spanWord.classList.remove('highlighted');
  });
});

const icon = document.getElementById('night-mode-icon');

icon.addEventListener('click', function(){
  document.documentElement.classList.toggle('night-mode');
});
