import escapePathDelimiters from 'next/dist/shared/lib/router/utils/escape-path-delimiters'

describe('escapePathDelimiters', () => {
  it('should escape path delimiters in string segments', () => {
    expect(escapePathDelimiters('hello/world')).toBe('hello%2Fworld')
    expect(escapePathDelimiters('hello#world')).toBe('hello%23world')
    expect(escapePathDelimiters('hello?world')).toBe('hello%3Fworld')
  })

  it('should throw a clear TypeError when segment is not a string', () => {
    expect(() => escapePathDelimiters(123 as any)).toThrow(
      /A required parameter was not provided as a string in getStaticPaths/
    )
    expect(() => escapePathDelimiters({ id: 1 } as any)).toThrow(
      /A required parameter was not provided as a string in getStaticPaths/
    )
  })
})
