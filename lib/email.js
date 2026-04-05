import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Generate 6-digit OTP
export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Send OTP email
export const sendOTPEmail = async (email, otp) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",  // Resend ka default sender
          to: ['qandeel.faryad@gmail.com'],
      subject: "Your OTP for Login - HOORAB GROUP",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #00e6ff, #139aff); padding: 30px; text-align: center;">
            <h2 style="color: white; margin: 0;">HOORAB GROUP</h2>
          </div>
          <div style="background: white; padding: 30px; border: 1px solid #ddd;">
            <h3>Email Verification</h3>
            <p>Your OTP code is:</p>
            <div style="font-size: 32px; font-weight: bold; text-align: center; padding: 20px; background: #f5f5f5;">
              ${otp}
            </div>
            <p>This OTP is valid for 10 minutes.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error("Email error:", error);
    return false;
  }
};