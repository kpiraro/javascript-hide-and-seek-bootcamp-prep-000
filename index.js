function getFirstSelector(selector) {
    const sel = document.querySelector(selector)
    return sel
}

function nestedTarget() {
  const tar = document.getElementById('nested').querySelector('div.target')

  return tar
}


function increaseRankBy(n) {
  console.log('in the function')
  const children = document.querySelectorAll('ul.ranked-list li')

  console.log('child list', children)

  for (let i = 0; i < children.length; i++) {
    console.log('child[i]', children[i])

    children[i].innerHTML = parseInt(children[i].innerHTML, 10) + n
    //var rank = (parseInt(children[i].innerHTML, 10) + n).toString
    //rank = (rank + n).toString()
  }
}

function deepestChild() {
  const child = document.getElementById('grand-node')

  for (let i = 0; i < child.length; i++) {
    child[i].querySelector('div')
  }
  return child
}
