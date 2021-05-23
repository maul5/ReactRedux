import React from 'react'
import { connect } from 'react-redux'

import { addSubscriber } from '../redux/subscribers/actions'
// import { addSubscriber } from '../redux/index'
// import { addSubscriber } from '../redux'

const Subscribers = (props) => {
  return (
    <div className="items">
      <p>구독자 수 : {props.count}</p>
      <button onClick={() => props.addSubscriber()}>구독하기</button>
    </div>
  )
}
// const Subscribers = ({count, addSubscriber}) => {
//   return (
//     <div className="items">
//       <p>구독자 수 : {count}</p>
//       <button onClick={() => addSubscriber()}>구독하기</button>
//     </div>
//   )
// }


// const mapStateToProps = (state) => {
//   console.log('state=', state)
//   return {
//     count: state.count
//   }
// }
const mapStateToProps = (state) => {
  return {
    count: state.subscriber.count
  }
}
// const mapStateToProps = ({subscriber}) => {
//   return {
//     count: subscriber.count
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    addSubscriber: () => dispatch(addSubscriber())
  }
}
// const mapDispatchToProps = {
//   addSubscriber
// }

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)
