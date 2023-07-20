const fetchData = (url) => new Promise( (resolve, reject) => {
  /**
   * This is going to be a basic "GET"
   */
  fetch(url)
    .then(result => result.json()) /// convert the result to a JSON object
    .then(data => {  /// The return of 'result.json' is passed on as 'data'
      console.log({api: data})
      resolve(data)  /// Everything okay, so resolve
    })
    .catch(err => {  /// Oops! we got an error! let's 'reject' this call!
      reject({success: false, error: err})
    })

})


export { fetchData }