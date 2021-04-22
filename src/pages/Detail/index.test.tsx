import React from 'react'
import { act, render } from '@testing-library/react'
import Detail from '.'
import store from '../../redux/store/configureStore'
import { Provider } from 'react-redux'
import constants from '../../constants'
import ReactRouter from 'react-router'

describe('Given a Detail component', () => {
  let container : HTMLDivElement | null | any

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ mediaType: constants.movie, id: '11' })
  })

  afterEach(() => {
    container = null
  })

  describe('When is invoked with no selectedMedia', () => {
    test('Then should render one p with content constants.noSelectedMedia', () => {
      act(() => {
        render(
          <Provider store={store}>
            <Detail />
          </Provider>, container)
      })

      const p: HTMLParagraphElement | null | any = document.querySelector('p')
      expect(p.innerHTML).toBe(constants.noSelectedMedia)
    })
  })
})
