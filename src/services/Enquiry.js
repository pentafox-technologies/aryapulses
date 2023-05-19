export const submitEnquiry = body => {
  return new Promise((resolve, reject) => {
    fetch("https://9q0td40e97.execute-api.ap-southeast-2.amazonaws.com/arya", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.GATSBY_API_KEY,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Request failed")
        }
        return response.json()
      })
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        reject(error.message)
      })
  })
}
