let filters = []
const $ = id => document.getElementById(id);
const formatCompanyName = string => string.toLowerCase().replace('.', '').split(' ').join('-')

function filterClicked(filter) {
    filters.push(filter)
    filters = [...new Set(filters)]

    showFilters()
}

function filterCards() {
    let cards = document.getElementsByClassName('card')
    if (filters.length == 0) {
        Array.from(cards).forEach(card => { card.classList.remove('hidden') })
    }
    filters.forEach(filter => {
        Array.from(cards).forEach(card => {
            card.hidden = false
            let cardFilters = Object.values(card.dataset).map(x => x.split(' ')).reduce((prev, current) => [...prev, ...current], [])
            if (cardFilters.includes(filter.toLowerCase())) {
                card.classList.remove('hidden')
            } else {
                card.classList.add('hidden')
            }
        })
    })
}

function deleteFilter(filter) {
    let newArray = []
    filters.forEach(exisitingFilter => {
        if (exisitingFilter != filter) {
            newArray.push(exisitingFilter)
        }
    })

    filters = [...new Set(newArray)]
    showFilters()
}

function showFilters() {
    let filtersBar = $('filters-bar')
    filtersBar.innerHTML = ''
    filters.forEach(filter => {
        let container = document.createElement('div')
        container.className = 'filter-top'

        let content = document.createElement('div')
        content.className = 'filter-tag'
        content.innerHTML = filter
        container.append(content)


        let deleteButton = document.createElement('div')
        deleteButton.className = 'delete-button'
        deleteButton.onclick = deleteFilter.bind(this, filter)

        let deleteIcon = document.createElement('img')
        deleteIcon.src = './images/icon-remove.svg'
        deleteButton.append(deleteIcon)
        container.append(deleteButton)

        let clear = document.createElement('span')
        clear.innerHTML = 'clear'
        clear.className = 'clear'
        clear.onclick = () => { filters = []; showFilters() }

        filtersBar.append(container)
        filtersBar.append(clear)
    })
    filterCards()
}
