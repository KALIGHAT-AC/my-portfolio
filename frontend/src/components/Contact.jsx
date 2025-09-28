import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mnngjgkv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      toast({
        title: "Error",
        description:
          "Failed to send message. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'soumyajitghosh808@gmail.com',
      href: 'mailto:soumyajitghosh808@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 0123456789',
      href: 'tel:+910123456789'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kolkata, India',
      href: 'https://www.google.co.in/maps/place/Kolkata,+West+Bengal/@22.5465208,88.2136679,12.25z/data=!4m12!1m5!3m4!2zMjLCsDMzJzMyLjkiTiA4OMKwMjknNDIuOCJF!8m2!3d22.559132!4d88.495229!3m5!1s0x39f882db4908f667:0x43e330e68f6c2cbc!8m2!3d22.5743545!4d88.3628734!16zL20vMGN2dzk?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/KALIGHAT-AC',
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/soumyajit-ghosh-321307318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://whatsapp.com',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Get In Touch
            </h2>
            <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-600"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Have a project in mind or want to collaborate? I'd love to hear from you! 
              Let's create something amazing together.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                Let's Connect
              </h3>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly conversation about technology and innovation.
              </p>

              {/* Contact Info Cards */}
              <div className="mb-8 space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center p-4 space-x-4 rounded-lg bg-gray-50 dark:bg-gray-900">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg dark:bg-indigo-900">
                      <info.icon className="w-5 h-5 text-blue-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {info.label}
                      </p>
                      <a
                        href={info.href}
                        className="text-gray-900 transition-colors dark:text-white hover:text-blue-600 dark:hover:text-indigo-400"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="bg-white border-gray-300 placeholder-violet-600 dark:border-gray-600 dark:bg-gray-800"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-white border-gray-300 placeholder-violet-600 dark:border-gray-600 dark:bg-gray-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-white border-gray-300 placeholder-violet-600 dark:border-gray-600 dark:bg-gray-800"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={5}
                      className="bg-white border-gray-300 placeholder-violet-600 dark:border-gray-600 dark:bg-gray-800"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send size={16} />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
