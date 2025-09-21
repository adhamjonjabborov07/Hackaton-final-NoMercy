import React, { useState, useEffect } from 'react';
import './signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Telegram bot sozlamalari
  const BOT_TOKEN = '8269426136:AAGu5VL4ONG4MpDZBv8PHK6Oy5fXjEig5mc'; // Xavfsizlik uchun serverda saqlash yaxshiroq
  const YOUR_CHAT_ID = 'YOUR_CHAT_ID'; // Bu yerga o'z chat_id ni qo'ying (masalan, o'zingizni Telegram ID)
  const ADMIN_CHAT_ID = YOUR_CHAT_ID; // Shu yerda ham foydalanamiz

  // Foydalanuvchi holati uchun state (demo uchun)
  const [userChatId, setUserChatId] = useState(null);
  const [lastMessageId, setLastMessageId] = useState(0);

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Telegram orqali xabar yuborish yordamchi funksiyasi
  const sendTelegramMessage = async (chat_id, text, options = {}) => {
    try {
      // MUHIM: 'bot' va TOKEN o'rtasida bo'sh joy yo'q
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chat_id,
          text: text,
          parse_mode: 'Markdown',
          ...options
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Telegram API Xatolik:', errorData);
        
        // 404, 503 yoki boshqa "xizmat mavjud emas" kodlari uchun maxsus xabar
        if (response.status === 404 || response.status === 503 || response.status >= 500) {
           alert('❌ Xatolik: Internet bog\'lanishida muammo yuz berdi yoki Telegram xizmati mavjud emas. Iltimos, internet aloqangizni tekshiring.');
        } else {
           alert(`❌ Telegramga xabar yuborishda xatolik yuz berdi: ${errorData.description || 'Noma\'lum xatolik'}`);
        }
        throw new Error(`Telegram API Xatolik: ${errorData.description}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Xabar yuborishda xatolik:', error);
      
      // Fetch xatosi (masalan, internet uzilgan) uchun maxsus xabar
      if (error instanceof TypeError && error.message.includes('fetch')) {
         alert('❌ Xatolik: Internet bog\'lanishida muammo yuz berdi. Iltimos, internet aloqangizni tekshiring.');
      } else {
         alert('❌ Telegramga xabar yuborishda xatolik yuz berdi. Batafsil: ' + error.message);
      }
    }
  };

  // Foydalanuvchi ma'lumotlarini formatlash
  const formatUserInfo = (data) => {
    return `
🔔 *Yangi Ro'yxatdan O'tish*

👤 *To'liq Ism:* ${data.fullName}
📧 *Email:* ${data.email}
🔑 *Parol:* ||${data.password}|| 
⏰ *Vaqt:* ${new Date().toLocaleString('uz-UZ')}
    `;
  };

  // Foydalanuvchi ma'lumotlarini Telegramga yuborish
  const sendUserInfoToTelegram = async (userInfo) => {
    const message = formatUserInfo(userInfo);
    await sendTelegramMessage(YOUR_CHAT_ID, message);
    // Admin ga ham xabar yuborish (agar boshqa bo'lsa)
    if (ADMIN_CHAT_ID && ADMIN_CHAT_ID !== YOUR_CHAT_ID) {
        await sendTelegramMessage(ADMIN_CHAT_ID, message);
    }
  };

  // Telegram xabarlarini qayta ishlash
  const handleTelegramMessage = async (message) => {
    // Callback queryni ham xabar sifatida qayta ishlash
    if (message.callback_query) {
        message = { ...message.callback_query.message, from: message.callback_query.from, text: `/${message.callback_query.data}` };
    }

    const chatId = message.chat.id;
    const text = message.text;
    const userName = message.from.first_name || message.from.username || 'Foydalanuvchi';

    // Foydalanuvchi chat_id'sini saqlash (demo uchun)
    if (!userChatId) {
      setUserChatId(chatId);
    }

    if (text === '/start') {
      const welcomeMessage = `
Salom ${userName}! 👋

Sizning saytingizdan ro'yxatdan o'tish formasiga xush kelibsiz!

Formani to'ldirish uchun veb-saytga kiring.
      `;
      await sendTelegramMessage(chatId, welcomeMessage);
    }
    // /information buyrug'i uchun javob
    else if (text === '/information') {
        const infoMessage = `
🤖 *Bot Ma'lumotlari*

Bu bot veb-sayt orqali ro'yxatdan o'tish ma'lumotlarini qabul qiladi.

Buyruqlar:
/start - Boshlash
/information - Bot haqida ma'lumot
      `;
      await sendTelegramMessage(chatId, infoMessage);
    }
    else {
        // Noma'lum buyruq yoki xabar
        await sendTelegramMessage(chatId, "Men sizni tushunmayapman. Boshlash uchun /start tugmasini bosing.");
    }
  };

  // Yangi xabarlarni tekshirish (polling)
  useEffect(() => {
    let interval;
    if (BOT_TOKEN) {
      interval = setInterval(async () => {
        try {
          const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates?offset=${lastMessageId + 1}&timeout=30`);
          const data = await response.json();

          if (data.ok && data.result.length > 0) {
            for (const update of data.result) {
              setLastMessageId(update.update_id);
              if (update.message) {
                await handleTelegramMessage(update.message);
              } else if (update.callback_query) {
                 await handleTelegramMessage({callback_query: update.callback_query, message: update.callback_query.message, from: update.callback_query.from});
              }
            }
          }
        } catch (error) {
          console.error('Telegramdan xabarlarni olishda xatolik:', error);
        }
      }, 3000); // Har 3 sekundda tekshirish
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [BOT_TOKEN, lastMessageId, userChatId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      try {
        // Foydalanuvchi ma'lumotlarini Telegramga yuborish
        await sendUserInfoToTelegram(formData);

        // Muvaffaqiyatli ro'yxatdan o'tish
        alert('✅ Tabriklaymiz! Siz muvaffaqiyatli ro\'yxatdan o\'tdingiz. Ma\'lumotlaringiz Telegramga yuborildi.');

        // Formani tozalash
        setFormData({
          fullName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });

      } catch (error) {
        // Bu yerda asosiy xatolikni qayta ishlash logikasi
        // Agar sendUserInfoToTelegram ichida alert ko'rsatilmasa, bu yerda ham ko'rsatish mumkin
        // console.error('Xatolik:', error);
        // alert('❌ Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
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
              required
            />
            <label htmlFor="terms">
              I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
            </label>
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
          {/* Foydalanuvchilarga Telegramda /information buyrug'i haqida ma'lumot berish */}
          <p style={{fontSize: '0.8em', color: '#777', marginTop: '10px'}}>
              Telegram botimizdan foydalanish haqida ma'lumot olish uchun unga /information buyrug'ini yuboring.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;