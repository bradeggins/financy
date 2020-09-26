import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchGoalsBegin, fetchGoalsFailure, fetchGoalsSuccess } from '../actions/goals.action'
import { getUserGoals } from '../api/goals.api'

function Goals (props) {
  const { begin, success, failure, goals } = props

  useEffect(() => {
    begin()
    getUserGoals(2)
      .then((goals) => success(goals))
      .catch((error) => failure(error))
  }, [])

  return (
    goals.map((goal) => (
      <h1 key={goal.id}>{ goal.name }</h1>
    ))
  )
}

const mapStateToProps = (state) => ({
  goals: state.goals,
  waiting: state.waiting
})

const mapDispatchToProps = (dispatch) => ({
  begin: () => dispatch(fetchGoalsBegin()),
  success: (goals) => dispatch(fetchGoalsSuccess(goals)),
  failure: (error) => dispatch(fetchGoalsFailure(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(Goals)