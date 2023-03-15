/* 
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
 */

const spesa = [
    'pane',
    'nutella',
    'pringles',
    'fonzies',
    'latte',
    'cornetti algida',
];

let i = 0;
while ( i < spesa.length) {
    const listaSpesa = spesa[i]
    const bigliettoSpesa = document.getElementById('spesa')
    bigliettoSpesa.insertAdjacentHTML('afterbegin', `<p>${listaSpesa}</p>`)
    i++
}