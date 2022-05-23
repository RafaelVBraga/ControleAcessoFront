function AcessoCard(props:any){
    return(
        <div>
            <h1> {props.codigo}</h1>
            <p> {props.descricao} </p>
            <p> {props.data}</p>
            
        </div>)
}export default AcessoCard;