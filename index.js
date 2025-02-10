document.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.getElementById('no-btn')

  noBtn.addEventListener('mouseover', () => {
    const btnWidth = noBtn.offsetWidth
    const btnHeight = noBtn.offsetHeight

    const padding = 20
    const minX = -250 - btnWidth - padding
    const maxX = 250 + padding
    const minY = -250 - btnHeight - padding
    const maxY = 250 + padding

    const randomX = Math.random() * (maxX - minX) + minX
    const randomY = Math.random() * (maxY - minY) + minY

    noBtn.style.position = 'relative'
    noBtn.style.left = `${randomX}px`
    noBtn.style.top = `${randomY}px`
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yes-btn')
  const overlay = document.createElement('div')

  const gifUrl =
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExejZlaTg1MTRhM3JucnZlZ3psYnE5MXB5anQ3YzI1azR2dXo0cW52YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7W1rgKAxlDe3m/giphy.gif'

  // Create overlay for the image
  overlay.id = 'overlay'
  overlay.innerHTML = `<img src="${gifUrl}" alt="Love Reaction">`
  document.body.appendChild(overlay)

  yesBtn.addEventListener('click', () => {
    overlay.style.display = 'flex'
  })

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none'
  })
})
