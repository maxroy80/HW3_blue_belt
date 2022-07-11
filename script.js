let height;
while ((height = prompt('введите высоту треугольника (целое число)')) != parseInt(height) || height == 0) {
    alert('это дожно быть целое число <>0, попробуйте ещё');
}
console.log('высота = ' + height);
let triangle = '';
let h = Math.abs(height);
    for (let y = 0; y < h; y++) {
        for (let x = 1; x <= (2 * h - 1); x++) {
            if (x < (h - y) || x > (2 * h - (h - y))) {
                if (height > 0) triangle = triangle + '.';
                else triangle = '.' + triangle;
            } else {
                if (height > 0) triangle = triangle + '#';
                else triangle = '#' + triangle;
            }
        }
        if ((y < h - 1) && height < 0) triangle = '\n' + triangle;
        else triangle = triangle + '\n';
    }
console.log(triangle);
