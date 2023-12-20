
// const selector = '.nav__item';
// const anchors = Array.from(document.querySelectorAll( 'li' ));

// anchors.forEach(selector => {
//     selector.addEventListener('click', function(e) {
//         anchors.forEach(selector => {
//             selector.classList.remove('is-active')
//         })

//         e.currentTarget.classList.add('is-active')
//     })  
// })


const anchors = Array.from(document.querySelectorAll('a'))

anchors.forEach(a => {
  a.addEventListener('click', function(e) {
    anchors.forEach(a => {
      a.classList.remove('is-active')
    })

    e.currentTarget.classList.add('is-active')
  })  
})