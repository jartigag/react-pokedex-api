import { apiService } from './../ApiService'
import { cacheService } from './../CacheService'

const pokemonGenerations = {
    1: {
      limit: 151,
      offset: 0
    },
    2: {
      limit: 100,
      offset: 151
    },
    3: {
      limit: 135,
      offset: 251
    },
    4: {
      limit: 107,
      offset: 386
    },
    5: {
      limit: 156,
      offset: 493
    }
}

export const pokemonService = {
    list: async () => {
        const response = await apiService.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        return response.results;
    },

    listByGenerationDetailed: async (generation) => {
        generation = generation ?? 1

        const cacheKey = `listByGenerationDetailed-${generation}`

        const cacheResult = cacheService.get(cacheKey)
        if (cacheResult) return cacheResult

        const response = await apiService.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonGenerations[generation].limit}&offset=${pokemonGenerations[generation].offset}`)
        const pokemonList = response.results

        const pokemonListDetailed = await Promise.all(
            pokemonList.map(rp => apiService.get(rp.url))
        )

        const pokemonMapped = pokemonListDetailed.map(p => (
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

        cacheService.set({
            key: cacheKey,
            value: pokemonMapped
        })

        return pokemonMapped;
    }
}
