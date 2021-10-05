import { apiService } from './../ApiService'

export const pokemonService = {
    list: async () => {
        const response = await apiService.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        return response.results;
    },

    listDetailed: async () => {
        const response = await apiService.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        const pokemon_list = response.results

        const pokemon_list_detailed = await Promise.all(
            pokemon_list.map(rp => apiService.get(rp.url))
        )

        return pokemon_list_detailed.map(p => (
            {
                id: p['id'],
                name: p['name'],
                height: parseInt(p['height']) / 10,
                weight: parseInt(p['weight']) / 10,
                types: p['types'].map(type => type.type.name),
                img: p['sprites']['other']['official-artwork']['front_default'],
                alt_img: p['sprites']['other']['dream_world']['front_default'],
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi. Integer eget urna eu mauris scelerisque ornare. Nam at finibus purus. Nam quis mauris elementum, ullamcorper sem non, convallis mi. Sed a bibendum sapien, non posuere ligula. Morbi sit amet maximus purus. Nulla eu pulvinar ante. Nulla gravida luctus convallis. Duis suscipit vel nisi et tincidunt. Aenean velit purus, rutrum euismod justo id, porta tincidunt orci. Curabitur quis nibh elit. Etiam ornare tortor ac nibh commodo dapibus. Proin vehicula erat sit amet lacus posuere tincidunt.'
            }
        ))
    }
}