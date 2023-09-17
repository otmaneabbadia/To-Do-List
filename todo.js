const input = document.querySelector("input")
const addButton = document.querySelector('#addButton')
const span = document.querySelector('#tasks')

addButton.addEventListener("click", () => {
    if(input.value.trim() !== '') {
        let newItem = document.createElement('item')
        newItem.innerHTML = `<div
        class="d-flex justify-content-between align-items-center bg-secondary bg-opacity-50 rounded mb-3"
      >
        <h6 class="p-3">${input.value}</h6>
        <button onclick='removeItem(event)' type="button" class="btn bg-dark text-light me-2">
          Delete
        </button>
      </div>`
      span.appendChild(newItem)
      input.value = ''
    }else {
        alert('Please enter a task')
    } 
})

function removeItem(e) {
    e.target.parentElement.remove()
}

