import React from 'react'
import { Entry} from '../../state/features/portafolioSlice';
import AddPortafolio from '../../pages/portafolio/AddPortafolio'


interface props{
    portafolio:Entry[]
}


function Portafolio({portafolio}:props){

    return (<div>
        <table>
            <thead>
                <tr>
                <td>Name:</td>
                <td>Url:</td>
                <td>Description:</td>
                </tr>
            </thead>
            
                {portafolio.map((entry) => {
                    return <tbody key={entry.id}>
                    <tr>
                    <td>{entry.name}</td>
                    <td><a href={entry.url}>{entry.url}</a></td>
                    <td>{entry.description}</td>
                    </tr>
                    </tbody>
                })}
        </table>
        <AddPortafolio/>
        </div>)

}

export default Portafolio