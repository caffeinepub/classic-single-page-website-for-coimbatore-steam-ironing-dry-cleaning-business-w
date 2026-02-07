# Specification

## Summary
**Goal:** Refresh the site’s look with a consistent light-blue theme, correct phone/WhatsApp contact details, expand the gallery with washing-machine imagery, and update branding to an ALL CAPS block-style 3D presentation.

**Planned changes:**
- Update global CSS theme tokens in `frontend/src/index.css` to apply a clean light-blue background palette with dark/near-black text across all sections, including muted surfaces, cards, borders, and accents.
- Update `businessInfo.phone` in `frontend/src/content/siteContent.ts` to display `98431 29760` everywhere and ensure all `tel:` call actions use the updated number.
- Update `businessInfo.whatsapp` in `frontend/src/content/siteContent.ts` to an India E.164 digits-only value for `wa.me` links corresponding to `98431 29760`, and ensure all WhatsApp links use it.
- Add at least 2 new free-to-use gallery images featuring washing machines in a laundry/dry-cleaning context, include them in `galleryImages` in `frontend/src/content/siteContent.ts`, and provide suitable English alt text.
- Replace header/footer brand name rendering with an ALL CAPS, bold, block-style 3D text graphic, and update `frontend/src/components/SiteHeader.tsx` and `frontend/src/components/SiteFooter.tsx` to use it while keeping the tagline readable and responsive.

**User-visible outcome:** The site appears consistently light-blue themed, all call/WhatsApp actions reach the corrected number, the gallery includes new washing-machine photos, and the header/footer branding shows an ALL CAPS block-style 3D brand name with the tagline intact.
