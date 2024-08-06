// Step 2
// Now the teacher needs your help converting the student score to a letter grade.

// Complete the getGrade function that takes a number score as a parameter. Your function should return a string representing a letter grade based on the score.

// Here are the scores and their corresponding letter grades:

// Score Range	Grade
// 100	"A++"
// 90 - 99	"A"
// 80 - 89	"B"
// 70 - 79	"C"
// 60 - 69	"D"
// 0 - 59	"F"
// Tips

// Remember that you learned about conditional statements(if, else if, and else).
// Remember that you learned about comparison operators (>, <, >=, <=, ===).

function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  function getGrade(score) {
    let grade = "";
    if (score >= 100) {
      grade = "A++";
    } else if (90 <= score && score <= 99) {
      grade = "A";
    } else if (80 <= score && score <= 89) {
      grade = "B";
    } else if (70 <= score && score <= 79) {
      grade = "C";
    } else if (60 <= score && score <= 69) {
      grade = "D";
    } else {
      grade = "F";
    }
  
    return grade;
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));