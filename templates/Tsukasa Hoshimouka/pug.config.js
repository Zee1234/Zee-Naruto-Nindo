// let data = require('./data.yaml')
// let data = require("yaml").parse(require("fs").readFileSync('data.yaml', 'utf8'))
// let health = 100
// console.log(data)
// console.log(data.details.story)
// let statTotal = data.stats.stamina + 
// 								data.stats.potency + 
// 								data.stats.control + 
// 								data.stats.dexterity + 
// 								data.stats.strength
// health += statTotal > 120 ? 100 : 0
// health += statTotal > 240 ? 100 : 0
// health += statTotal > 480 ? 100 : 0
// health += statTotal > 600 ? 100 : 0

// data.stats.health = health

let data = require('./data.json')
module.exports = {
	locals: data
}