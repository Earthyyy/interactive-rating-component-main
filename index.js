const ratingComponent = document.querySelector('.rating-component')
const thanksComponent = document.querySelector('.thanks-component')

const ul = document.querySelector("ul");
const submitBtn = document.querySelector('.rating-component__submit')
const userRating = document.querySelector('.user__rating')






ul.addEventListener('click',({target}) => {
    if (target !== ul ) {
        [...ul.children].forEach(child => {
            child.classList.remove('selected')
        })
        target.classList.add('selected');
    } 
})

submitBtn.addEventListener('click',() => {
    const ratingArray = [...ul.children]
    const isRated = ratingArray.some(child => child.classList.contains('selected'))

    if (!isRated) console.log('Please rate our product!')
    else {
        const rating = ratingArray.find(child => child.classList.contains('selected'))

        userRating.innerText = rating.value
        ratingComponent.classList.add('hidden')
        thanksComponent.classList.remove('hidden')
    }
})




