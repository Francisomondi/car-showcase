
export async function fetchCars(){
const headers = {
    'X-RapidAPI-Key': 'de35f9d2d7msh3a4d3280357ee78p19cfdajsn51ad3e9dbc56',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
}

const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers:headers,
})
const results = await response.json()
return results

}