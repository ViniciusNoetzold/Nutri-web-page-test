# Daily Scientific News Automation - Setup Guide

## 🎯 Overview

This guide explains how to configure and run the automated Daily Scientific News system that fetches, verifies, and displays nutrition science articles from trusted medical sources.

## 📋 Prerequisites

- Node.js 18+ installed
- API key from OpenAI (GPT-4) or Google Gemini
- GitHub repository (for GitHub Actions automation)
- OR Vercel account with Pro plan (for Vercel Cron)

---

## 🚀 Quick Start

### 1. Install Dependencies

The required packages are already installed:
- `rss-parser` - Parse RSS feeds from medical journals
- `dotenv` - Manage environment variables

### 2. Configure Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit `.env` and add your API key:

```env
# Option 1: OpenAI (recommended)
OPENAI_API_KEY=sk-your-actual-api-key-here

# Option 2: Google Gemini (alternative)
# GEMINI_API_KEY=your-gemini-api-key-here
```

**Important:** Never commit `.env` to version control!

### 3. Test the Automation Script Manually

Run the script to fetch and verify news:

```bash
npm run news:update
```

Expected output:
```
🚀 Starting Daily Scientific News Automation...
📚 STEP 1: Fetching articles from trusted medical sources...
📡 Fetching from PubMed - Nutrition...
✅ Found 15 articles from PubMed - Nutrition
...
✅ NEWS DATA UPDATED
📰 Headline: [Article headline]
📊 Verification Score: 95%
```

This will update `public/news-data.json` with a verified article.

### 4. Verify Frontend Display

Start the dev server:
```bash
npm run dev
```

Open http://localhost:5173/ and scroll to the "Latest Nutrition Science" section. You should see:
- Editorial news card
- Pulsing "Medically Verified" badge
- Article headline, summary, source, and date

---

## 🤖 Automation Options

### Option A: GitHub Actions (Recommended)

**Setup Steps:**

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add Daily News Automation"
   git push origin main
   ```

2. **Add API Key Secret:**
   - Go to your GitHub repository
   - Navigate to **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `OPENAI_API_KEY` (or `GEMINI_API_KEY`)
   - Value: Your actual API key
   - Click **Add secret**

3. **Enable GitHub Actions:**
   - Go to **Actions** tab in your repository
   - If workflows are disabled, click **Enable**
   - Find "Daily Scientific News Automation" workflow
   - Click **Enable workflow**

4. **Test Manual Run:**
   - Click on the workflow
   - Click **Run workflow** → **Run workflow**
   - Monitor the execution

5. **Automated Schedule:**
   - The workflow runs automatically every day at 6:00 AM UTC
   - Configured in `.github/workflows/daily-news.yml`
   - Customize the cron schedule:
     ```yaml
     schedule:
       - cron: '0 6 * * *'  # Change time here (UTC)
     ```

**Cron Schedule Examples:**
- `0 6 * * *` - Every day at 6:00 AM UTC
- `0 */12 * * *` - Every 12 hours
- `0 9 * * 1-5` - Weekdays at 9:00 AM UTC

---

### Option B: Vercel Cron (Enterprise)

**Requirements:**
- Vercel Pro or Enterprise plan
- Project deployed on Vercel

**Setup Steps:**

1. **Deploy to Vercel:**
   ```bash
   npm run build
   vercel --prod
   ```

2. **Add Environment Variables:**
   - Go to Vercel Dashboard → Your Project
   - **Settings** → **Environment Variables**
   - Add `OPENAI_API_KEY` (or `GEMINI_API_KEY`)

3. **Configure Cron:**
   - Cron config is already in `vercel.json`
   - Create API route at `pages/api/cron/update-news.js`:
   
   ```javascript
   import { exec } from 'child_process';
   import { promisify } from 'util';
   
   const execAsync = promisify(exec);
   
   export default async function handler(req, res) {
     // Verify cron secret (recommended)
     if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
       return res.status(401).json({ error: 'Unauthorized' });
     }
   
     try {
       await execAsync('node scripts/news-automation.js');
       res.status(200).json({ success: true, message: 'News updated' });
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   }
   ```

4. **Verify Cron Job:**
   - Go to **Deployments** → **Cron Jobs** in Vercel Dashboard
   - Confirm the cron job is listed and active

---

### Option C: Local Cron / Task Scheduler

**For Linux/macOS (crontab):**

```bash
# Edit crontab
crontab -e

# Add this line (runs daily at 6 AM):
0 6 * * * cd /path/to/nutri-website && npm run news:update
```

**For Windows (Task Scheduler):**

1. Open **Task Scheduler**
2. **Create Basic Task**
3. Name: "Daily News Update"
4. Trigger: Daily at 6:00 AM
5. Action: Start a program
   - Program: `node`
   - Arguments: `scripts/news-automation.js`
   - Start in: `C:\path\to\nutri-website`

---

## 🔧 Customization

### Modify Trusted Sources

Edit `scripts/news-automation.js`:

```javascript
const RSS_FEEDS = [
  {
    name: 'Your Source Name',
    url: 'https://example.com/rss',
    priority: 10,  // 1-10, higher = more trusted
    domain: 'example.com'
  },
  // Add more sources...
];
```

### Adjust Verification Criteria

In `verifyScientificAccuracy()` function:

```javascript
// Customize red flags
const sensationalistTerms = [
  'miracle', 'shocking', // Add more...
];

// Customize evidence terms
const evidenceTerms = [
  'study', 'research', // Add more...
];
```

### Integrate Real LLM API

Uncomment and configure in `verifyScientificAccuracy()`:

**For OpenAI:**
```javascript
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [/* ... */],
    temperature: 0.3
  })
});
```

**For Google Gemini:**
```javascript
import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
const result = await model.generateContent(prompt);
```

---

## 🧪 Testing

### Manual Test
```bash
npm run news:update
```

### Check Output
```bash
cat public/news-data.json
```

### Verify Frontend
1. Start dev server: `npm run dev`
2. Open http://localhost:5173/
3. Scroll to "Latest Nutrition Science"
4. Confirm article displays with pulsing badge

---

## 📊 Monitoring

### GitHub Actions Logs
- Go to **Actions** tab
- Click on latest workflow run
- View detailed logs for each step

### Error Handling

If no articles are verified:
- Check RSS feed URLs are accessible
- Review verification criteria (too strict?)
- Confirm API key is valid
- Check console logs for errors

---

## 🔒 Security Best Practices

1. **Never commit API keys** - Use environment variables
2. **Add to .gitignore:**
   ```
   .env
   .env.local
   ```
3. **Rotate API keys** regularly
4. **Use GitHub Secrets** for automation
5. **Limit API key permissions** to minimum required

---

## 🎨 Frontend Customization

### Modify Badge Animation

Edit `src/components/DailyNewsSection.jsx`:

```javascript
<motion.div
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.5, 0.8, 0.5],
  }}
  transition={{
    duration: 2,  // Change animation speed
    repeat: Infinity,
    ease: "easeInOut"
  }}
  // ...
/>
```

### Change Design Theme

Update Tailwind classes in component:
- `from-sage-50 to-slate-50` - Gradient colors
- `text-sage-500` - Accent colors
- `rounded-3xl` - Border radius

---

## 📝 Troubleshooting

| Issue | Solution |
|-------|----------|
| "Module not found" error | Run `npm install` |
| RSS fetch timeout | Check internet connection, try different feeds |
| No articles verified | Lower verification threshold or adjust criteria |
| API key error | Verify key in `.env` and environment variables |
| GitHub Actions failing | Check secrets are added, logs for errors |

---

## 🚀 Going Live

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Deploy to hosting** (Vercel, Netlify, etc.)

3. **Set environment variables** in hosting dashboard

4. **Enable automation** (GitHub Actions or Vercel Cron)

5. **Monitor first few runs** to ensure success

---

## 📞 Support

- Check GitHub Actions logs for automation errors
- Review console output when running `npm run news:update`
- Verify RSS feed URLs are still valid
- Ensure API quotas aren't exceeded

**System Working Correctly When:**
- ✅ Script runs without errors
- ✅ `news-data.json` updates daily
- ✅ Frontend displays verified article
- ✅ Pulsing badge animates smoothly
- ✅ Source shows trusted medical institution
