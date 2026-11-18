# My Portfolio Website

A responsive, single-page personal portfolio built with **HTML5, CSS3 and vanilla JavaScript (DOM)**.
Made for the *Web and Desktop Programming Lab* at **Daffodil International University**.

🔗 **Live site:** [https://nazim122970.github.io/]

---

## Features

- **Glass-door intro:** an animated glass door opens by itself every time the site loads
- **Fixed top menu** with smooth scrolling to Home, About Me, News, Skills, Education, Certificates, Projects and Contact
- **News section:** my recent achievements and completed work, with filter buttons and a "NEW" badge
- **Skills:** animated progress rings and a moving technology-capsule row
- **GitHub integration:** repository cards and a contribution grid loaded from my public GitHub profile
- **Certificates:** click a certificate to view it larger in a pop-up
- **Resume:** view in a pop-up and download as PDF
- **Contact:** logo buttons for Gmail, Phone, GitHub, LinkedIn, Facebook, WhatsApp and Telegram, plus a contact form that delivers messages to my Gmail through Web3Forms
- **Dark / Light mode** and a colour-theme picker
- **Search box** that jumps to a section
- **Chat assistant** that answers questions only about me
- **Interactive avatar** whose eyes follow the mouse
- **Background music** that stays off until the 🔊 button is pressed
- **Responsive layout** for desktop, tablet and mobile
- **Accessibility and SEO basics:** semantic HTML, alt text, ARIA labels, skip link and meta tags

## Built With

| Technology | Used for |
|---|---|
| HTML5 | Page structure and semantic tags (`header`, `nav`, `main`, `section`, `article`, `figure`, `aside`, `address`, `footer`) |
| CSS3 | Box model, flexbox and grid, positioning, transitions, animations, opacity, box-shadow, text-shadow, hover effects, media queries |
| JavaScript | DOM manipulation, events, IntersectionObserver, `fetch` for GitHub and form data |

No frameworks or libraries are used. Only Google Fonts is loaded for typography.

## Project Structure

```
My-Portfolio/
├── index.html     # page structure
├── style.css      # all styling
├── script.js      # all behaviour
├── data.js        # all personal information
├── resume.pdf     # my resume
├── images/        # profile photo and certificate images

```

## How to Run

1. Download or clone this repository
2. Open `index.html` in a browser, or use the VS Code **Live Server** extension
3. Keep all files together in the same folder

## How to Customise

All personal information is stored in **`data.js`**, so the other files do not need editing:

- name, university, about text and photo
- contact details and social links
- skills, technologies, education and certificates
- news items, interests and languages
- resume path and the contact-form key

Save the file and refresh the browser to see the changes.

## Contact Form Setup

The contact form uses the free [Web3Forms](https://web3forms.com) service.

1. Create an Access Key on web3forms.com with your email address
2. Paste it into `data.js` as `formKey:'your-key'`
3. Send a test message from the form and check your inbox (and Spam folder)

If `formKey` is empty, the form opens the visitor's email app instead of sending directly.

## Notes

- Repository cards and the contribution grid load from public GitHub data and need an internet connection. If they cannot load, a saved copy from `data.js` is shown.
- The contribution count may differ slightly from the number on my GitHub profile.
- Background music never plays automatically.

## Author

**Nazim**
Daffodil International University
GitHub: [@nazim122970](https://github.com/nazim122970)

## License

Made for educational purposes.
