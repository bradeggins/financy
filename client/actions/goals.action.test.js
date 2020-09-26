import { addGoal, ADD_GOAL, fetchGoalsBegin, fetchGoalsFailure, fetchGoalsSuccess, FETCH_GOALS_BEGIN, FETCH_GOALS_FAILURE, FETCH_GOALS_SUCCESS } from './goals.action'

describe('goals action tests', () => {
  test('addGoal', () => {
    const date = Date.now()
    const goal = {
      name: 'pin jesus to cross',
      goal_date: date,
      amount: '$23.00'
    }

    const action = addGoal(goal, 2)

    expect.assertions(3)
    expect(action.type).toBe(ADD_GOAL)
    expect(action.payload.id).toBe(2)
    expect(action.payload.goal).toEqual(goal)
  })

  test('fetchGoalsBegin', () => {
    const action = fetchGoalsBegin()
    expect(action.type).toBe(FETCH_GOALS_BEGIN)
  })

  test('fetchGoalsSuccess', () => {
    const goals = [{ name: 'house' }, { name: 'dog' }]
    const action = fetchGoalsSuccess(goals)
    expect(action.type).toBe(FETCH_GOALS_SUCCESS)
    expect(action.payload.goals).toBe(goals)
  })

  test('fetchGoalsFailure', () => {
    const error = 'goals not found'
    const action = fetchGoalsFailure(error)
    expect(action.type).toBe(FETCH_GOALS_FAILURE)
    expect(action.payload.error).toBe(error)
  })
})