// fetch.js
// import { ref } from 'vue'

export async function useFetch(url) {
  //   const data = ref(null)
  //   const error = ref(null)

  let data = []
  let error = []

  await fetch(
    url,
    //     , {
    //     method: 'GET',
    //     headers: {
    //       'Access-Control-Allow-Origin': 'http://localhost:5173',
    //     },
    //   }
  )
    .then((res) => res.json())
    .then((json) => {
      data = json
    })
    .catch((err) => {
      error = err
    })

  return { data, error }
}
