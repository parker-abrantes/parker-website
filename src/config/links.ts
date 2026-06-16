export const links = {
  email:     'parkerabrantes1@gmail.com',
  linkedin:  'https://www.linkedin.com/in/parker-abrantes-6518b1327/',
  github:    'https://github.com/parker-abrantes/',
  substack:  'https://parkerabrantes.substack.com/',
  instagram: 'https://www.instagram.com/parker.abrantes/',
  twitter:   'https://x.com/parkerabrantes',
  youtube:   'https://www.youtube.com/channel/UCPkH0hdX2rCAG2GbIlBpvnA',
  fundraiser: {
    donate:  'https://donate.hakuapp.com/donations/new?fundraiser=646f55f135e129341ef5',
    page:    'https://fundraisers.hakuapp.com/parker-abrantes',
  },
} as const;

export const socials = [
  { label: 'Substack',  url: links.substack  },
  { label: 'LinkedIn',  url: links.linkedin   },
  { label: 'GitHub',    url: links.github     },
  { label: 'Instagram', url: links.instagram  },
  { label: 'X',         url: links.twitter    },
  { label: 'YouTube',   url: links.youtube    },
];
