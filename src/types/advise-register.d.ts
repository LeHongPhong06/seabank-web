export interface AdviseRegisterForm {
  companyName: string;
  taxCode: string;
  province: string;
  fullName: string;
  email: string;
  phone: string;
  content: string;
  consent: boolean;
  referral?: string;
  utmSource?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  clickId?: string;
}
