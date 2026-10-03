export const site = {
  name: ['Anthony', 'Zhao'],
  greeting: "Hi, I'm Anthony.",
  intro: [
    'I study Computer Science and Statistics at the University of Toronto and build ML training infrastructure at Peripheral Labs.',
    'Outside work I run long distances, play tennis, cook, and listen to too much music.',
  ],
  email: 'anthony.zhao05@gmail.com',
  github: 'https://github.com/anthonyzhao27',
  linkedin: 'https://linkedin.com/in/anthonyzhao27',
  resume: '/Anthony_Zhao_Resume_SWE.pdf',
  place: 'Toronto',
  updated: 'October 2026',
};

export const experience = [
  {
    when: 'May 2026 – now',
    title: 'Software Engineering Intern, ML Infra',
    org: 'Peripheral Labs',
    url: 'https://peripheral.so',
    place: 'Toronto',
  },
];

export const projects = [
  {
    when: '2026',
    title: 'Syllabuddy',
    summary:
      'Turns a course syllabus into calendar deadlines. Upload the PDF, check the extracted dates, export them to your calendar. About 50 students use it.',
    stack: 'Next.js, FastAPI, Supabase, GPT-4o',
    links: [
      { label: 'syllabuddy.dev', href: 'https://syllabuddy.dev' },
      { label: 'Source on GitHub', href: 'https://github.com/anthonyzhao27/syllabuddy' },
    ],
  },
  {
    when: '2025',
    title: 'Rethinking Video Generation: Overcoming the Limits of Pretrained Models',
    summary:
      'Arbitrary-size video generation from a pretrained AnimateDiff model, without retraining, using video outpainting and frame interpolation. Written with researchers at Northwestern University and published at IEEE ICNC 2025.',
    stack: 'PyTorch, Stable Diffusion, AnimateDiff',
    links: [
      { label: 'Read the paper on IEEE Xplore', href: 'https://ieeexplore.ieee.org/document/10993780' },
    ],
  },
];
