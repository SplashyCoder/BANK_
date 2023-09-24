
export async function v4 () {

    try {
        const respuesta = await fetch('https://www.uuidgenerator.net/api/version4')
        const json = await respuesta.text();
        return(json)
    } catch (error) {
        console.log(error)
    }
}
