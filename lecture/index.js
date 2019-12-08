
const parse = require('csv-parse/lib/sync');
const fs = require('fs');

// 형식이 버퍼라서 문자열로 바꾸는 작업이 필요하다.
// 버퍼: 0,1로 이루어진 데이터
const csv = fs.readFileSync('csv/data.csv');
//console.log(csv);
//console.log(csv.toString('utf-8'));

const records = parse(csv.toString('utf-8'));
// console.log(records);

// records.forEach( (r, i) => {
//     console.log(i, r[0], r[1]);
// });

records.map((r,i) => {
    console.log(i, r[0], r[1]);
});