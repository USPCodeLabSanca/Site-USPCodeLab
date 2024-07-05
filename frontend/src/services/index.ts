import axios from 'axios'

export const getEvents = async () => {
    await axios.get('http://codelab.icmc.usp.br:3000/api/event')
    .then(response => {
        return response.data
    })
    .catch(error => {console.log(error)})
}

export const getProjects = async () => {
    await axios.get('http://codelab.icmc.usp.br:3000/api/project')
    .then(response => {
      return response.data
    })
    .catch(error => {console.log(error)})
}

export const getGroups = async () => {
    await axios.get('http://codelab.icmc.usp.br:3000/api/group')
    .then(response => {
        return response.data
    })
    .catch(error => {console.log(error)})
}
export const getTechnologys = async () => {
    await axios.get('http://codelab.icmc.usp.br:3000/api/technology')
    .then(response => {
        return response.data
    })
    .catch(error => {console.log(error)})
}