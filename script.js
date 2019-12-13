const addMoviesToArray = movies.movies.map(content => {
	const listItem = document.createElement('li');
	const imageItem = document.createElement('img');
	imageItem.setAttribute('src', content.Poster);
	listItem.appendChild(imageItem);
	//console.log(content.Poster);
	return listItem;
});
const tiles = document.getElementById('tiles');
addMoviesToArray.forEach(item => {
	tiles.appendChild(item);
	//console.log(item);
});
const addEventListeners = function() {
	const filmFilters = document.getElementsByClassName('filter');
};
document.addEventListener('DOMContentLoaded', () => {
	//addMoviesToArray();
	addEventListeners();
	//handleOnChangeEvents();

	addEventListeners();
});

/* switch(event.target.value) {
    case recentmovies:
      // code block
      break;
    case avengers:
      // code block
      break;
      case xmen:
      // code block
      break;
    case princess:
      // code block
      break;
      case batman:
      // code block
      break;
    default:
      // code block
  } */
