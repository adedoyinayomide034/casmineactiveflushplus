export interface BenefitItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ProductQuality {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  subject: string;
  quantity: string;
  contactMethod: 'whatsapp' | 'phone' | 'email';
  message: string;
}

export interface PhoneContact {
  display: string;
  raw: string;
  international: string;
  whatsappUrl: string;
}
