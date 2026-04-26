import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, lang } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.CONTACT_EMAIL || "contacto@rodrigoescobargil.com";

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "rodrigoescobargil.com <noreply@rodrigoescobargil.com>",
        to: [TO_EMAIL],
        reply_to: email,
        subject: `[Contacto Web${lang === "en" ? " EN" : ""}] ${subject}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; color: #1a1a1a;">
            <h2 style="font-size: 20px; font-weight: 600; border-bottom: 1px solid #e0d9c8; padding-bottom: 12px; margin-bottom: 20px;">
              Nuevo mensaje desde rodrigoescobargil.com
            </h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px 0; color: #666; width: 100px;">Nombre:</td><td style="padding: 8px 0;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Correo:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #c9a84c;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666;">Asunto:</td><td style="padding: 8px 0;">${subject}</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background: #f9f7f4; border-left: 3px solid #c9a84c;">
              <p style="font-size: 14px; line-height: 1.7; color: #333; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="font-size: 11px; color: #999; margin-top: 24px; border-top: 1px solid #e8e4dc; padding-top: 12px;">
              Enviado desde rodrigoescobargil.com · Idioma: ${lang === "en" ? "English" : "Español"}
            </p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend error:", errorData);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
