import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message }: ContactForm = await req.json();

    // Validation des champs
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Vérification de la clé API Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json(
        {
          error: "EMAIL_NOT_CONFIGURED",
          message: "Resend API key is not configured. Please set RESEND_API_KEY in your environment.",
        },
        { status: 503 }
      );
    }

    // Initialisation de Resend
    const resend = new Resend(resendApiKey);

    // Email destinataire
    const to = process.env.CONTACT_TO || "hamzabraik02@gmail.com";

    // Envoi de l'email avec Resend
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [to],
      subject: `[Portfolio] ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #e5e7eb;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 1px solid #e5e7eb;" />
          <h3 style="color: #374151;">Message:</h3>
          <p style="background: #f9fafb; padding: 15px; border-radius: 8px;">${message.replace(/\n/g, '<br>')}</p>
          <hr style="border: 1px solid #e5e7eb;" />
          <p style="color: #6b7280; font-size: 12px;">This email was sent from your portfolio contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "SEND_FAILED", message: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Contact form send error", error);
    const message = error instanceof Error ? error.message : "Failed to send message";
    return NextResponse.json({ error: "SEND_FAILED", message }, { status: 500 });
  }
}
