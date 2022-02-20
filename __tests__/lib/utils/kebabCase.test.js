import kebabCase from '@/lib/utils/kebabCase'

describe('Kebab Case formats the string', () => {
  it('Phrase', () => {
    const phrase = 'This is a string'

    expect(kebabCase(phrase)).toMatch('this-is-a-string')
  })
})
