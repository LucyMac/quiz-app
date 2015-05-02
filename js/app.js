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
	var i = 1;

	// 1) showing content for next question. This will happen for each new quiz, and after each question is answered. 

	var nextQuestion = function() {

			//question number is displayed in div#q-number
			document.getElementById("q-number").show.innerHTML = "Question " + i;

			//question is displayed in div#question
			document.getElementById("question").innerHTML = question[i].question;

			//answers are displayed in button#answer-a/b/c
			document.getElementById("answers").style.display = "block";
			document.getElementById("answer-a").innerHTML = question[i].options[0];
			document.getElementById("answer-b").innerHTML = question[i].options[1];
			document.getElementById("answer-c").innerHTML = question[i].options[2];
	}

	// 2) Interaction when user selects an answer:
			//on click: button style change --> button.answer-unselected becomes .answer-selected

			document.getElementsByClassName("answer-unselected").onclick = function() {		//Can I select elements by their class name? 
				this.className = "answer-selected";			//could I've done it differenly i.e. ...("answer-unselected").onclick.className = ""    ?
			};

			var userAnswer = document.getElementsByClassName("answer-selected");	//can I do this? Trying to make clicked button = userAnswer

			//1000ms after click, 
	assign id"correct"

			//if answer selected = correct answer {display div.result#correct}
			//else {display div.result#incorrect}

			//after 3000ms, i++ nextQuestion();

//	LAUNCH QUIZ on click of 'start quiz' button	
			document.getElementById("new-quiz").onclick = function() {		//could I say ...("new-quiz").onclick.style.display = 'none'	?
				this.style.display = "none";	//Am I using 'this' correctly? I mean the 'new-quiz' element.
				nextQuestion();
			}

		function Quiz() {
	     this.correctAnswers = '';
	     this.progress = 0;

	     this.checkAnswer = function(answer, question) {
	         if(userAnswer === question.answer) {
	          }
	     }
	     
	     this.nextQuestion = function() {
	//hide
	         document.getElementById('question' + this.progress);      
	         this.progress++;
	//show
	         document.getElementById('question' + this.progress);      
	     }
	}

	var myQuiz = new Quiz();

	myQuiz.nextQuestion();



	//________________________________________

		//to show progression in the game 'question 3 of 6'

		//var quiz = 
		//for (var i = 1; i < quiz.length; i++) {
		//    console.log("Question " + i + " of " + quiz.length);
		//}

	//________________________________________



}