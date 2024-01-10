// select the input
const input = document.querySelector('#fruit');
// select the suggestions unordered list
const suggestions = document.querySelector('.suggestions ul');

// fruits array
const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) {

	// initalize results in function scope
	//also resets results to be an empty array everytime search is called
	let results = [];

	// iterate over fruits array
	for (let fruit of fruits) {
		// check if each fruit contains the string entered
		if (fruit.toLowerCase().includes(str)) {
			// add results to results array
			results.push(fruit)	
		}
	}

	
	showSuggestions(results, str);
	// return results
	return results;
	
}

function searchHandler(e) {

	// set entered string to be the entire string entered in lowercase
	let enteredString = (e.target.value).toLowerCase()
	
	// call serach where string equals the entire string entered
	search(enteredString)
}

function showSuggestions(results, inputVal) {

	// clear previous suggestions
	suggestions.innerHTML = ''

	// iterate over results array
	for (let result of results) {
		// create an li for all elements in the results array
		let item = document.createElement('li')
		// set li to equal fruit in result
		item.textContent = result;
		suggestions.appendChild(item)
	}
}


function useSuggestion(e) {
	console.log(e.value)
	// sets value of input to be equal to the fruit clicked 
	input.value = e.target.textContent;

}

// call searchHandler every time key is released
input.addEventListener('keyup', searchHandler);

// triggers when fruit is clicked on
suggestions.addEventListener('click', useSuggestion);

