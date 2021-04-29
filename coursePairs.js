let studentPairs = function(arr) {
  reverse = {};
  result = {};
  dupes = {};

  let pairString = function(s1, s2) {
    return (s1 < s2) ? (s1 + ', ' + s2) : (s2 + ', ' + s1);
  }
  
  for (let i = 0; i < arr.length; i++) {
      let student = arr[i][0];
      if (dupes[student]===undefined) {
          let size = Object.keys(dupes).length;
          if (size>=1) {
              for (s in dupes) {
                  result[(pairString(student, s))] = [];
              }
          }
          dupes[student]=1;
      }
  }

  for (let i = 0; i < arr.length; i++) {
      let student = arr[i][0];
      let course = arr[i][1];
      if (reverse[course]!==undefined) {
          let size = reverse[course].length;
          for (let j=0; j<size; j++) {
              result[pairString(student, reverse[course])].push(course);
          }
      } else {
          reverse[course] = [student];
      }
  }

  return result;
}

console.log(studentPairs(student_course_pairs));
