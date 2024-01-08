const Info = ({ person }) => {
  return <div className="person-info">
    <h2 className="name">{person.name}</h2>
    <span className="title">{person.job}</span>
    <div>
      <p className="description">{person.text}</p>
    </div>
  </div>
}
export default Info;