// Step 4
// Now that the teacher has all of the information they need, they want to be able to message the student with the results.

// Complete the studentMsg function with totalScores and studentScore for parameters. The function should return a string representing a message to the student.

// If the student passed the course, the string should follow this format:

// Example Code
// Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.
// If the student failed the course, the string should follow this format:

// Example Code
// Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.
// Replace average-goes-here with the average of the total scores. Replace grade-goes-here with the student's grade.

// Tips

// Use the getAverage function to get the class average.
// Use the getGrade function to get the student's grade.
// Use string concatenation (+) to build the message.
// Be careful with the punctuation and spaces in the message.
function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  
  function studentMsg(totalScores, studentScore) {
    let avg = getAverage(totalScores);
    let grade = getGrade(studentScore);
    let msg = "";
    if (hasPassingGrade(studentScore)) {
      msg = "Class average: " + avg + ". Your grade: " + grade + ". You passed the course.";
    } else {
      msg = "Class average: " + avg + ". Your grade: " + grade + ". You failed the course.";
    }
  
    return msg;
  }
  console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
  
