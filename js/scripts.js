  function submitQuiz() {
		console.log('submitted');

	// get each answer score
		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
			// do something with radiosNo
					var answerValue = Number(radiosNo[i].value);
				}
			}
			// change NaNs to zero
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}

	// calc score with answerScore function
		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
		console.log("CalcScore: " + calcScore); // it works!

    var AnswerString = "Question # ";

	// print correct answers only if wrong (calls correctAnswer function)
		if (answerScore('q1') === 0) {
			document.getElementById('Answers').innerHTML += '<p class="wrong-answer">' + AnswerString + '1: Wrong! The Correct answer was - (placeholder)</p>'
    }else{
      document.getElementById('Answers').innerHTML += '<p class="right-answer">' + AnswerString + '1: Correct!</p>';
     }

     if (answerScore('q2') === 0) {
			document.getElementById('Answers').innerHTML += '<br><p class="wrong-answer">' + AnswerString + '2: Wrong! The Correct answer was - (placeholder)</p>'
    }else{
      document.getElementById('Answers').innerHTML += '<br><p class="right-answer">' + AnswerString + '2: Correct!</p>';
     }

     if (answerScore('q3') === 0) {
			document.getElementById('Answers').innerHTML += '<br><p class="wrong-answer">' + AnswerString + '3: Wrong! The Correct answer was - (placeholder)</p>'
    }else{
      document.getElementById('Answers').innerHTML += '<br><p class="right-answer">' + AnswerString + '3: Correct!</p>';
     }

     if (answerScore('q4') === 0) {
			document.getElementById('Answers').innerHTML += '<br><p class="wrong-answer">' + AnswerString + '4: Wrong! The Correct answer was - (placeholder)</p>'
    }else{
      document.getElementById('Answers').innerHTML += '<br><p class="right-answer">' + AnswerString + '4: Correct!</p>';
     }  

	// calculate "possible score" integer
		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	// show score as "score/possible score"
		var showScore = "Your Score: " + calcScore +"/" + questionCounter;
	// if 4/4, "perfect score!"
		if (calcScore === questionCounter) {
			showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
		};
		document.getElementById('userScore').innerHTML = showScore;
	}

$(document).ready(function() {

	$('#submitButton').click(function() {
    $(this).addClass('hide');
    $('#resultArea').show();
	});

  $('#checkbox1').click(function () {
    $(this).val(this.checked ? 1 : 0)
    });

});
