const React = require ('react');
const {useState} = require('react');
const { useParams } = require('react-router-dom');

const PageEditarMusico = ()=>{

    const {id} = useParams();
    const [musico,setMusico] = useState();

    client({
        method: 'GET',
        path: '/api/musicos/'+id
    }).done((response)=>{
        
    })

    return(
        <>
            <h1>Editar Musico: {id}</h1>
            <Link to ="/">Volver</Link>
        </>
    )
}

module.exports = PageEditarMusico