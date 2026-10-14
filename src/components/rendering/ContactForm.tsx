import { useState, type ChangeEvent, type SubmitEvent } from "react"
import type { FormData, Errors } from "../../types/types"

const initialForm: FormData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
}

const ContactForm = () => {
    const [form, setForm] = useState<FormData>(initialForm)
    const [errors, setErrors] = useState<Errors>({})
    const [sent, setSent] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form,[e.target.name]: e.target.value
        })
    };

    const validateForm = () => {
        const newErrors: Errors = {};

        if (!form.name.trim()) {newErrors.name = "Name is required";}
        if (!form.email.trim()) {newErrors.email = "Email is required";}
        if (!form.phone.trim()) {newErrors.phone = "Phone is required";}
        if (!form.subject.trim()) {newErrors.subject = "Subject is required";}
        if (!form.message.trim()) {newErrors.message = "Message is required";}

        return newErrors;
    }

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors = validateForm();
        setErrors(newErrors)

        if (Object.keys(newErrors).length > 0) {
            setSent(false)
            return
           
        }

        setSent(true)
        setForm(initialForm)

    }

    return (
         <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="rounded-lg border bg-white/15 px-3 py-2"
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="rounded-lg border bg-white/15 px-3 py-2"
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="phone">Phone</label>
                <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="rounded-lg border bg-white/15 px-3 py-2"
                />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="subject">Subject</label>
                <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="rounded-lg border bg-white/15 px-3 py-2"
                />
                {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="message">Message</label>
                <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="rounded-lg border bg-white/15 px-3 py-2"
                />
                {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
            </div>

            <button type="submit" className="w-fit rounded-lg px-5 py-2 bg-blue-600 text-white hover:bg-blue-700">
                Send
            </button>

            {sent && <p role="status">Thanks! Your message has been sent.</p>}
    </form>
  )
}

export default ContactForm;