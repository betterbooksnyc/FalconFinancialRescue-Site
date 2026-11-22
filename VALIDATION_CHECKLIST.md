# FFRSITE Master Replication Checklist

## Page replication
- [ ] `/` — CPA homepage: hero, at-a-glance, credentials, start choices, services, service area, CTA
- [ ] `/services` — individual returns, business returns, UBT, notices
- [ ] `/services#individuals` — individual section anchor
- [ ] `/services#business` — business section anchor
- [ ] `/services#ubt` — NYC UBT section anchor
- [ ] `/services#notices` — notices section anchor
- [ ] `/bookkeeping` — bookkeeping and payroll
- [ ] `/about` — practice and credentials
- [ ] `/faq` — questions and answers
- [ ] `/contact` — office, phone, appointment information
- [ ] `/privacy` — privacy policy

## External link validation
- [ ] NYSED professional verification URL loads and displays CPA license 138577
- [ ] Header phone link opens the dialer with `9176743969`
- [ ] Mobile/header call link opens the dialer
- [ ] Hero call link opens the dialer
- [ ] CTA call link opens the dialer
- [ ] Footer phone link opens the dialer
- [ ] The privacy-policy phone link opens the dialer
- [ ] No master-template or development-only labels remain in rendered pages or source
- [ ] No blank email or profile destinations remain
- [ ] External links open safely with appropriate security attributes

## Internal route validation
- [ ] `/` renders without console errors
- [ ] `/about` renders
- [ ] `/services` renders
- [ ] `/bookkeeping` renders
- [ ] `/faq` renders
- [ ] `/contact` renders
- [ ] `/privacy` renders
- [ ] Browser back/forward navigation works
- [ ] Header active state follows the route
- [ ] Footer links reach the intended route
- [ ] Direct loading of every route works under the production SPA routing configuration

## Responsive and accessibility validation
- [ ] Desktop viewport: 1440px
- [ ] Laptop viewport: 1024px
- [ ] Tablet viewport: 768px
- [ ] Mobile viewport: 390px
- [ ] Mobile viewport: 320px
- [ ] Header/navigation does not overflow
- [ ] Hero and credential cards remain readable
- [ ] Appointment actions are clear
- [ ] Keyboard tab order reaches all links
- [ ] One visible H1 is present per route
- [ ] Heading hierarchy is logical
- [ ] Links have accessible names
- [ ] Color contrast is reviewed

## Features requiring further examination
- [ ] Approved final privacy policy language should receive legal review
- [ ] Office hours are not published
- [ ] Public email address is not listed
- [ ] Published client testimonials and Google review destination are not listed
- [ ] Years-in-practice value is not published
- [ ] Consultation scheduling provider or live form is not connected
- [ ] Live form submission/service is not configured
- [ ] Maps/directions embed is not provided
- [ ] NYSED link behavior needs retesting after deployment
- [ ] SPA deep links require host rewrite fallback configuration
- [ ] Production domain and hosting deployment routing need retest

## End-to-end test results — November 22, 2026
- [x] Production build completed successfully with Vite
- [x] `/` renders and contains the homepage hero and service sections
- [x] `/services` renders
- [x] `/bookkeeping` renders
- [x] `/about` renders
- [x] `/faq` renders
- [x] `/contact` renders
- [x] `/privacy` renders
- [x] `/pricing` compatibility route renders the bookkeeping page
- [x] Desktop and 390px mobile viewports have no detected horizontal overflow
- [x] Every tested route contains one H1
- [x] NY Tax notices external destination loaded successfully
- [x] NYSED license verification loaded and confirmed HURRON D LUCAS, CPA, license 138577, registered through April 30, 2027
- [ ] Real consultation booking workflow is not yet connected
- [ ] Live contact-form submission is not yet configured
- [ ] Office email address is not supplied
- [ ] Published office hours are not supplied
- [ ] Client testimonials and Google review destination are not supplied
