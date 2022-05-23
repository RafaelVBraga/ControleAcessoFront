import Style from './AcessoCard.module.css'
function AcessoCard(props:any){
    return(
        <div className={Style.body}>
            <h1> {props.codigo}</h1>
            <p> {props.descricao} </p>
            <p> {props.data}</p>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>RG</th>
                        <th>Matricula</th>
                        <th>Empresa</th>
                    </tr>
                </thead>
                <tr>
                    <td>Rafael</td>
                    <td>97002520322</td>
                    <td>269278</td>
                    <td>Chesf</td>
                </tr>
            </table>
            
        </div>)
}export default AcessoCard;