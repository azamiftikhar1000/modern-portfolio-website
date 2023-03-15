export enum ContactType {
  github = 'github',

  email = 'email',
}

export interface Contact {

  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  site: 'azamiftikhar.dev',
  calendly: 'https://calendly.com/azamiftikhar1000',
  links: {
    github: 'https://github.com/azamiftikhar1000',
    email: 'mailto:azamiftikhar1000@gmai.com',
  },
};
