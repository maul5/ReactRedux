import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { addView } from '../redux/views/actions'
// import { addView } from '../redux/index'
import { addView } from '../redux'

// const Subscribers = (props) => {
//   return (
//     <div className="items">
//       <p>조회수 : {props.count}</p>
//       <button onClick={() => props.addView()}>조회하기</button>
//     </div>
//   )
// }
const Views = (props) => {
  const [number, setNumber] = useState(1)

  return (
    <div className="items">
      <p>조회수 : {props.count}</p>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
      <button onClick={() => props.addView(number)}>조회하기</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.view.count
  }
}

const mapDispatchToProps = {
  addView: (number) => addView(number)
}

export default connect(mapStateToProps, mapDispatchToProps)(Views)
