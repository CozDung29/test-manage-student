// var studentData = [
//     {
//         name: 'Nam',
//         age: 14,
//     },
//     {
//         name: 'tam',
//         age: 15
//     },
//     {
//         name: 'dung',
//         age: 16
//     },
//     {
//         name: 'chan',
//         age: 17
//     },
//     {
//         name: 'hue',
//         age: 18
//     }
// ]

// module.exports = studentData

const config = require('../config/knex');

const knex = require('knex');
const db = knex(config['development'])