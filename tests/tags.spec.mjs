import { test, expect } from '@playwright/test'

test('should navigate to the tags page and select a tag', async ({ page }) => {
  // Go to the tags page
  await page.goto('http://localhost:3000/tags')

  // Save off the first tag, tag count and formatted tag name for tag page
  const tagName = (await page.locator('data-testid=tag >> nth=0').textContent()).split(' ')[0]
  const tagCount = (await page.locator('data-testid=tag >> nth=0').textContent()).split(' ')[1].charAt(1)
  const formattedTag = tagName.charAt(0).toUpperCase() + tagName.slice(1)

  // Navigate to all articles that have the tag
  await page.locator('data-testid=tag >> nth=0 >> a >> nth=0').click()
  await expect(page.locator('h1')).toContainText(formattedTag)

  // Verify that the counts the tag shows equals the count of articles showing in the page
  const tags = await page.locator('data-testid=tag-container').allTextContents()
  expect(tags.length == tagCount).toBeTruthy()

  // Make sure that each tag container contains the tag
  tags.forEach((tagString) => {
    expect(tagString.includes(tagName)).toBeTruthy()
  })
})