# SEO Validation Checklist for https://www.foxtra.com.au

## ✅ Completed Changes

1. ✅ Created `/app/sitemap.ts` using Next.js App Router `MetadataRoute.Sitemap`
2. ✅ Created `/app/robots.ts` using Next.js App Router `MetadataRoute.Robots`
3. ✅ Removed old `/public/sitemap.xml` and `/public/robots.txt` files
4. ✅ Replaced all hard-coded `https://foxtra.ai` URLs with `NEXT_PUBLIC_SITE_URL` env var
5. ✅ Updated canonical tags and OpenGraph URLs in metadata
6. ✅ Added all blog posts (32 articles) to sitemap

## 📋 Local Validation Checklist

### Before Deploy

1. **Environment Variable Setup**
   ```bash
   # Add to .env.local
   NEXT_PUBLIC_SITE_URL=https://www.foxtra.com.au
   ```

2. **Build Test**
   ```bash
   npm run build
   ```
   - ✅ Should compile without errors
   - ✅ Should generate sitemap and robots routes

3. **Local Development Server**
   ```bash
   npm run dev
   ```

4. **Test URLs (Expected: 200 OK)**
   - [ ] `http://localhost:3000/robots.txt`
     - Should show:
       ```
       User-agent: *
       Allow: /
       Disallow: /api/
       Disallow: /login/
       Disallow: /admin/
       Sitemap: https://www.foxtra.com.au/sitemap.xml
       ```

   - [ ] `http://localhost:3000/sitemap.xml`
     - Should be valid XML
     - All URLs should start with `https://www.foxtra.com.au/`
     - Should include all core pages, services, solutions, CTO services, blog posts

5. **Verify Metadata**
   - [ ] Check homepage metadata in browser dev tools
     - OpenGraph URL should be `https://www.foxtra.com.au`
     - Canonical should be `https://www.foxtra.com.au/`
   
   - [ ] Check blog post metadata (e.g., `/blog/1`)
     - Canonical should be `https://www.foxtra.com.au/blog/1`
     - OpenGraph URL should match canonical

## 🌐 Production Validation Checklist

### After Deploy

1. **Robots.txt**
   - [ ] `https://www.foxtra.com.au/robots.txt`
     - Status: 200 OK
     - Content-Type: `text/plain`
     - Verify content matches requirements:
       ```
       User-agent: *
       Allow: /
       Disallow: /api/
       Disallow: /login/
       Disallow: /admin/
       Sitemap: https://www.foxtra.com.au/sitemap.xml
       ```

2. **Sitemap.xml**
   - [ ] `https://www.foxtra.com.au/sitemap.xml`
     - Status: 200 OK
     - Content-Type: `application/xml` or `text/xml`
     - Verify:
       - All `<loc>` URLs start with `https://www.foxtra.com.au/`
       - No references to `foxtra.ai` domain
       - Includes all expected pages (core, services, solutions, CTO services, blog posts)
       - Valid XML structure

3. **Google Search Console**
   - [ ] Submit sitemap: `https://www.foxtra.com.au/sitemap.xml`
   - [ ] Verify robots.txt is accessible
   - [ ] Check for crawl errors
   - [ ] Monitor indexing status

4. **Page Metadata Verification**
   Test these pages and verify canonical URLs:
   - [ ] `https://www.foxtra.com.au/` - Canonical: `https://www.foxtra.com.au/`
   - [ ] `https://www.foxtra.com.au/about` - Canonical: `https://www.foxtra.com.au/about`
   - [ ] `https://www.foxtra.com.au/blog/1` - Canonical: `https://www.foxtra.com.au/blog/1`
   - [ ] `https://www.foxtra.com.au/cto-services` - Canonical: `https://www.foxtra.com.au/cto-services`

5. **OpenGraph Tags**
   - [ ] Use Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - [ ] Test URL: `https://www.foxtra.com.au/`
   - [ ] Verify OpenGraph URL is `https://www.foxtra.com.au`

6. **Twitter Card Validator**
   - [ ] Use Twitter Card Validator: https://cards-dev.twitter.com/validator
   - [ ] Test URL: `https://www.foxtra.com.au/`
   - [ ] Verify card displays correctly

## 🔍 Quick Test Commands

```bash
# Test robots.txt
curl https://www.foxtra.com.au/robots.txt

# Test sitemap.xml
curl https://www.foxtra.com.au/sitemap.xml | head -50

# Check for any remaining foxtra.ai references in sitemap
curl https://www.foxtra.com.au/sitemap.xml | grep "foxtra.ai"
# Should return nothing

# Verify sitemap URL count
curl https://www.foxtra.com.au/sitemap.xml | grep -c "<loc>"
# Should be ~100+ URLs
```

## 📝 Notes

- All email addresses have been updated from `@foxtra.ai` to `@foxtra.com.au`
- Social media links remain unchanged (they point to actual social media profiles)
- The sitemap includes 32 blog posts from `articles-data.ts`
- All canonical URLs are automatically generated using `getCanonicalUrl()` helper
- Metadata uses `metadataBase` in root layout for automatic canonical URL generation

## 🚨 Important Reminders

1. **Set Environment Variable**: Ensure `NEXT_PUBLIC_SITE_URL=https://www.foxtra.com.au` is set in production environment
2. **Rebuild After Deploy**: The sitemap and robots are generated at build time
3. **Submit to Google**: After deploy, submit the new sitemap to Google Search Console
4. **Monitor**: Check Google Search Console for any indexing issues after 24-48 hours
