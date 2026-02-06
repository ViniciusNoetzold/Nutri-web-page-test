# EmailJS Setup Guide - Contact & Auto-Reply System

Complete step-by-step guide to configure EmailJS for the Dr. Sarah Green nutritionist website contact form with automatic reply functionality.

## 📋 Table of Contents
1. [Create EmailJS Account](#step-1-create-emailjs-account)
2. [Connect Email Service](#step-2-connect-email-service)
3. [Create Email Templates](#step-3-create-email-templates)
4. [Configure Environment Variables](#step-4-configure-environment-variables)
5. [Test the Integration](#step-5-test-the-integration)
6. [Troubleshooting](#troubleshooting)

---

## Step 1: Create EmailJS Account

### 1.1 Sign Up
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (top right)
3. Create account using:
   - Email address
   - OR Google account
   - OR GitHub account
4. Verify your email address

### 1.2 Dashboard Overview
After login, you'll see:
- **Email Services** - Connect Gmail, Outlook, etc.
- **Email Templates** - Create message templates
- **Account** - Get your Public Key
- **Usage** - Free tier: 200 emails/month

---

## Step 2: Connect Email Service

### 2.1 Add Email Service
1. Click **"Email Services"** in left sidebar
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for ease)
   - Outlook/Office 365
   - Yahoo
   - Custom SMTP
4. Click **"Connect Account"**

### 2.2 Configure Gmail (Recommended)
1. Select **Gmail**
2. Click **"Connect Account"**
3. Sign in with your Gmail account (e.g., `hello@drsarahgreen.com`)
4. Grant permissions when prompted
5. Service ID will be generated (e.g., `service_abc123`)
6. **Save this Service ID** - you'll need it later

**Important Gmail Setup:**
- Use a professional email (not personal)
- Enable 2-Factor Authentication on Gmail
- If using Google Workspace, ensure SMTP is enabled

### 2.3 Verify Connection
- Status should show **"Connected"** with green checkmark
- Test by clicking **"Send Test Email"**

---

## Step 3: Create Email Templates

You need **TWO templates**:
1. **Template 1:** Email to nutritionist (when client submits form)
2. **Template 2:** Auto-reply to client (with scheduling link)

### 3.1 Create Template 1: Notification to Nutritionist

#### A. Create Template
1. Click **"Email Templates"** in left sidebar
2. Click **"Create New Template"**
3. Template Name: `new_client_inquiry`

#### B. Configure Settings
- **To Email:** `{{to_email}}` (you'll set default to nutritionist email)
- **From Name:** `Dr. Sarah Green Website`
- **From Email:** (leave as default - uses connected service)
- **Subject:** `New Client Inquiry from {{from_name}}`
- **Reply To:** `{{from_email}}`

#### C. Email Content (HTML)
Paste this into the **Content** tab:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #8BA888 0%, #6d8d6b 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; }
    .content { background: #f8f9fa; padding: 25px; border-radius: 8px; margin: 20px 0; }
    .field { margin-bottom: 15px; }
    .field strong { color: #8BA888; display: inline-block; width: 120px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">🌿 New Client Inquiry</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Dr. Sarah Green Nutrition</p>
    </div>
    
    <div class="content">
      <h2 style="color: #334155; margin-top: 0;">Contact Details</h2>
      
      <div class="field">
        <strong>Name:</strong> {{from_name}}
      </div>
      
      <div class="field">
        <strong>Email:</strong> <a href="mailto:{{from_email}}" style="color: #8BA888;">{{from_email}}</a>
      </div>
      
      <div class="field">
        <strong>Phone:</strong> {{phone}}
      </div>
      
      <div class="field">
        <strong>Health Goal:</strong> {{health_goal}}
      </div>
      
      <div class="field">
        <strong>Submitted:</strong> {{timestamp}}
      </div>
    </div>
    
    <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; border-left: 4px solid #8BA888;">
      <p style="margin: 0; color: #334155;">
        <strong>✅ Auto-reply sent:</strong> Client has received an email with the Calendly scheduling link.
      </p>
    </div>
    
    <div class="footer">
      <p>This email was sent from the Dr. Sarah Green Nutrition website contact form.</p>
    </div>
  </div>
</body>
</html>
```

#### D. Template Variables
Click **"Test"** tab and add sample values:
```
from_name: John Doe
from_email: john@example.com
phone: (555) 123-4567
health_goal: Weight Management
timestamp: 2026-02-05 3:00 PM
to_email: hello@drsarahgreen.com
```

#### E. Set Default "To Email"
In the **Settings** tab:
- **Default "To Email":** `hello@drsarahgreen.com` (nutritionist's email)

#### F. Save Template
- Click **"Save"**
- Template ID will be generated (e.g., `template_xyz789`)
- **Save this Template ID**

---

### 3.2 Create Template 2: Auto-Reply to Client

#### A. Create Template
1. Click **"Email Templates"** again
2. Click **"Create New Template"**
3. Template Name: `client_autoreply`

#### B. Configure Settings
- **To Email:** `{{from_email}}` (client's email from form)
- **From Name:** `Dr. Sarah Green`
- **From Email:** (leave as default)
- **Subject:** `Thank You for Reaching Out - Schedule Your Intro Call 📅`
- **Reply To:** `hello@drsarahgreen.com`

#### C. Email Content (HTML)
Paste this beautiful auto-reply template:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f5f5f5; }
    .container { max-width: 600px; margin: 0 auto; background: white; }
    .header { background: linear-gradient(135deg, #8BA888 0%, #6d8d6b 100%); color: white; padding: 40px 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 28px; }
    .header p { margin: 8px 0 0 0; opacity: 0.95; font-size: 14px; }
    .content { padding: 40px 30px; }
    .content h2 { color: #334155; font-size: 22px; margin-bottom: 10px; }
    .content p { color: #475569; font-size: 16px; line-height: 1.7; }
    .highlight { color: #8BA888; font-weight: 600; }
    .cta-button { display: inline-block; background: #8BA888; color: white !important; padding: 16px 40px; text-decoration: none; border-radius: 50px; font-weight: 600; font-size: 16px; margin: 20px 0; box-shadow: 0 4px 15px rgba(139, 168, 136, 0.3); }
    .cta-button:hover { background: #6d8d6b; }
    .cta-container { text-align: center; margin: 30px 0; }
    .info-box { background: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 4px solid #8BA888; margin: 25px 0; }
    .footer { background: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #e2e8f0; }
    .footer p { margin: 5px 0; color: #64748b; font-size: 13px; }
    .footer strong { color: #334155; }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>🌿 Dr. Sarah Green</h1>
      <p>Certified Nutritionist & Wellness Expert</p>
    </div>
    
    <!-- Main Content -->
    <div class="content">
      <h2>Hello {{from_name}},</h2>
      
      <p>
        Thank you for reaching out! I'm excited to support you on your journey 
        to <span class="highlight">{{health_goal}}</span>.
      </p>
      
      <p>
        Our team is reviewing your details. The next step is to schedule a 
        <strong>complimentary 15-minute intro call</strong> where we'll:
      </p>
      
      <ul style="color: #475569; font-size: 16px; line-height: 1.8;">
        <li>Discuss your specific health goals</li>
        <li>Answer any questions you have</li>
        <li>Determine if we're the right fit</li>
        <li>Explain our personalized approach</li>
      </ul>
      
      <!-- Call to Action -->
      <div class="cta-container">
        <a href="{{calendly_link}}" class="cta-button">
          📅 Schedule Your Intro Call Now
        </a>
      </div>
      
      <!-- Info Box -->
      <div class="info-box">
        <p style="margin: 0; color: #334155;">
          <strong>📞 Prefer to talk first?</strong><br>
          Feel free to call us at <strong>(555) 123-4567</strong> (Mon-Fri, 9am-6pm PT) 
          or reply directly to this email.
        </p>
      </div>
      
      <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
        Looking forward to connecting with you soon!
      </p>
      
      <p style="color: #334155; font-weight: 600; margin-top: 20px;">
        Warmly,<br>
        Dr. Sarah Green
      </p>
    </div>
    
    <!-- Footer -->
    <div class="footer">
      <p><strong>Dr. Sarah Green Nutrition</strong></p>
      <p>123 Wellness Avenue, San Francisco, CA 94102</p>
      <p>📧 hello@drsarahgreen.com | 📞 (555) 123-4567</p>
      <p style="margin-top: 15px; font-size: 11px; color: #94a3b8;">
        You received this email because you submitted an inquiry on our website.
      </p>
    </div>
  </div>
</body>
</html>
```

#### D. Template Variables
Click **"Test"** tab and add sample values:
```
from_name: John Doe
from_email: john@example.com
health_goal: Weight Management
calendly_link: https://calendly.com/dr-sarah-green/intro-call
```

#### E. Send Test Email
- Click **"Test It"** button
- Send to your own email to preview
- Check formatting, links, and styling

#### F. Save Template
- Click **"Save"**
- Template ID will be generated (e.g., `template_abc456`)
- **Save this Template ID**

---

## Step 4: Configure Environment Variables

### 4.1 Get Your Public Key
1. Click **"Account"** in EmailJS dashboard
2. Find **"Public Key"** section
3. Copy your public key (e.g., `AbCd123EfG456`)

### 4.2 Gather All IDs
You should now have:
- ✅ **Service ID** (from Step 2): `service_abc123`
- ✅ **Template ID** (nutritionist, from Step 3.1): `template_xyz789`
- ✅ **Auto-Reply Template ID** (from Step 3.2): `template_abc456`
- ✅ **Public Key** (from Step 4.1): `AbCd123EfG456`

### 4.3 Create .env File
In your project root, create a `.env` file:

```bash
# Copy from example
cp .env.example .env
```

### 4.4 Add EmailJS Configuration
Edit `.env` and add your actual values:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_abc456
VITE_EMAILJS_PUBLIC_KEY=AbCd123EfG456
VITE_CALENDLY_LINK=https://calendly.com/dr-sarah-green/intro-call
```

**Replace with your actual IDs!**

### 4.5 Setup Calendly Link (Optional)
1. Create account at [https://calendly.com](https://calendly.com)
2. Create an "Intro Call" event type (15 minutes)
3. Copy your Calendly link
4. Paste into `VITE_CALENDLY_LINK` in `.env`

---

## Step 5: Test the Integration

### 5.1 Restart Dev Server
```bash
# Stop current server (Ctrl+C)
npm run dev
```

Environment variables are loaded on server start.

### 5.2 Test Form Submission
1. Open [http://localhost:5173/](http://localhost:5173/)
2. Scroll to "Contact Us" section
3. Fill out the form with real data:
   - Use your actual email (to receive auto-reply)
   - Fill all required fields
   - Select a health goal
4. Click **"Send Message"**

### 5.3 Verify Success
**✅ Success indicators:**
- Loading spinner appears
- Form disappears
- Success card shows:
  - Green checkmark
  - "Message Sent Successfully!"
  - "Check your email" notice

### 5.4 Check Emails

**Email 1: Nutritionist receives inquiry**
- To: `hello@drsarahgreen.com`
- Subject: "New Client Inquiry from [Your Name]"
- Contains: Name, email, phone, health goal, timestamp
- Status: "Auto-reply sent" confirmation

**Email 2: User receives auto-reply**
- To: Your email (that you entered in form)
- Subject: "Thank You for Reaching Out - Schedule Your Intro Call 📅"
- Contains:
  - Personalized greeting with your name
  - Your selected health goal
  - "Schedule Your Intro Call" button linking to Calendly
  - Contact information

### 5.5 Test Calendly Link
- Click the **"Schedule Your Intro Call"** button in auto-reply email
- Should open Calendly scheduling page
- Verify you can select a time slot

---

## Step 6: Production Deployment

### 6.1 Add Environment Variables to Hosting
When deploying (Vercel, Netlify, etc.):

**Vercel:**
1. Dashboard → Project → Settings → Environment Variables
2. Add all `VITE_EMAILJS_*` variables
3. Redeploy

**Netlify:**
1. Site Settings → Build & deploy → Environment
2. Add all `VITE_EMAILJS_*` variables
3. Redeploy

### 6.2 Update EmailJS Plan (if needed)
Free tier: 200 emails/month
- If expecting high traffic, consider upgrading
- Paid plans start at $7/month for 1,000 emails

---

## 🔍 Troubleshooting

### "EmailJS is not configured" Error

**Cause:** Environment variables not set

**Fix:**
1. Verify `.env` file exists in project root
2. Check all variables start with `VITE_`
3. Restart dev server: `npm run dev`
4. Clear browser cache

### Emails Not Sending

**Check:**
1. EmailJS account is not suspended
2. Email service is still connected (green status)
3. Monthly quota not exceeded (200 emails/month free)
4. Internet connection is stable
5. Check browser console for errors

### Auto-Reply Not Received

**Check:**
1. Spam/junk folder
2. Auto-reply template ID is correct in `.env`
3. Template `To Email` is set to `{{from_email}}`
4. Email service has permission to send emails

### Calendly Link Not Working

**Fix:**
1. Verify Calendly link starts with `https://`
2. Check link is public (not password protected)
3. Ensure event type is active

### Form Validation Errors

**Common issues:**
- Email format invalid (must contain @ and .)
- Name too short (minimum 2 characters)
- Phone too short (minimum 10 digits)
- Health goal not selected

---

## 📊 Email Quota Management

**Free Tier Limits:**
- 200 emails/month
- Each form submission = 2 emails (nutritionist + auto-reply)
- Max 100 submissions/month on free tier

**Monitor Usage:**
1. EmailJS Dashboard → **"Usage"**
2. View monthly sends
3. Set up alerts for 80% usage

**Upgrade if Needed:**
- Personal: $7/month (1,000 emails)
- Professional: $15/month (unlimited emails)

---

## 🎯 Best Practices

### Security
- ✅ Never commit `.env` file to Git
- ✅ Add `.env` to `.gitignore`
- ✅ Use different EmailJS accounts for dev/production
- ✅ Rotate public key if exposed

### Email Deliverability
- ✅ Use professional email domain (not Gmail personal)
- ✅ Verify DKIM and SPF records
- ✅ Keep email content text-to-HTML ratio balanced
- ✅ Avoid spam trigger words

### User Experience
- ✅ Success message auto-hides after 8 seconds
- ✅ Error messages are specific and helpful
- ✅ Form resets after successful submission
- ✅ Loading spinner prevents duplicate submissions

---

## 📝 Template Customization

### Modify Auto-Reply Content
1. Go to EmailJS Dashboard → Email Templates
2. Click on `client_autoreply`
3. Edit HTML content
4. Update:
   - Branding colors
   - Contact information
   - Scheduling link
   - Email copy
5. Test and Save

### Add More Variables
In your Contact.jsx, add to `templateParams`:
```javascript
message: formData.message,
company: formData.company,
```

Then use in template: `{{message}}`, `{{company}}`

---

## ✅ Success Checklist

Before going live, verify:
- [ ] EmailJS account created and email service connected
- [ ] Both templates created and tested
- [ ] All environment variables configured
- [ ] Form submission working in development
- [ ] Both emails received (nutritionist + auto-reply)
- [ ] Calendly link opens correctly
- [ ] Emails not going to spam
- [ ] Success/error states working
- [ ] Form validation working
- [ ] Mobile responsive design tested
- [ ] Environment variables added to production hosting

---

## 🚀 Going Live

Once everything is tested:
1. Add environment variables to production hosting
2. Deploy website
3. Test with real submission from live site
4. Monitor EmailJS usage dashboard
5. Set up email forwarding rules if needed

---

## 📞 Support

**EmailJS Support:**
- Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Community: [https://www.emailjs.com/forum/](https://www.emailjs.com/forum/)

**Calendly Support:**
- Help Center: [https://help.calendly.com/](https://help.calendly.com/)

---

**🎉 Congratulations!** Your Contact & Auto-Reply System is now fully configured. Clients will now receive instant scheduling links when they contact you!
