const Buttons = ({ event1, event2 }) => {
  return <div className="btn-container">
    <button className="prev-btn btn" onClick={event1}><i className="fas fa-chevron-left"></i></button>
    <button className="next-btn btn" onClick={event2}><i className="fas fa-chevron-right"></i></button>
  </div>
}

export default Buttons;