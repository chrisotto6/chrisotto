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
- [ ] TOC Component to applicable posts `<TOCInline toc={props.toc} asDisclosure toHeading={3} />`
- [x] Remove Theme reference in footer
- [ ] Fix formatting of footer on mobile
- [x] Matter API for getting the summary of the post dynamically to render it in the BlogItem component
- [ ] Spacing for tailwind grid for formatting of BlogItem component, right now it's too smooshed with the image

## Setup

- [ ] Google Analytics
- [ ] Mailchimp
- [ ] Vercel Deploy with Netlify depreciation????

## Add

Most of these will probably get created into issues after the initial migration

- [ ] A whole bunch of testsssssss - unit/jest snapshot
- [ ] Uses - Add page to nav bar
- [ ] Folders for posts/post images based on year??
- [ ] Redo the way posts show up on landing/all posts page (card)
- [ ] Personalize the background (dark/light mode)
- [ ] Personalize home
  - [ ] Intro/Image
  - [ ] Move up email form?
  - [ ] Theme colors
  - [ ] Background colors
- [ ] Crypress? Playwright?
- [ ] Snippets page?
- [ ] About page resume
- [x] Reading Time
- [ ] Contact form?
- [ ] APIs?!?
- [ ] Share buttons in the post footer?
- [ ] Componentize blog post items
- [ ] Extract blog post image rendering from the blog itself into the high level renderer/layout
- [ ] Fix width of project cards
