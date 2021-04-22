import React from 'react'
import { act, render } from '@testing-library/react'
import CircularProgressWithLabel from '.'

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
    test('Then should render one div with class MuiTypography-caption', () => {
      act(() => {
        render(
            <CircularProgressWithLabel value={100}/>
            , container)
      })

      const mui: HTMLElement | null | any = document.querySelectorAll('.MuiTypography-caption')
      expect(mui.length).toBe(1)
    })
  })
})
