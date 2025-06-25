export const getState = ({ setStore, getStore, getActions }) => {

    return {
        store: {
            favoriteList: [],
            details: {}
        },
        actions: {
            addFavorite: (item) => {
                const store = getStore();
                const actions = getActions();
                if (!store.favoriteList.includes(item)) {
					setStore({ favoriteList: [...store.favoriteList, item] });
				} else {
					const array = store.favoriteList;
					const condition = currentFavorite => currentFavorite === item;
					let index = array.findIndex(condition);
					if (index > -1) actions.removeFavorite(index);
				}
            },
            removeFavorite: favoriteIndex => {
                const store = getStore();
				store.favoriteList.splice(favoriteIndex, 1);
                setStore({ favoriteList: store.favoriteList });
			},
            getDetailChar: (a) => {
                const actions = getActions();
                let url = 'https://swapi.info/api/people/' + a;

                fetch(url)
                    .then(response => response.json())
                    .then(data =>
                        actions.getData(data)
                    )
            },
            getDetailPlanet: (a) => {
                const actions = getActions();
                let url = 'https://swapi.info/api/planets/' + a;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getData(data);
                    })
            },
            getDetailVehic: (a) => {
                const actions = getActions();
                let url = 'https://swapi.info/api/vehicles/' + a;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getData(data);
                    })
            },
            getData: (data) => {
                setStore({ details: data })
            }
        }
    };

}