let h;
while ((h = prompt('введите высоту треугольника (целое число)')) != parseInt(h) || h == 0) {
    alert('это дожно быть целое число <>0, попробуйте ещё');
}
console.log('высота = ' + h);
let triangle = '';
function moreZero () {
    for (let y = 0; y < h; y++) {
        for (let x = 1; x <= (2 * h - 1); x++) {
            if (x < (h - y) || x > (2 * h - (h - y))) {
                triangle = triangle + '.'
            } else {
                triangle = triangle + '#';
            }
        }
        triangle = triangle + '\n';
    }
}
function subZero () {
    for (let y = 0; -y > h; y++) {
        for (let x = 1; x <= (-2 * h - 1); x++) {
            if (x < y + 1 || x > -2 * h - y - 1) {
                triangle = triangle + '.'
            } else {
                triangle = triangle + '#';
            }
        }
        triangle = triangle + '\n';
    }
}
if (h > 0) {moreZero();}
else {subZero()}
console.log(triangle);
