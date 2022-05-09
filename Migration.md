# Template Migration

## Change

- [x] Gut comments components and implementations
- [x] Other analytics components and implementation
- [x] Fix the date bug for short date
- [x] Check the content security policy in `next.config.js`
- [x] Check `headerNavLinks.js` to customize navigation links
- [x] Remove Discuss on Twitter at the end of posts
- [x] Fix URL for View on Github at the end of posts
- [x] Move the date below the post heading in the post view
- [x] Update README
- [x] Github Actions - Build, Lint, Test
- [x] Siteurl - siteMetaData
- [ ] Bio for `authors/default.md`
- [ ] Logo
- [ ] Favicons
- [ ] SocialBanner
- [x] TOC Component to applicable posts `<TOCInline toc={props.toc} asDisclosure toHeading={3} />`
- [x] Remove Theme reference in footer
- [ ] Fix formatting of footer on mobile
- [x] Matter API for getting the summary of the post dynamically to render it in the BlogItem component
- [x] Spacing for tailwind grid for formatting of BlogItem component, right now it's too smooshed with the image

## Setup

- [x] Google Analytics
- [x] Mailchimp
- [x] Sentry
- [ ] Vercel Deploy with Netlify depreciation????

## Add

Most of these will probably get created into issues after the initial migration

- [x] A whole bunch of testsssssss - unit/jest snapshot
- [x] Uses - Add page to nav bar
- [ ] Folders for posts/post images based on year??
- [ ] Redo the way posts show up on landing/all posts page (card)
- [ ] Personalize the background (dark/light mode)
- [ ] Personalize home
  - [ ] Intro/Image
  - [ ] Move up email form?
  - [ ] Theme colors
  - [ ] Background colors
- [x] Crypress? Playwright?
- [ ] Snippets page?
- [ ] About page resume
- [x] Reading Time
- [ ] APIs?!?
- [x] Componentize blog post items
- [x] Extract blog post image rendering from the blog itself into the high level renderer/layout
- [x] Fix width of project cards
