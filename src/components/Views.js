import React, { useState } from 'react'
import { connect } from 'react-redux'

// import { addView } from '../redux/views/actions'
// import { addView } from '../redux/index'
import { addView } from '../redux'

// const Views = (props) => {
//   const [number, setNumber] = useState(1)

//   return (
//     <div className="items">
//       <p>조회수 : {props.count}</p>
//       <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
//       <button onClick={() => props.addView(number)}>조회하기</button>
//     </div>
//   )
// }

// props Destructuring
const Views = ({count, addView}) => {
  const [number, setNumber] = useState(1)

  return (
    <div className="items">
      <p>조회수 : {count}</p>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
      <button onClick={() => addView(number)}>조회하기</button>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     count: state.count
//   }
// }
const mapStateToProps = (state) => {
  return {
    count: state.view.count
  }
}

const mapDispatchToProps = {
  addView: (number) => addView(number)
}

export default connect(mapStateToProps, mapDispatchToProps)(Views)
