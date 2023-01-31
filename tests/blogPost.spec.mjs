import { test, expect } from '@playwright/test'

test('should navigate to the first blog post page', async ({ page }) => {
  // Navigate to home and save off variables
  await page.goto('http://localhost:3000/')
  const postTitle = await page.locator('data-testid=list-blog-item >> nth=0 >> h2').textContent()

  // Navigate to the post
  await page.locator('data-testid=list-blog-item >> nth=0 >> h2').click()

  // Verify the post title in the page matches what was on the home screen and verify next/prev buttons
  await expect(page.locator('h1')).toHaveText(`${postTitle}`)
  await expect(page.locator('data-testid=previous-article')).toBeVisible()
  await expect(page.locator('data-testid=next-article')).not.toBeVisible()

  // Verify tags
  await expect(await page.locator('data-testid=post-tags-container')).toBeVisible()
})

test('should navigate to the second blog post page', async ({ page }) => {
  // Navigate to home and save off the title of the second post
  await page.goto('http://localhost:3000/')
  const postTitle = await page.locator('data-testid=list-blog-item >> nth=1 >> h2').textContent()

  // Navigate to the post
  await page.locator('data-testid=list-blog-item >> nth=1 >> h2').click()

  // Verify the post title in the page matches what was on the home screen and verify next/prev buttons
  await expect(page.locator('h1')).toHaveText(`${postTitle}`)
  await expect(page.locator('data-testid=previous-article')).toBeVisible()
  await expect(page.locator('data-testid=next-article')).toBeVisible()

  // Verify tags
  await expect(await page.locator('data-testid=post-tags-container')).toBeVisible()
})
