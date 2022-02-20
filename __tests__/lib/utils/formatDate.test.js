import formatDate from '@/lib/utils/formatDate'

describe('Validate FormatDate is working properly', () => {
  it('Long Date Format', () => {
    const date = '2021-02-19T00:00:00.000Z'

    expect(formatDate(date)).toMatch('February 19, 2021')
  }),
    it('Short Date Format', () => {
      const date = '2021-02-19'

      expect(formatDate(date)).toMatch('February 19, 2021')
    }),
    it('Slash Date Format', () => {
      const date = '2021/02/19'

      expect(formatDate(date)).toMatch('February 19, 2021')
    })
})
