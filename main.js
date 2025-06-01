const container = document.getElementById('contain-pokemons')

document.addEventListener('DOMContentLoaded', () => {
    let index = 1;
    for (let lines = 1; lines < 20; lines++) {
        const newRow = document.createElement('div')
        newRow.classList.add('row')

        container.appendChild(newRow)

        let end = index + 9;
        for (; index < end; index++) {
            const newPokemon = document.createElement('div')
            newPokemon.classList.add('pokemon')

            const newImage = document.createElement('img')
            newImage.classList.add('image')
            newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`

            const newIndex = document.createElement('h4')
            newIndex.classList.add('index')
            newIndex.innerText = `#${index}`

            newRow.appendChild(newPokemon)
            newPokemon.appendChild(newImage)
            newPokemon.appendChild(newIndex)

            if (index === 1025) return;
        }
    }
})
