# EmailJS Contact Form Setup

The static site sends directly through the EmailJS browser SDK.

## Configured IDs
- Public key: `PVi4ddPEV3QMgrehm`
- Service ID: `service_vt8jqz7`
- Template ID: `template_zan1h0l`

## Recipient configuration
Set the recipient in the EmailJS template settings to:

- `betterbooksnyc@gmail.com`

Do not put this address in Vue source or a `mailto:` link.

## EmailJS template variables
Configure the EmailJS template to accept:

- `from_name`
- `from_email`
- `reply_to`
- `phone`
- `service`
- `message`

Set the reply-to field to `{{reply_to}}` and configure the subject in the EmailJS dashboard.

## Required EmailJS settings
- Add the production domain to EmailJS allowed origins.
- Add the sender service and verified sender address.
- Configure spam protection and rate limits.
- Test the template from the contact form.

## Privacy limitation
EmailJS public credentials are visible in browser code. The recipient, template subject, and template body should remain configured inside EmailJS; however, submitted fields and EmailJS identifiers can be inspected by a sufficiently technical visitor.
