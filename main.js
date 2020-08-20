
const makeRunOn = (sentence) => {
//replace the period w/ commas
return sentence.split('. ').join(', ');
}

const totalScore = (allScores) => {
  //adds all scores
  //levels.score should === 1000
  //if multiplier === !1

return allScores.score = 1000
}

const nightOwls = (arrWithObjOfPeople) => {
  //returning object within an arr
  //empty arr needed
  const result = [];

  //loop through the arrWithObjOfPeople to find who is awake
  for (const times of arrWithObjOfPeople) {
    //compare the times 
    if (times.localTime > 100 && times.localTime < 400 && times.asleep === false) {
      result.push(times);
    }
  }
  return result;
}

const getToBed = () => {

}

const findIndices = (arr, callBackFunc) => {
  //empty arr needed
  const result = [];
  
  // //need to loop through every element to get indices 
  for (let i = 0; i < arr.length; i++) {
    if (callBackFunc(arr[i]) === true) {
      result.push(i);
    }
  }
  // for (const item of arr) {
  //   if (callBackFunc(item) === true) {
  //     result.push(item);

  //   }

  // }
  return result
}

const Faqtory = () => {
  return {
    questions: [],
  
    addQuestion (text, answered = false){
      this.questions.push({
        text: text,
        answered: answered,
        id: this.questions.length
      });
    },
    
    answerQuestion (givenId, answer){
      if (this.questions[givenId].answered === false)
      this.questions[givenId].answer = answer;
      this.questions[givenId].answered = true;
      },
    } 
  }











if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
