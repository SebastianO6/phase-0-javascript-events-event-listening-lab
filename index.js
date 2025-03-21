
function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click' , addingEventListener)
    alert('I have been clicked!')
}


addingEventListener()
