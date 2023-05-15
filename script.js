let center = [59.9386, 30.3141];

const search_Stilsoft = document.querySelector('#search');

if (search_Stilsoft) {
    search_Stilsoft.addEventListener('click', () => {
        searchControl.search('stilsoft');
    })
}

var searchControl;

function init() {
	let map = new ymaps.Map('map-test', {
		center: center,
		zoom: 10
	});

    searchControl = new ymaps.control.SearchControl({
        options: {
            provider: 'yandex#search'
        }
    });

    // Adding the control to the map.
    map.controls.remove('searchControl');
    map.controls.add(searchControl);

}

ymaps.ready(init);