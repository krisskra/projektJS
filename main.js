let ar = [1, 2, 6];

function arithave(data) {
    let sum = 0;
for (let i = 0; i < data.length; i++) {
    let num = data[i];
    sum += num;
}
const average = sum / data.length;
    return average;
};
arithave(ar);

function sumnum(data) {
    var sum = 0;
for (let i = 0; i < data.length; i++) {
    let num = data[i];
    sum += num;
}
    return sum;
};
sumnum(ar)

function quantity(data) {
    return data.length;
};
quantity(ar);

function mediana(data) {
    const mid = Math.floor(data.length / 2),
        nums = [...data].sort((a, b) => a - b);
    const med = data.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;

    return med;
};

mediana(ar);

function variancy(data) {
    let variancyStart = 0;
    for (let i = 0; i < data.length; i++) {
        let num = data[i];
        let varSubstr = num - arithave(data);
        let varExp = varSubstr ** 2;
        variancyStart += varExp;
        var variancyOk = variancyStart / data.length;
    }
    return variancyOk
};
variancy(ar);

function deviation(data) {
    let variancyStart = 0;
    for (let i = 0; i < data.length; i++) {
        let num = data[i];
        let varSubstr = num - arithave(data);
        let varExp = varSubstr ** 2;
        variancyStart += varExp;
        var variancyOk = variancyStart / data.length;
    }
    return Math.sqrt(variancyOk);
};
deviation(ar);


function analyze(data) {

    console.log(`Średnia arytmetyczna: ${arithave(data)} 
        Suma wartości: ${sumnum(data)} 
        Liczba próbek: ${quantity(data)} 
        Mediana: ${mediana(data)}
        Wariancja: ${variancy(data)} 
        Odchylenie: ${deviation(data)}`);
};
analyze(ar);