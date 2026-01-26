
const images = document.querySelectorAll(".fruits-list img")
console.log(images);

const options = {
    threshold: 0.5,
}

const pictureObserver = new IntersectionObserver(onEntry, options)



function onEntry(entries, observer){
    entries.forEach(entry => {
        console.log(entry);
        
    })
}


images.forEach(image => {
    
pictureObserver.observe(image)
})
