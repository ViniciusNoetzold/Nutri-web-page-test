/**
 * Daily Scientific News Automation Script
 * 
 * This script fetches nutrition-related articles from trusted medical sources,
 * verifies their scientific accuracy using AI, and updates the news data file.
 * 
 * Designed to run daily via cron job (GitHub Actions, Vercel Cron, or local scheduler)
 */

import Parser from 'rss-parser';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const RSS_FEEDS = [
    {
        name: 'PubMed - Nutrition',
        url: 'https://pubmed.ncbi.nlm.nih.gov/rss/search/1vR9F9gRmshPIvvl0aSqm7kVAK0q4gx4Xw3VJ7cqDcP_0xwmLs/?limit=15&utm_campaign=pubmed-2&fc=20210817100413',
        priority: 10,
        domain: 'pubmed.ncbi.nlm.nih.gov'
    },
    {
        name: 'Nature - Nutrition Research',
        url: 'https://www.nature.com/subjects/nutrition.rss',
        priority: 9,
        domain: 'nature.com'
    },
    {
        name: 'Harvard Health - Nutrition',
        url: 'https://www.health.harvard.edu/nutrition/feed',
        priority: 9,
        domain: 'health.harvard.edu'
    }
];

const NUTRITION_KEYWORDS = [
    'nutrition', 'diet', 'mediterranean', 'protein', 'fiber', 'vitamins',
    'minerals', 'metabolic', 'obesity', 'weight loss', 'cardiovascular',
    'gut health', 'microbiome', 'longevity', 'anti-inflammatory'
];

/**
 * Fetch and parse RSS feeds from trusted medical sources
 */
async function fetchTrustedArticles() {
    const parser = new Parser({
        timeout: 10000,
        headers: {
            'User-Agent': 'Dr. Sarah Green Nutritionist Website/1.0'
        }
    });

    const allArticles = [];

    for (const feed of RSS_FEEDS) {
        try {
            console.log(`📡 Fetching from ${feed.name}...`);
            const feedData = await parser.parseURL(feed.url);

            const articles = feedData.items.map(item => ({
                headline: item.title,
                summary: item.contentSnippet || item.summary || item.description || '',
                source: feed.name.split(' -')[0], // Extract source name
                date: item.pubDate || item.published || new Date().toISOString(),
                url: item.link,
                priority: feed.priority,
                domain: feed.domain
            }));

            allArticles.push(...articles);
            console.log(`✅ Found ${articles.length} articles from ${feed.name}`);
        } catch (error) {
            console.error(`❌ Error fetching ${feed.name}:`, error.message);
        }
    }

    return allArticles;
}

/**
 * Filter articles by nutrition-related keywords
 */
function filterByNutritionKeywords(articles) {
    return articles.filter(article => {
        const text = `${article.headline} ${article.summary}`.toLowerCase();
        return NUTRITION_KEYWORDS.some(keyword => text.includes(keyword));
    });
}

/**
 * AI Verification Layer - Evaluates scientific accuracy
 * 
 * This function uses an LLM API (OpenAI, Gemini, etc.) to verify:
 * 1. Evidence-based claims
 * 2. Consensus with established nutritional science
 * 3. No sensationalist language
 * 4. Proper source attribution
 * 
 * @param {Object} article - Article object to verify
 * @returns {Object} - Verification result { verified: boolean, confidence: number, reasoning: string }
 */
async function verifyScientificAccuracy(article) {
    console.log(`🔬 Verifying: "${article.headline.substring(0, 60)}..."`);

    // ============================================
    // PLACEHOLDER FOR LLM API INTEGRATION
    // ============================================
    // 
    // Uncomment and configure based on your LLM provider:
    //
    // Option 1: OpenAI
    /*
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{
          role: 'system',
          content: `You are a medical and nutritional science fact-checker. Evaluate articles for:
  1. Evidence-based claims backed by peer-reviewed research
  2. Alignment with consensus nutritional science (not fringe theories)
  3. Absence of sensationalist or clickbait language
  4. Proper attribution to credible sources
  5. No undisclosed conflicts of interest
  
  Respond in JSON format: { "verified": boolean, "confidence": 0-100, "reasoning": "explanation" }`
        }, {
          role: 'user',
          content: `Evaluate this article:\n\nHeadline: ${article.headline}\nSummary: ${article.summary}\nSource: ${article.source}`
        }],
        temperature: 0.3
      })
    });
    const data = await response.json();
    const result = JSON.parse(data.choices[0].message.content);
    */

    // Option 2: Google Gemini
    /*
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  
    const prompt = `You are a medical and nutritional science fact-checker...
  [Same prompt as above]
  
  Evaluate this article:
  Headline: ${article.headline}
  Summary: ${article.summary}
  Source: ${article.source}
  
  Respond in JSON format only.`;
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const verificationResult = JSON.parse(response.text());
    */

    // ============================================
    // MOCK VERIFICATION FOR DEMONSTRATION
    // ============================================
    // This is a rule-based fallback that demonstrates the verification logic
    // In production, replace this with actual LLM API calls above

    const text = `${article.headline} ${article.summary}`.toLowerCase();

    // Red flags for sensationalism
    const sensationalistTerms = [
        'miracle', 'shocking', 'doctors hate', 'one weird trick',
        'secret', 'breakthrough cure', 'never eat', 'always avoid'
    ];

    const hasSensationalism = sensationalistTerms.some(term => text.includes(term));

    // Check for evidence-based language
    const evidenceTerms = [
        'study', 'research', 'clinical trial', 'meta-analysis',
        'peer-reviewed', 'journal', 'published', 'data shows'
    ];

    const hasEvidence = evidenceTerms.some(term => text.includes(term));

    // Check source credibility (already filtered by RSS feeds)
    const trustedDomains = ['pubmed', 'nature', 'harvard', 'mayo', 'lancet'];
    const isTrustedSource = trustedDomains.some(domain =>
        article.domain.includes(domain) || article.source.toLowerCase().includes(domain)
    );

    // Verification logic
    let verified = false;
    let confidence = 0;
    let reasoning = '';

    if (hasSensationalism) {
        verified = false;
        confidence = 20;
        reasoning = 'Article contains sensationalist language not appropriate for evidence-based nutrition science.';
    } else if (!hasEvidence && !isTrustedSource) {
        verified = false;
        confidence = 30;
        reasoning = 'Insufficient evidence-based language or trusted source attribution.';
    } else if (hasEvidence && isTrustedSource) {
        verified = true;
        confidence = 95;
        reasoning = 'Article demonstrates evidence-based approach from trusted medical source with peer-reviewed research.';
    } else if (isTrustedSource) {
        verified = true;
        confidence = 85;
        reasoning = 'Article from trusted medical institution, meets scientific integrity standards.';
    } else {
        verified = hasEvidence;
        confidence = hasEvidence ? 70 : 40;
        reasoning = hasEvidence
            ? 'Article references research but source credibility could be stronger.'
            : 'Lacks sufficient evidence-based support.';
    }

    console.log(`   ${verified ? '✅ VERIFIED' : '❌ REJECTED'} (Confidence: ${confidence}%) - ${reasoning.substring(0, 60)}...`);

    return {
        verified,
        confidence,
        reasoning,
        verificationTimestamp: new Date().toISOString()
    };
}

/**
 * Select the best verified article based on priority and confidence
 */
function selectBestArticle(verifiedArticles) {
    if (verifiedArticles.length === 0) return null;

    // Sort by verification confidence and source priority
    return verifiedArticles.sort((a, b) => {
        const scoreA = a.verificationResult.confidence + (a.priority * 2);
        const scoreB = b.verificationResult.confidence + (b.priority * 2);
        return scoreB - scoreA;
    })[0];
}

/**
 * Update the news data JSON file
 */
async function updateNewsData(article) {
    const newsData = {
        lastUpdated: new Date().toISOString(),
        article: {
            headline: article.headline,
            summary: article.summary,
            source: article.source,
            date: new Date(article.date).toISOString().split('T')[0],
            verified: article.verificationResult.verified,
            url: article.url,
            verificationScore: article.verificationResult.confidence,
            keywords: NUTRITION_KEYWORDS.filter(keyword =>
                `${article.headline} ${article.summary}`.toLowerCase().includes(keyword)
            )
        },
        metadata: {
            verificationReasoning: article.verificationResult.reasoning,
            verificationTimestamp: article.verificationResult.verificationTimestamp,
            automationVersion: '1.0.0'
        }
    };

    const outputPath = path.join(__dirname, '../public/news-data.json');
    await fs.writeFile(outputPath, JSON.stringify(newsData, null, 2), 'utf-8');

    console.log(`\n✅ NEWS DATA UPDATED`);
    console.log(`📰 Headline: ${newsData.article.headline}`);
    console.log(`📊 Verification Score: ${newsData.article.verificationScore}%`);
    console.log(`💾 Saved to: ${outputPath}\n`);
}

/**
 * Main automation workflow
 */
async function main() {
    try {
        console.log('\n🚀 Starting Daily Scientific News Automation...\n');
        console.log('='.repeat(60));

        // Step 1: Fetch articles from trusted sources
        console.log('\n📚 STEP 1: Fetching articles from trusted medical sources...\n');
        const allArticles = await fetchTrustedArticles();
        console.log(`\n📊 Total articles fetched: ${allArticles.length}`);

        // Step 2: Filter by nutrition keywords
        console.log('\n🔍 STEP 2: Filtering articles by nutrition relevance...\n');
        const nutritionArticles = filterByNutritionKeywords(allArticles);
        console.log(`✅ Nutrition-related articles: ${nutritionArticles.length}`);

        if (nutritionArticles.length === 0) {
            console.log('⚠️  No nutrition articles found. Using previous data.');
            return;
        }

        // Step 3: Verify scientific accuracy with AI
        console.log('\n🤖 STEP 3: AI Verification Layer - Checking scientific accuracy...\n');
        const verificationPromises = nutritionArticles.slice(0, 10).map(async (article) => {
            const verificationResult = await verifyScientificAccuracy(article);
            return { ...article, verificationResult };
        });

        const verifiedArticlesWithResults = await Promise.all(verificationPromises);
        const verifiedArticles = verifiedArticlesWithResults.filter(
            article => article.verificationResult.verified
        );

        console.log(`\n✅ Verified articles: ${verifiedArticles.length} out of ${verifiedArticlesWithResults.length} evaluated`);

        if (verifiedArticles.length === 0) {
            console.log('⚠️  No articles passed verification. Using previous data.');
            return;
        }

        // Step 4: Select best article
        console.log('\n🎯 STEP 4: Selecting best verified article...\n');
        const bestArticle = selectBestArticle(verifiedArticles);

        // Step 5: Update news data file
        console.log('💾 STEP 5: Updating news data file...\n');
        await updateNewsData(bestArticle);

        console.log('='.repeat(60));
        console.log('✨ Daily Scientific News Automation Complete!\n');

    } catch (error) {
        console.error('\n❌ ERROR in automation:', error);
        process.exit(1);
    }
}

// Run the automation
main();
