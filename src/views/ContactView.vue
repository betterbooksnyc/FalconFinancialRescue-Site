<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const EMAILJS_PUBLIC_KEY = 'PVi4ddPEV3QMgrehm';
const EMAILJS_SERVICE_ID = 'service_vt8jqz7';
const EMAILJS_TEMPLATE_ID = 'template_zan1h0l';

const form = ref({ name: '', email: '', phone: '', service: '', message: '' });
const status = ref('idle');
const statusMessage = ref('');

async function submitForm() {
  status.value = 'submitting';
  statusMessage.value = '';

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: form.value.name,
        from_email: form.value.email,
        reply_to: form.value.email,
        phone: form.value.phone || 'Not provided',
        service: form.value.service || 'Not specified',
        message: form.value.message
      },
      { publicKey: EMAILJS_PUBLIC_KEY }
    );

    form.value = { name: '', email: '', phone: '', service: '', message: '' };
    status.value = 'success';
    statusMessage.value = 'Thank you. Your request has been sent.';
  } catch (error) {
    status.value = 'error';
    statusMessage.value = 'Your message could not be sent. Please call (917) 674-3969.';
  }
}
</script>

<template>
  <section class="page-view">
    <p class="eyebrow">Contact & Directions</p>
    <h1>Book a consultation.</h1>
    <p>Call or send a request to discuss tax preparation, bookkeeping, payroll, or an IRS or New York State notice.</p>

    <div class="contact-layout">
      <div class="content-card contact-details">
        <h2>Falcon Rescue LLC</h2>
        <p><strong>Phone:</strong> <a href="tel:9176743969">(917) 674-3969</a></p>
        <p><strong>Address:</strong> 187-15 Jordan Ave, Saint Albans, NY 11412</p>
        <p><strong>Appointments:</strong> In person or remote</p>
      </div>

      <form class="content-card contact-form" @submit.prevent="submitForm">
        <div class="form-field">
          <label for="name">Name <span aria-hidden="true">*</span></label>
          <input id="name" v-model="form.name" name="name" type="text" autocomplete="name" required />
        </div>

        <div class="form-field">
          <label for="email">Email <span aria-hidden="true">*</span></label>
          <input id="email" v-model="form.email" name="email" type="email" autocomplete="email" required />
        </div>

        <div class="form-field">
          <label for="phone">Phone</label>
          <input id="phone" v-model="form.phone" name="phone" type="tel" autocomplete="tel" />
        </div>

        <div class="form-field">
          <label for="service">I am interested in</label>
          <select id="service" v-model="form.service" name="service">
            <option value="">Select a service</option>
            <option>Individual tax return</option>
            <option>Business tax return</option>
            <option>Bookkeeping</option>
            <option>Payroll</option>
            <option>NYC Unincorporated Business Tax</option>
            <option>IRS or New York State notice</option>
            <option>Other</option>
          </select>
        </div>

        <div class="form-field">
          <label for="message">Message <span aria-hidden="true">*</span></label>
          <textarea id="message" v-model="form.message" name="message" rows="6" required></textarea>
        </div>

        <button class="btn primary form-submit" type="submit" :disabled="status === 'submitting'">
          {{ status === 'submitting' ? 'Sending...' : 'Send Request' }}
        </button>

        <p v-if="statusMessage" class="form-status" :data-status="status" role="status">
          {{ statusMessage }}
        </p>
      </form>
    </div>
  </section>
</template>
