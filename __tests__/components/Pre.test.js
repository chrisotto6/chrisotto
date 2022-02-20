import { render, fireEvent } from '@testing-library/react'
import Pre from '@/components/Pre'

it('renders Pre unchanged', () => {
  const { container } = render(<Pre />)
  expect(container).toMatchSnapshot()
})

it('button mouse events correctly', () => {
  const { getByTestId } = render(<Pre />)
  fireEvent.mouseEnter(getByTestId('pre'))
  fireEvent.mouseLeave(getByTestId('pre'))
})

it('button click events correctly', () => {
  jest.useFakeTimers()
  jest.spyOn(global, 'setTimeout')

  const mockClipboard = {
    writeText: jest.fn(),
  }

  global.navigator.clipboard = mockClipboard
  const { getByTestId } = render(<Pre />)
  fireEvent.mouseEnter(getByTestId('pre'))
  fireEvent.click(getByTestId('copy-button'))
  expect(mockClipboard.writeText).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000)
})
