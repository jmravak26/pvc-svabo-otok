import { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  lang: 'hr' | 'en';
}

const translations = {
  hr: {
    title: 'Pošaljite Upit',
    subtitle: 'Javite nam se - odgovaramo u najkraćem mogućem roku.',
    name: 'Ime i prezime',
    email: 'Email adresa',
    message: 'Poruka',
    messagePlaceholder: 'Opišite što vam treba...',
    send: 'Pošalji upit',
    success: 'Hvala! Vaš upit je poslan.',
  },
  en: {
    title: 'Send an Enquiry',
    subtitle: 'Get in touch - we reply in the shortest possible time.',
    name: 'Full name',
    email: 'Email address',
    message: 'Message',
    messagePlaceholder: 'Describe what you need...',
    send: 'Send enquiry',
    success: 'Thank you! Your enquiry has been sent.',
  },
};

function ContactForm({ lang }: ContactFormProps) {
  const t = translations[lang];
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Upit - ${form.name}`);
    const body = encodeURIComponent(`Ime: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:jmravak26@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
  };

  const field = 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-yellow transition-colors text-sm';

  return (
    <section id="contact-form" className="py-24 bg-amber-50">
      <div className="px-5 max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-1 bg-yellow rounded-full" />
          <h2 className="text-4xl font-bold">{t.title}</h2>
        </div>
        <p className="text-gray-500 mb-10 ml-16">{t.subtitle}</p>

        {sent ? (
          <div className="text-center py-12 text-green-600 font-semibold text-lg">{t.success}</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              type="text"
              placeholder={t.name}
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className={field}
            />
            <input
              required
              type="email"
              placeholder={t.email}
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              className={field}
            />
            <textarea
              required
              rows={5}
              placeholder={t.messagePlaceholder}
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              className={`${field} resize-none`}
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-yellow hover:text-black transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              {t.send}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
