var state = {
	count: 0,
	correct: 0
}

$(document).ready(function() {

	$('.start').on('click', function(event) {
		switchPage(state);
	}); 


	$('.wrong-button').on('click', function(event) {
		switchAnsweredIncorrectly(state);
	});


	$('.right-button').on('click', function(event) {
		switchAnsweredCorrectly(state);
	});


	$('.next-page').on('click', function(event) {
		switchPage(state);
	});

})


function switchPage(state) {
	switch (state.count) {
		case 0:
			turnFirstPage($('.which-question-container'), $('.page1'), $('.landing-only'), state)
			break;
		case 1:
			turnPage($('.page1'), $('.solution1'), $('.page2'), state);
			break;
		case 2:
			turnPage($('.page2'), $('.solution2'), $('.page3'), state);
			break;
		case 3:
			turnPage($('.page3'), $('.solution3'), $('.page4'), state);
			break;
		case 4:
			turnPage($('.page4'), $('.solution4'), $('.page5'), state);
			break;		
		case 5:
			turnPage($('.page5'), $('.solution5'), $('.page6'), state);
			break;
		case 6:
			turnPage($('.page6'), $('.solution6'), $('.page7'), state);
			break;
		case 7:
			turnPage($('.page7'), $('.solution7'), $('.pageFinal'), state);
			$('.pageFinal h3 span').prepend(state.correct);
			break;	
		case 8:
			turnPage($('.pageFinal'), $('.solution7'), $('.landing-only'), state);
			state.count = 0;
			state.correct = 0;
			$('button').removeAttr("disabled");
			$('.correct-text').remove();
			$('.incorrect-text').remove();
			$('.pageFinal h3 span').empty();
			$('.which-question').removeClass('correct-container');
			$('.which-question').removeClass('incorrect-container');
			$('.which-question-container').addClass('hidden');
			break;					
	}
}

function turnFirstPage(remove1, remove2, add1, state) {
	remove1.removeClass('hidden');
	remove2.removeClass('hidden');
	add1.addClass('hidden');
	state.count++;
	console.log(state);
}

function turnPage(add1, add2, remove1, state) {
	add1.addClass('hidden');
	add2.addClass('hidden');
	remove1.removeClass('hidden');
	state.count++;
	console.log(state);
}

function switchAnsweredIncorrectly(state) {
	switch (state.count) {
		case 1:
			$('.page1 .right-button').attr("disabled","disabled");
			$('.page1 .wrong-button').attr("disabled","disabled");
			$('.solution1').removeClass('hidden');
			incorrectContainer($('.which-question:nth-child(1)')); 
			incorrectNotification($('.solution1'));
			break;
		case 2:
			$('.page2 .right-button').attr("disabled","disabled");
			$('.page2 .wrong-button').attr("disabled","disabled");
			$('.solution2').removeClass('hidden');
			incorrectContainer($('.which-question:nth-child(2)')); 
			incorrectNotification($('.solution2'));	
			break;
		case 3:
			$('.page3 .right-button').attr("disabled","disabled");
			$('.page3 .wrong-button').attr("disabled","disabled");
			$('.solution3').removeClass('hidden');
			incorrectContainer($('.which-question:nth-child(3)')); 
			incorrectNotification($('.solution3'));	
			break;
		case 4:
			$('.page4 .right-button').attr("disabled","disabled");
			$('.page4 .wrong-button').attr("disabled","disabled");
			$('.solution4').removeClass('hidden');
			incorrectContainer($('.which-question:nth-child(4)')); 
			incorrectNotification($('.solution4'));	
			break;
		case 5:
			$('.page5 .right-button').attr("disabled","disabled");
			$('.page5 .wrong-button').attr("disabled","disabled");
			$('.solution5').removeClass('hidden');
			incorrectContainer($('.which-question:nth-child(5)')); 
			incorrectNotification($('.solution5'));
			break;	
		case 6:
			$('.page6 .right-button').attr("disabled","disabled");
			$('.page6 .wrong-button').attr("disabled","disabled");
			$('.solution6').removeClass('hidden');
			incorrectContainer($('.which-question:nth-child(6)')); 
			incorrectNotification($('.solution6'));	
			break;
		case 7:
			$('.page7 .right-button').attr("disabled","disabled");
			$('.page7 .wrong-button').attr("disabled","disabled");
			$('.solution7').removeClass('hidden');
			incorrectContainer($('.which-question:nth-child(7)')); 
			incorrectNotification($('.solution7'));
			break;						
	}
}

function switchAnsweredCorrectly(state) {
	switch (state.count) {
		case 1:
			$('.page1 .right-button').attr("disabled","disabled");
			$('.page1 .wrong-button').attr("disabled","disabled");
			$('.solution1').removeClass('hidden');
			correctContainer($('.which-question:nth-child(1)')); 
			correctNotification($('.solution1'));
			state.correct++;
			break;
		case 2:
			$('.page2 .right-button').attr("disabled","disabled");
			$('.page2 .wrong-button').attr("disabled","disabled");
			$('.solution2').removeClass('hidden');
			correctContainer($('.which-question:nth-child(2)')); 
			correctNotification($('.solution2'));
			state.correct++;	
			break;
		case 3:
			$('.page3 .right-button').attr("disabled","disabled");
			$('.page3 .wrong-button').attr("disabled","disabled");
			$('.solution3').removeClass('hidden');
			correctContainer($('.which-question:nth-child(3)')); 
			correctNotification($('.solution3'));
			state.correct++;	
			break;
		case 4:
			$('.page4 .right-button').attr("disabled","disabled");
			$('.page4 .wrong-button').attr("disabled","disabled");
			$('.solution4').removeClass('hidden');
			correctContainer($('.which-question:nth-child(4)')); 
			correctNotification($('.solution4'));	
			state.correct++;
			break;
		case 5:
			$('.page5 .right-button').attr("disabled","disabled");
			$('.page5 .wrong-button').attr("disabled","disabled");
			$('.solution5').removeClass('hidden');
			correctContainer($('.which-question:nth-child(5)')); 
			correctNotification($('.solution5'));
			state.correct++;
			break;	
		case 6:
			$('.page6 .right-button').attr("disabled","disabled");
			$('.page6 .wrong-button').attr("disabled","disabled");
			$('.solution6').removeClass('hidden');
			correctContainer($('.which-question:nth-child(6)')); 
			correctNotification($('.solution6'));	
			state.correct++;
			break;
		case 7:
			$('.page7 .right-button').attr("disabled","disabled");
			$('.page7 .wrong-button').attr("disabled","disabled");
			$('.solution7').removeClass('hidden');
			correctContainer($('.which-question:nth-child(7)')); 
			correctNotification($('.solution7'));
			state.correct++;
			break;
	}
}


function correctContainer(container) {
	container.addClass('correct-container');
}

function incorrectContainer(container) {
	container.addClass('incorrect-container');
}

function correctNotification(parent) {
	parent.prepend('<p class="correct-text">c o r r e c t</p>');
}

function incorrectNotification(parent) {
	parent.prepend('<p class="incorrect-text">i n c o r r e c t</p>');
}
