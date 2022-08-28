
const Card = ({ parra, author, buttom, colors }) => {
  return (
    <div className="container" style={{ color: colors }}>
      <h1>
        <i class="fa-solid fa-quote-left quote"></i>
        {parra}
      </h1>
      <h2 className="card-author">{author}</h2>
      <button className="card-button" style={{ background: colors }} onClick={buttom}><i class="fa-solid fa-angle-right icons "></i></button>
    </div>
  )




}
export default Card