
import axios from 'axios'
export const  GetProjectData = async() =>{
    try {
        const res = await axios.get('./ProjectData.json');
        const data = await res.data;
        return data.projectData

    } catch (error) {
        console.log(error)
    }

 }