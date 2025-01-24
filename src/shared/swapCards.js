const swapCards = {
  left: (cards) => {
    if (cards.length < 2) return

    const lastCard = cards.pop()
    cards.unshift(lastCard)
  },

  right: (cards) => {
    if (cards.length < 2) return

    const firstCard = cards.shift()
    cards.push(firstCard)
  },
}

export default swapCards
