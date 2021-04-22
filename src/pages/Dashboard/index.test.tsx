import React from 'react'
import { act, render, fireEvent } from '@testing-library/react'
import Dashboard from '.'
import store from '../../redux/store/configureStore'
import { Provider } from 'react-redux'
import constants from '../../constants'

describe('Given a Dashboard component', () => {
  let container : HTMLDivElement | null | any

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container = null
  })

  describe('When is invoked', () => {
    test('Then should render a h1', () => {
      act(() => {
        render(
          <Provider store={store}>
            <Dashboard />
          </Provider>, container)
      })

      const title: HTMLHeadingElement | null | any = document.querySelector('h1')
      expect(title.innerHTML).toBe(constants.movie.toUpperCase())
    })
  })

  describe('When tv button is clicked', () => {
    test('Then should render a h1 with content TV', () => {
      act(() => {
        render(
          <Provider store={store}>
            <Dashboard />
          </Provider>, container)
      })

      const button = document.querySelectorAll('button')
      fireEvent.click(button[1])

      const title: HTMLHeadingElement | null | any = document.querySelector('h1')
      expect(title.innerHTML).toBe(constants.tv.toUpperCase())
    })
  })

  describe('When movie button is clicked', () => {
    test('Then should render a h1 with content MOVIE', () => {
      act(() => {
        render(
          <Provider store={store}>
            <Dashboard />
          </Provider>, container)
      })

      const button = document.querySelectorAll('button')
      fireEvent.click(button[0])

      const title: HTMLHeadingElement | null | any = document.querySelector('h1')
      expect(title.innerHTML).toBe(constants.movie.toUpperCase())
    })
  })
})
