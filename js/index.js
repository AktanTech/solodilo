window.onload = function () {
  if (window.innerWidth < 768) {
    document.getElementById('aux').classList.remove('col-4')
    document.getElementById('informationText').classList.replace('col-8', 'col-12')
    document.getElementById('footer').classList.replace('col-4', 'col-12')
  } else {
    console.log(false)
  }
}

$(window).resize(function () {
  if (window.innerWidth >= 768) {
    document.getElementById('aux').classList.add('col-4')
    document.getElementById('informationText').classList.replace('col-12', 'col-8')
    document.getElementById('footer').classList.replace('col-12', 'col-4')
  }
  if (window.innerWidth < 768) {
    document.getElementById('aux').classList.remove('col-4')
    document.getElementById('informationText').classList.replace('col-8', 'col-12')
    document.getElementById('footer').classList.replace('col-4', 'col-12')
  }
})

