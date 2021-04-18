import qs from "./questions.json"

export function getQs(id, qIsEnglish) {
  let qlist = qs.questionSets[id].slice();
  let len = qlist.length;

  const answers = getAnswers(qlist, qIsEnglish);

  const qLang = qIsEnglish ? 'english' : 'nimipuutimt';
  const ansLang = qIsEnglish ? 'nimipuutimt' : 'english';
  let finishedQs = [];
  while (finishedQs.length < len) {
    const i = Math.floor(Math.random() * qlist.length);
    const q = qlist[i];
    const options = getOptions(answers, q[ansLang]);
    finishedQs.push({
      word: q[qLang],
      option1: options[0],
      option2: options[1],
      option3: options[2],
      option4: options[3],
      correct: q[ansLang]
    });
    qlist.splice(i, 1);
  }
  return finishedQs;
}

function getAnswers(list, qIsEnglish) {
  let ans = [];
  //answer is opposite of the question language
  const ansLang = qIsEnglish ? 'nimipuutimt' : 'english';
  for (let q of list) {
    ans.push(q[ansLang]);
  }

  return ans;
}

function getOptions(answers, word) {
  let ans = answers.slice();
  let options = [word];
  const idx = ans.indexOf(word);
  if (idx !== -1) {
    ans.splice(idx, 1);
  } else {
    console.log("word not in answers somehow");
  }
  while (options.length < 4 && ans.length > 0) {
    const i = Math.floor(Math.random() * ans.length);
    options.push(ans[i]);
    ans.splice(i, 1);
  }
  if (options.length < 4) {
    console.log("getOptions did not find 4 options");
  }
  //randomize the position of the correct answer
  const correctIndex = Math.floor(Math.random() * options.length);
  const temp = options[correctIndex];
  options[correctIndex] = options[0];
  options[0] = temp;
  return options;
}

export function getEnglish(id, nim) {
  let qlist = qs.questionSets[id].slice();

  for (let q of qlist) {
    if (q.nimipuutimt === nim) {
      return q.english;
    }
  }

  return null;
}