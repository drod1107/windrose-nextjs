# Windrose & Company | Visual modernization plan (November 25, 2026)

## Baseline and scope
Corporate positioning was restored and merged in PRs #25 and #26. The site now addresses small businesses, schools, and community organizations. The K-12 AI safety practice and Wintergarten work are both important proof points. This phase refines design and user experience, not the business model. Windrose.dev stays untouched; its updated technical-portfolio visual system is a related design reference, but both sites retain distinct content, audiences and positioning. Its public domain currently appears to serve the corporate website despite its separate Vercel project; treat that as a separate routing concern.

## Brand thesis
Windrose helps people reclaim attention and capability through better systems. The company should feel like an experienced, approachable, thoughtful boutique consultancy: serious about responsibility, curious about technology, distinctly human. Preserve the navigation/compass motif and the founder voice (technology helping people "human" better). Avoid corporate stock imagery, glowing AI brains, inflated expertise and unverified claims.

## Audience and content hierarchy
1. Owners, founders, and small teams: streamline workflows, build integrated tools, get back to the work they love.
2. K-12 decision-makers: AI safety, policy, training and responsible implementation.
3. Community and nonprofit leaders: create more capacity with limited resources.
Home: distinctive value proposition -> four practical specialties -> real work -> founders -> conversation. Keep Services, For Schools, Case Studies, Insights, About, and Contact discoverable.

## Visual system
- Feedback revision: replace the heavy navy/teal/cream treatment with a bright, crisp, authoritative palette. Predominantly white and cool near-white surfaces, confident blue for navigation and actions, deep blue-gray typography, pale blue sections, and only sparing warm peach accents. Preserve compass identity without dark atmospheric fills.
- Use an editorial, typography-led aesthetic: generous whitespace, large Lora headlines, readable Montserrat body, elegant section dividers, occasional small numerals.
- Replace repeated generic card grids with asymmetric storytelling, deliberate rules, and compact specialty rows. Use the existing compass emblem as an abstract navigational anchor.
- Use genuine founder photography already licensed to the business. Avoid introducing unlicensed third-party photography.
- Add considered microinteractions only where they help; honor reduced-motion preferences.

## Work packages
A. Global design and accessibility: reusable tokens, meaningful focus states, readable measure/spacing, skip-to-content, touch targets, polished header/footer, and responsive behavior.
B. Homepage: editorial hero with typographic emphasis and compass field; four specialties as a scan-friendly list; two authentic case-study narratives; grounded founder story; strong but low-pressure CTA.
C. Interior pages: rework Services, About, Contact and shared page hero/closing CTA to harmonize with the new design. Preserve educational assets, blog URLs, privacy/terms, indexing and metadata.
D. Quality: verify all routes, navigation, CTA links, responsive layouts, keyboard operation, readable contrast, and build.

## Source and policy verification
US Department of Education August 20, 2026 responsible edtech guidance emphasizes educator leadership, ethics, accessibility, transparency and student privacy: https://www.ed.gov/about/news/press-release/us-department-of-education-releases-guidance-responsible-use-of-education-technology-classroom
Education guidance emphasizes human oversight, AI literacy and student privacy: https://www.ed.gov/about/news/press-release/us-department-of-education-issues-guidance-artificial-intelligence-use-schools-proposes-additional-supplemental-priority
Use W3C WCAG 2.2 AA as an accessibility target (not a claim of certification); follow the published focus and contrast guidance: https://www.w3.org/TR/WCAG22/

## Constraints
- No production changes, domain moves, or changes to Windrose.dev before user signs off.
- Do not invent metrics, school testimonials, pilots completed, case-study outcomes, credentials, or pricing. Existing claims needing later substantiation should remain flagged for follow-up.
- Do not alter proprietary material or add lead-capture dependencies.
- Preserve working booking URL, legal pages, SEO, sitemap, structured data, robots policy and analytics.

## Acceptance and release
Commit on design/editorial-people-first-20261125, run install/build/TypeScript/lint and route smoke tests, deploy a non-production Vercel preview, and verify the preview. Share preview URL and concise changes with user. Incorporate user feedback in that branch and only merge/deploy production after explicit approval.
