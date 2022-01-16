const moment = require('moment')

function printMoment() {
  console.log(
    moment().format("MMMM Do YYYY, h:mm:ss a")
  )
}

printMoment()
