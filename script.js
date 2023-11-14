const rootElement = document.getElementById("root")
const api_key = "OojOOr2igq1E24EJMmISesTbq8pyc1baO5vY9QJE"

const fetchUrl = async (url) => {
    const response = await fetch(url)
    return response.json()
}

const inputComponent = () => `
    <div class="input">
        <input type="date" name="date">
    </div>
`

const apodComponent = (apodData) => `
    <div class="apodDiv">
        <h2>${apodData.title}</h2>
        <h3>${apodData.date}</h3>
        <p>${apodData.explanation}</p>
        <img src=${apodData.url}>
    </div>
`

const init = async () => {
    const data = await fetchUrl(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)

    /* const arrayData = await fetchUrl(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=5`)
    console.log(arrayData)

    const dataByDate = await fetchUrl(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=2000-07-14`)
    console.log(dataByDate) */

    //rootElement.innerHTML = `<h2>${data.title}</h2>`
    rootElement.insertAdjacentHTML("beforeend", inputComponent())
    rootElement.insertAdjacentHTML("beforeend", apodComponent(data))

    const apodDiv = document.querySelector(".apodDiv")
    const inputElement = document.querySelector("input")
    inputElement.addEventListener("input", async () => {
        const inputDate = await fetchUrl(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${inputElement.value}`)
        apodDiv.innerHTML = apodComponent(inputDate)
    })
}

init()
