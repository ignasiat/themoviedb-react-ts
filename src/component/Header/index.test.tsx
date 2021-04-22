import React from 'react'
import { act, render } from '@testing-library/react'
import Header from '.'
import { MemoryRouter } from 'react-router-dom'

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
          <MemoryRouter>
            <Header />
          </MemoryRouter>
          , container)
      })

      const img: HTMLImageElement | null | any = document.querySelectorAll('img')
      expect(img.length).toBe(1)
    })
  })
})
