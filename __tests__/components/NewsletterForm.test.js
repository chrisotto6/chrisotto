import { render, fireEvent } from '@testing-library/react'
import NewsletterForm from '@/components/NewsletterForm'
import { BlogNewsletterForm } from '@/components/NewsletterForm'
import { enableFetchMocks } from 'jest-fetch-mock'

enableFetchMocks()

it('renders NewsletterForm unchanged', () => {
  const { container } = render(<NewsletterForm title="test" />)
  expect(container).toMatchSnapshot()
})

it('renders BlogNewsletterForm unchanged', () => {
  const { container } = render(<BlogNewsletterForm title="test" />)
  expect(container).toMatchSnapshot()
})

//it('submits test email signup', () => {
//  fetch.mockResponseOnce(() => Promise.resolve({message: 'success'}))
//  const { getByTestId } = render(<NewsletterForm title='test' />)
//  fireEvent.submit(getByTestId('email-form'))
//  expect(subscribe).toHaveBeenCalled()
//})
