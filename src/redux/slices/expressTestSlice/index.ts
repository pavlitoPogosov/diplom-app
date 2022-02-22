import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { EXPRESS_TEST_QUESTIONS } from '../../../utils/expressTest'

export interface IExpressTestAnswer {
  text: string
  result: string
}

export interface IExpressTestQuestion {
  question: string
  answers: IExpressTestAnswer[]
}

export interface IExpressTestStoreState {
  questions: IExpressTestQuestion[]
}

const initialExpressTestState: IExpressTestStoreState = {
  questions: EXPRESS_TEST_QUESTIONS,
}

export const expressTestSlice = createSlice({
  initialState: initialExpressTestState,
  name: 'accounts',
  reducers: {},
})

export default expressTestSlice.actions
