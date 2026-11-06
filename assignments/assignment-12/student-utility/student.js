
function getIntroduction(name, course) {
  return `My name is ${name} and I am studying ${course}.`;
}

function calculatePercentage(obtainedMarks, totalMarks) {
  return (obtainedMarks / totalMarks) * 100;
}

// Export both functions
module.exports = {
  getIntroduction,
  calculatePercentage
};
