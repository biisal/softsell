import { useState } from "react";
import type { FormEvent } from "react";
import GradientText from "../gradient-text";
import { TextReveal } from "../magicui/text-reveal";
import { Button } from "../ui/button";

export function ConnectForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
        captcha: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
        captcha: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (errors[name as keyof typeof errors]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
            isValid = false;
        }

        if (!formData.company.trim()) {
            newErrors.company = 'Company is required';
            isValid = false;
        }

        if (!formData.licenseType) {
            newErrors.licenseType = 'Please select a license type';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        if (formData.captcha !== '8') {
            newErrors.captcha = 'Incorrect answer';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            setFormData({
                name: '',
                email: '',
                company: '',
                licenseType: '',
                message: '',
                captcha: ''
            });
        }
    };

    return (
        <div className="w-full flex justify-center items-center flex-col">
            <TextReveal>
                Your unused licenses deserve a second life
            </TextReveal>
            <GradientText className="text-7xl font-bold">Let&apos;s Talk</GradientText>
            <form className="max-w-4xl w-full px-10 flex flex-col my-8" onSubmit={handleSubmit}>
                <div className="relative mb-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`border-green-400/40 border-b pt-4 pb-1 w-full bg-transparent text-xl outline-none focus:outline-none focus:border-green-400 transition-all duration-300 ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="What is your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`border-green-400/40 border-b pt-4 pb-1 bg-transparent text-xl outline-none focus:outline-none focus:border-green-400 transition-all duration-300 w-full ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="Your Email"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={`border-green-400/40 border-b pt-4 pb-1 bg-transparent text-xl outline-none focus:outline-none focus:border-green-400 transition-all duration-300 w-full ${errors.company ? 'border-red-500' : ''}`}
                            placeholder="Your Company"
                        />
                        {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                    </div>
                </div>

                <div className="relative mt-6">
                    <select
                        name="licenseType"
                        value={formData.licenseType}
                        onChange={handleChange}
                        className={`border-green-400/40 border-b pt-4 pb-1 bg-transparent text-xl outline-none focus:outline-none focus:border-green-400 transition-all duration-300 w-full ${errors.licenseType ? 'border-red-500' : ''}`}
                    >
                        <option value="" className="bg-gray-900">Select License Type</option>
                        <option value="standard" className="bg-gray-900">Standard</option>
                        <option value="professional" className="bg-gray-900">Professional</option>
                        <option value="enterprise" className="bg-gray-900">Enterprise</option>
                        <option value="other" className="bg-gray-900">Other</option>
                    </select>
                    {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
                </div>

                <div className="relative">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full border-green-400/40 border-y mt-16 pt-4 pb-1 bg-transparent text-xl outline-none focus:outline-none focus:border-b-green-400 resize-none ${errors.message ? 'border-red-500' : ''}`}
                        rows={4}
                        placeholder="Your Message"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="flex justify-center items-center mt-4 relative">
                    <p className="p-2 px-4 rounded-sm bg-green-400 text-black">5</p>
                    <span className="text-2xl mx-2">+</span>
                    <p className="p-2 px-4 rounded-sm bg-green-400 text-black">3</p>
                    <span className="text-2xl mx-2">=</span>
                    <input
                        type="text"
                        name="captcha"
                        value={formData.captcha}
                        onChange={handleChange}
                        placeholder='?'
                        className={`bg-green-400 outline-none focus:outline-none p-2 rounded-sm text-black w-12 ${errors.captcha ? 'border-red-500 border-2' : ''}`}
                    />
                    <span className="md:text-xl text-sm ml-2 opacity-55"> * Captcha</span>
                    {errors.captcha && <p className="text-red-500 text-sm absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">{errors.captcha}</p>}
                </div>

                <Button type="submit" className="md:py-7 py-5 self-center md:text-lg text-sm rounded-full mt-10 transition-all duration-300 hover:bg-gradient-to-tr from-[#4eff36] to-[#4eff36]/20" size="lg">
                    Send Message
                </Button>
            </form>
        </div>
    );
}