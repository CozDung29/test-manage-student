const config = require('../config/knex');
const knex = require('knex');
const db = knex(config['development']);

const addStudent = (student) => {
    db('student')
    .insert({
        id: student.id,
        name: student.name,
        age: student.age,
        address: student.address,
        role: student.role
    })
    .then(() => {
        console.log('Thêm sinh viên thành công');
    })
    .catch((err) => {
        console.log('Lỗi khi thêm sinh viên:', err);
    });
};

module.exports = addStudent;