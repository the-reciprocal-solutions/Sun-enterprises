import axios from "axios";
import { encryptPayload } from "../lib/encryption";
import { companyInfo } from "../data/mock";

const MAIL_ENDPOINT =
  "https://mail.service.thereciprocalsolutions.com/v1/mail/send";

function buildAdminHtml(form) {
  const {
    name,
    email,
    phone,
    company,
    vehicleType,
    serviceType,
    message,
  } = form;

  return `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
      <h2 style="color: #0ea5e9; text-align: center; margin-bottom: 12px;">
        New Contact / Quote Request
      </h2>
      <p style="text-align: center; color: #0f172a;">A new enquiry has been submitted.</p>
      <table width="100%" cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse; background-color: #f8fafc; border-radius: 8px; margin: 16px 0;">
        <thead>
          <tr>
            <th colspan="2" style="text-align: left; background-color: #e2e8f0; padding: 12px; font-size: 15px; color: #0f172a;">
              Customer Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="font-weight: bold;">Name</td><td>${name || "-"}</td></tr>
          <tr><td style="font-weight: bold;">Email</td><td>${email || "-"}</td></tr>
          <tr><td style="font-weight: bold;">Phone</td><td>${phone || "-"}</td></tr>
          <tr><td style="font-weight: bold;">Company</td><td>${company || "-"}</td></tr>
          <tr><td style="font-weight: bold;">Vehicle Type</td><td>${vehicleType || "-"}</td></tr>
          <tr><td style="font-weight: bold;">Service Type</td><td>${serviceType || "-"}</td></tr>
          <tr><td style="font-weight: bold;">Message</td><td>${message || "-"}</td></tr>
        </tbody>
      </table>
      <table width="100%" cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse; background-color: #e0f2fe; border-radius: 8px;">
        <thead>
          <tr>
            <th colspan="2" style="text-align: left; background-color: #bae6fd; padding: 12px; font-size: 15px; color: #0f172a;">
              Company Information
            </th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="font-weight: bold;">Company</td><td>${companyInfo.name}</td></tr>
          <tr><td style="font-weight: bold;">Phone</td><td>${companyInfo.mobile?.[0] || companyInfo.landline}</td></tr>
          <tr><td style="font-weight: bold;">Email</td><td>${companyInfo.email}</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

function buildUserHtml(form) {
  const { name, serviceType } = form;
  return `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
      <h2 style="color: #0ea5e9; text-align: center; margin-bottom: 12px;">
        Thanks for contacting ${companyInfo.name}
      </h2>
      <p style="color: #0f172a; line-height: 1.6;">
        Hi ${name || "there"},<br/>
        We received your enquiry${serviceType ? ` about ${serviceType}` : ""}. Our team will reach out shortly.
      </p>
      <p style="color: #0f172a; line-height: 1.6; margin-top: 8px;">
        If you need immediate assistance, call us at ${
          companyInfo.mobile?.[0] || companyInfo.landline
        }.
      </p>
      <p style="margin-top: 16px; color: #0f172a;">Regards,<br/>${companyInfo.name}</p>
    </div>
  `;
}

export async function sendContactEmail(form) {
  const adminTemplate = {
    from: companyInfo.email,
    to: companyInfo.email,
    replyTo: form.email,
    subject: `New Contact Form Submission from ${form.name || "Visitor"}`,
    html: buildAdminHtml(form),
  };

  const userTemplate = {
    from: companyInfo.email,
    to: form.email,
    subject: `Thanks for reaching out to ${companyInfo.name}`,
    html: buildUserHtml(form),
  };

  const payload = await encryptPayload({
    templates: [adminTemplate, userTemplate],
    data: {
      name: form.name,
      email: form.email,
      phone: form.phone,
      service: "Contact Enquiry",
    },
  });

  const response = await axios.post(MAIL_ENDPOINT, { payload });
  return response.data;
}

