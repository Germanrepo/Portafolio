export const turnFront = (e) => {
    const card = e.target.parentElement.parentElement.parentElement
    card.style = 'transform: rotateY(-180deg)'
}
export const turnBack = (e) => {
    const card = e.target.parentElement.parentElement.parentElement
    card.style = 'transform: rotateY(0deg)'
}