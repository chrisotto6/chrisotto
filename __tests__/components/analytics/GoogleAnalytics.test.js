import { render } from '@testing-library/react'
import GAScript from '@/components/analytics/GoogleAnalytics'
import { logEvent } from '@/components/analytics/GoogleAnalytics'

it('renders GAScript unchanged', () => {
  const { container } = render(<GAScript />)
  expect(container).toMatchSnapshot()
})

it('logs the event', () => {
  const windowSpy = jest.spyOn(window, 'window', 'get')
  windowSpy.mockImplementation(() => ({
    location: {
      origin: 'https://example.com',
    },
  }))
  logEvent('action', 'category', 'label', 1)
  windowSpy.mockRestore()
})
