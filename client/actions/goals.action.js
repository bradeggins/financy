export const ADD_GOAL = 'ADD_GOAL'
export const FETCH_GOALS_BEGIN = 'FETCH_GOALS_BEGIN'
export const FETCH_GOALS_SUCCESS = 'FETCH_GOALS_SUCCESS'
export const FETCH_GOALS_FAILURE = 'FETCH_GOALS_FAILURE'

export const addGoal = (goal, id) => ({
  type: ADD_GOAL,
  payload: { goal, id }
})

export const fetchGoalsBegin = () => ({
  type: FETCH_GOALS_BEGIN
})

export const fetchGoalsSuccess = (goals) => ({
  type: FETCH_GOALS_SUCCESS,
  payload: { goals }
})

export const fetchGoalsFailure = (error) => ({
  type: FETCH_GOALS_FAILURE,
  payload: { error }
})
