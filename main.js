
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

const nightOwls = () => {
  
}

const getToBed = () => {

}

const findIndices = (arr, callBack) => {
  //

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
    
    answerQuestion(givenId, answer = true){
      if (this.questions[givenId].answered === false)
      this.questions[givenId].answer = answer;

      if (this.questions[givenId].answered === true) {
//unfinished
      }
    } 
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
