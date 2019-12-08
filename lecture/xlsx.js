const xlsx = require('xlsx');
const workbook = xlsx.readFile('xlsx/data.xlsx');

// console.log(workbook);

// xlsx sheets 목록
// console.log(workbook.Sheets);

// sheets 이름
// console.log(Object.keys(workbook.Sheets));

// sheets 이름에 등록된 records
const ws = workbook.Sheets.영화목록;
// console.log(ws);


// xlsx 데이터를 자바스크립트 객체로 변환
// reffernce: npmjs xlsx documentation
const records = xlsx.utils.sheet_to_json(ws);
// console.log(records)


// records.forEach((r, i) => {
//     console.log(r);
// });


// console.log(records);
// console.log('################');
// console.log(Object.entries(records));

// Array.entries()를 사용하면 내부 배열이 [인덱스, 값] 모양 이터레이터로 반환된다.
for(const [i,r] of records.entries()){
    console.log(r);
    console.log(r.제목, r.링크);
}
