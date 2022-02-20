import { render } from '@testing-library/react'
import Pagination from '@/components/Pagination'

it('renders Pagination unchanged', () => {
  const { container } = render(<Pagination totalPage="4" currentPage="2" />)
  expect(container).toMatchSnapshot()
})

it('renders Pagination with one page unchanged', () => {
  const { container } = render(<Pagination totalPage="1" currentPage="1" />)
  expect(container).toMatchSnapshot()
})

it('renders Pagination on the last page unchanged', () => {
  const { container } = render(<Pagination totalPage="2" currentPage="1" />)
  expect(container).toMatchSnapshot()
})
