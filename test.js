const code = 'export const something = "some value"'

describe('dynamic import', () => {
    test('data URI encoder', async () => {
        const importedEncoded = await import(`data:text/javascript;charset=utf-8,${encodeURIComponent(code)}`)
        expect(importedEncoded.something).toBe('some value')
    })

    test('data URI base64', async () => {
        const importedBase64 = await import(`data:text/javascript;base64,${btoa(code)}`)
        expect(importedBase64.something).toBe('some value')
    })
})