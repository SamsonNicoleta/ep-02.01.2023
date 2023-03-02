const produs = [
    {
        "denumire": "lapte",
        "pret": 15
        "cantitate": 2
    },
    {
        "denumire": "paine",
        "pret": 10
        "cantitate": 3
    },
    {
        "denumire": "cereale",
        "pret": 30
        "cantitate": 4
    }
];

console.log('All produs');
console.log(students);

let sum = 0;
for(let key in pret){
	sum += pret[key];
}
console.log(sum);

const PretulMinim = (produs) => {
    return.produs.reduce((minim, produss) => {
        if (produss.pret < minim.pret) {
            return produss;
        } else {
            return minim;
        }}, produs [0];
    };