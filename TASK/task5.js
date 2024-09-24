function studentPlanning(value){
    return value.filter((time) => time.includes("PM"));
}
module.exports = {studentPlanning};