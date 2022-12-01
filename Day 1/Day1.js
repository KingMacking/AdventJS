function wrapping(gifts) {
    const wrappedGifts = gift => {
        const wrappingPaper = '*'.repeat(gift.length + 2)
        return `${wrappingPaper}\n*${gift}*\n${wrappingPaper}`
    }
    return gifts.map(wrappedGifts)
}