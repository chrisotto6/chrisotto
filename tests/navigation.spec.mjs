import { test, expect } from '@playwright/test'

test('should navigate to the blog page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('text=Blog')
  await expect(page).toHaveURL('http://localhost:3000/blog')
  await expect(page.locator('h1')).toContainText('All Posts')
})

test('should navigate to the tags page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('text=Tags')
  await expect(page).toHaveURL('http://localhost:3000/tags')
  await expect(page.locator('h1')).toContainText('Tags')
})

test('should navigate to the projects page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('text=Projects')
  await expect(page).toHaveURL('http://localhost:3000/projects')
  await expect(page.locator('h1')).toContainText('Projects')
})

test('should navigate to the about page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('text=About')
  await expect(page).toHaveURL('http://localhost:3000/about')
  await expect(page.locator('h1')).toContainText('About')
})