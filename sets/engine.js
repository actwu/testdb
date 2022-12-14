
  const form = document.forms['ts']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(dbpost, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
      alert("Sended")
      start_media()
      setTimeout(() => {
        start_media()
        }, 5000);
  })

  function start_media() {
    
   runtime =  `<${temp} src="${read_reference}" ${setout}></${temp}>`

  screens.innerHTML = runtime;

}

 setTimeout(() => {
start_media()
}, 1000);