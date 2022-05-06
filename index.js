const p = document.querySelectorAll('p');
console.log(p);
for (let i in p) {
    p[i].onclick = function() { alert(i) }
}