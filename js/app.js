$(document).ready(function(){

	function Question(question, options, answer) {
	  this.question = question;
	  this.options = options;
	  this.answer = answer;
	}

	var question1 = new Question ('What is the capital of Kenya?', ['Timbuktu', 'Nairobi', 'Kinshasha'], 'Nairobi');

	var question2 = new Question ('What was the first country to win the Football World Cup in 1930?', ['Italy', 'Brasil', 'Uruguay'], 'Uruguay');

	var question3 = new Question ('Something which is Hellenic comes from which country?', ['Greece', 'Sweden', 'Iceland'], 'Greece');

	var question4 = new Question ('When was the Eiffel Tower built?', ['1908', '1889', '1934'], '1889');

	var question5 = new Question ('What is the southernmost capital city in the world?', ['Canberra, Australia', 'Santiago, Chile', 'Wellington, New Zealand'], 'Wellington, New Zealand');

	var question6 = new Question ('The Pythagorian theorem is a geometrical relation concerning which shape?', ['Circle', 'Acute triangle', 'right triangle'], 'right triangle');


	//creating var for question number so that nextQuestion() can work whatever the question number. 
	var i = 0;

	var progress = function
	// 1) showing content for next question. This will happen for each new quiz, and after each question is answered. 

	var nextQuestion = function() {
		i++;
		//question number is displayed in div#q-number
		document.getElementById("q-number").show.innerHTML = "Question " + i;

		//question is displayed in div#question
		document.getElementById("question").innerHTML = question[i].question;

		//displaying appropriate options in the 3 option buttons
		document.getElementById("answers").style.display = "block";
		document.getElementById("answer-a").innerHTML = question[i].options[0];
		document.getElementById("answer-b").innerHTML = question[i].options[1];
		document.getElementById("answer-c").innerHTML = question[i].options[2];
	}

	// 2) Interaction when user selects an answer:
			//on click: button style change --> button.answer-unselected becomes .answer-selected

	var userGuess = function() {	//onclick event in HTML <button#answer-a> <button#answer-b> <button#answer-c>
		this.className = "answer-selected";  //Am I using 'this' correctly? I mean the button that was just clicked. 

		var userAnswer = this.value;	//can I do this? Trying to make content of clicked button = userAnswer
		var answer = question[i].answer.value;

		var checkAnswer = function (answer, userAnswer) {
			if (answer === userAnswer) {
				document.getElementsByClassName("answer-selected").className = "answer-correct";
				document.getElementById("correct").style.display = "block";
			}
			else {
				question[i].answer.className = "answer-correct";
				document.getElementById("incorrect").style.display = "block";
			}
		}

		setTimeout(checkAnswer(answer, userAnswer),1000);
		setTimeout(nextQuestion(),3000);
	}

//	LAUNCH QUIZ on click of 'start quiz' button	
	var start = function() {		//onclick event in HTML <button#new-quiz>
		document.getElementById("start") = "none";
		nextQuestion();
	}

//Counting user's progress through the quiz
	var progress = function() {
		console.log("Question " + i + " of 6");
	}

};