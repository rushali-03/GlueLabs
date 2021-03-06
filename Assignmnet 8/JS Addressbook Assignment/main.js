document.getElementById('filterInput').addEventListener('keyup', () => {
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    let ul=document.getElementById('names');
    let li=ul.querySelectorAll('li.collection-item');
    let hi = document.querySelectorAll('li.collection-header');
    li.forEach(item => {
        let a =  item.getElementsByTagName('a')[0];
        item.style.display = a.innerText.toUpperCase().startsWith(filterValue) ? 'block' : 'none';    
    });
    hi.forEach(item => {
        let h5 = item.getElementsByTagName('h5')[0];
        item.style.display = h5.innerText.toUpperCase().startsWith(filterValue[0])? 'block' : 'none';
    });
})