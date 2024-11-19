const datas = [
    { sname: 'Melika', participantNumber: 1, diplomaType: 2, age: 18, courseCode: 24, genderCode: 2 },
    { sname: 'Amin', participantNumber: 2, diplomaType: 2, age: 22, courseCode: 24, genderCode: 1 },
    { sname: 'Sina', participantNumber: 3, diplomaType: 1, age: 25, courseCode: 21, genderCode: 1 },
    { sname: 'Zahra', participantNumber: 4, diplomaType: 0, age: 20, courseCode: 20, genderCode: 2 },
    { sname: 'Mina', participantNumber: 5, diplomaType: 2, age: 18, courseCode: 24, genderCode: 2 },
    { sname: 'Melina', participantNumber: 6, diplomaType: 1, age: 24, courseCode: 21, genderCode: 2 },
    { sname: 'Mahdi', participantNumber: 7, diplomaType: 2, age: 17, courseCode: 24, genderCode: 1 },
]
let count = 0;
let count1 = 0;
let count2 = 0;
let Percent = 0;
datas.map(item => {
    if (item.courseCode === 24 && item.genderCode === 1) {
        count++;
    }
    else if (item.age < 18) {
        count1++;
    }
    else if (item.courseCode === 24) {
        count2++;
    }
    Percent = (count2 * datas.length) / 100;
    console.log(count,count1);
    
})
