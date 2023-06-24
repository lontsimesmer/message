const stringInput = document.querySelector('.input')
const normalRect = document.querySelector('.normal-text')
const btnSubmit = document.querySelector('.encode')
const encoded = document.querySelector('.encoded-area')
const encodedRect = document.querySelector('.encoded-message')

btnSubmit.addEventListener('click', function () {
  secretMessage()
})

function secretMessage () {
  const str = stringInput.value
  const normalized = str.replace(/[^\w]/g, ' ').toLowerCase()
  const strLength = normalized.length
  const size = Math.ceil(Math.sqrt(strLength))

  let encrypt = ' '
  let encrypText = ' '

  if (strLength < 50) {
    alert('Text should not be less than 50 characters')
  } else {
    for (let i = 0; i < size; i++) {
      for (let j = i; j < strLength; j += size) {
        encrypt += normalized[j]
        encrypText += normalized[j]
      }
      encrypText += '\n'
    }

    normalRect.innerHTML = `${normalized}`
    encoded.innerHTML = `${encrypt}`
    encodedRect.innerHTML = `${encrypText}`
  }
}
