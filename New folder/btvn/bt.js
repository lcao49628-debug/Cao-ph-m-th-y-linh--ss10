let students= [
    {id: 1, name :"Nguyễn Văn A",score :8.5, gender:"Nam"},
    {id: 2, name :"Trần Thị B",score :4.2, gender:"Nữ"},
    {id: 3, name :"Lê Văn C",score :9.0, gender:"Nam"},
    {id: 4, name :"Phạm Thị D",score :5.5, gender:"Nữ"},
    {id: 5, name :"Hoàng Ván E",score :3.8, gender:"Nam"},
];
 function getExcellentStudents(list) {
    return list.filter(function(student) {
        return student.score >= 8;
    });
}
let excellent = getExcellentStudents(students);
console.log("Sinh viên xuất sắc:", excellent);


function checkStudents(list) {
    
}