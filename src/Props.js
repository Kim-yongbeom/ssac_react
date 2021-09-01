// Props 사용
// Props : Properties
// component 와 component 사이에서 값을 전달할때 사용하는 객체

function Props(Props){
    return(
        <article className="article">
            {Props.number}
        </article>
    );
}

export default Props;