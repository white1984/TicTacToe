var header = document.getElementById('title'),
	gameItem = document.getElementsByClassName('b-game__item'),
	buttonReset = document.getElementById('reset'),
	player = 'X',
	counter1 = 0,
	arrayWin = [
		[1,2,3],
		[1,4,7],
		[1,5,9],
		[2,5,8],
		[3,6,9],
		[3,5,7],
		[4,5,6],
		[7,8,9]
	]
	array = {
		X: [],
		O: []
	}

for(var i = 0; i < gameItem.length; i++ ){
	gameItem[i].addEventListener('click', function() {

		

		this.innerHTML = player;
		player == 'X' ? (player = 'O') : (player = 'X');
		this.className += ' disabled';
		header.innerHTML = 'Ходит игрок ' + player;

		var number = +this.getAttribute('data-number');

		array[player].push( number );
		array[player].sort(function(a, b) {
			return a - b;
		});

		arrayWin.forEach(function(item, i, arrayWin) {
			var counter = +0;
			item.forEach(function(item, i, arrayWin) {
				if( array[player].indexOf(item) != -1 )
					counter++;
				if( counter == 3 ){
					header.innerHTML = 'Победил игрок '+player;
					for(var i = 0; i < gameItem.length; i++){
						gameItem[i].className += ' disabled';
					}
				}
				console.log(array[player]);
			});
			

		});

		if( counter1 == 8 ){
			header.innerHTML = 'Ничья';
			return;
		}
		counter1++;

		console.log(array[player]);
	});
}

buttonReset.addEventListener('click', function() {
	layer = 'X',
	counter = 0,
	array = {
		X: [],
		O: []
	};
	for(var i = 0; i < gameItem.length; i++){
		gameItem[i].className = 'b-game__item';
		gameItem[i].innerHTML = '';
	}
	header.innerHTML = 'Ходит игрок ' + player;

});

