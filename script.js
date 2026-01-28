
const images = document.querySelectorAll(".fruits-list img")
console.log(images);

const options = {
    threshold: 0.5,
}

const pictureObserver = new IntersectionObserver(onEntry, options)



function onEntry(entries, observer){
    entries.forEach(entry => {
        // console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('appear')
        }else{
            entry.target.classList.remove('appear')
        }
    })
}


images.forEach(image => {
pictureObserver.observe(image)
})












const item = document.querySelector(".feed__item img")
// console.log(item);

const lazyObserver = new IntersectionObserver(onImgEntry, options)

function onImgEntry(entries, observeer){
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const data = entry.target.dataset.lazy
            entry.target.src = data
            entry.target.classList.add('appear')
            lazyObserver.unobserve(item)
        }
    })
}

lazyObserver.observe(item)
