import React from 'react'
import { act, render } from '@testing-library/react'
import NotFound from '.'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Given a NotFound component', () => {
  let container : HTMLDivElement | null | any

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    container = null
  })

  describe('When is invoked', () => {
    test('Then should render one image', () => {
      act(() => {
        render(
          <Router history={createMemoryHistory()}>
            <NotFound />
          </Router>
          , container)
      })

      const img: HTMLImageElement | null | any = document.querySelectorAll('img')
      expect(img.length).toBe(1)
    })
  })
})
