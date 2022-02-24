import { test, expect } from '@playwright/test'

test('should navigate to the first blog post page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  const postTitle = await page.locator('data-testid=list-blog-item >> nth=0 >> h2').textContent()
  await page.locator('data-testid=list-blog-item >> nth=0 >> h2 >> a').click()
  await expect(page.locator('h1')).toHaveText(`${postTitle}`)
  await expect(page.locator('data-testid=previous-article')).toBeVisible()
  await expect(page.locator('data-testid=next-article')).not.toBeVisible()
})

test('should navigate to the second blog post page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  const postTitle = await page.locator('data-testid=list-blog-item >> nth=1 >> h2').textContent()
  await page.locator('data-testid=list-blog-item >> nth=1 >> h2 >> a').click()
  await expect(page.locator('h1')).toHaveText(`${postTitle}`)
  await expect(page.locator('data-testid=previous-article')).toBeVisible()
  await expect(page.locator('data-testid=next-article')).toBeVisible()
})