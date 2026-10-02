# Email Setup Guide for Contact Form

## How to Receive Contact Form Messages in Your Gmail

Your contact form is now set up to send emails directly to **goyanshimohanty@gmail.com** using EmailJS service.

### Step 1: Create EmailJS Account (FREE)

1. Go to https://www.emailjs.com/
2. Click "Sign Up" (it's FREE)
3. Sign up with your Google account or email

### Step 2: Add Email Service

1. After login, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail"
4. Click "Connect Account" and authorize with your Gmail (goyanshimohanty@gmail.com)
5. Copy the **Service ID** (looks like: service_abc123)

### Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:**
```
New Contact Form Message: {{subject}}
```

**Content:**
```
You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template
5. Copy the **Template ID** (looks like: template_xyz789)

### Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (looks like: abc123XYZ)

### Step 5: Update Your Website

Open `portfolio/js/contact.js` and replace these lines (around line 42-44):

```javascript
const serviceID = 'service_YOUR_SERVICE_ID'; // Replace with your Service ID
const templateID = 'template_YOUR_TEMPLATE_ID'; // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

**Example:**
```javascript
const serviceID = 'service_abc123';
const templateID = 'template_xyz789';
const publicKey = 'abc123XYZ';
```

### Step 6: Test Your Form

1. Open your portfolio website
2. Go to Contact page
3. Fill out the form and submit
4. Check your Gmail inbox (goyanshimohanty@gmail.com)
5. You should receive the message!

## What's Fixed:

✅ **No more blank alerts** - Now shows proper success/error messages
✅ **Email delivery** - Messages sent directly to your Gmail
✅ **Professional design** - Success modal popup
✅ **Loading state** - Shows "Sending..." while processing
✅ **Form validation** - Checks all fields before sending
✅ **Auto-reset** - Form clears after successful submission

## Free Tier Limits:

- 200 emails per month (FREE)
- Perfect for portfolio contact forms
- No credit card required

## Troubleshooting:

**If emails don't arrive:**
1. Check your Gmail spam folder
2. Verify all IDs are correct in contact.js
3. Make sure EmailJS service is connected to your Gmail
4. Check browser console for errors (F12)

**Need Help?**
- EmailJS Documentation: https://www.emailjs.com/docs/
- Video Tutorial: Search "EmailJS setup tutorial" on YouTube

---

**That's it! Your contact form will now send emails directly to your Gmail!** 📧
