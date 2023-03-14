const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jravali2204.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ravali Jangala',
  role: 'Full Stack Engineer',
  description: 'Passionate Full stack Engineer with expertise in various programming languages and building robust web applications that can scale upon need.',
  social: {
    linkedin: 'https://www.linkedin.com/in/ravali-j-4770a2268'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'ISpace Technologies',
    description:
      'I was a part of payment processing team, as part of this project. We  had an opportunity to rebuild the entire credit and debit card processing. We use ISO standard messages to process payments. Previously the payments were processed thru mainframe systems but as part of this project we built spring boot, java based apps to process payments over rest.  This helped modernize payments processing and provided more reliable processing.',
    stack: ['Java','TypeScript', 'CI/CD','CSS','HTML','SpringBoot', 'SQL','MicroServices','Angular', 'Docker', 'Kubernetes', 'Design Patterns', 'REST', 'JSON', 'TeamCity'],
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Java',
  'Angular',
  'Docker',
  'TeamCity',
  'GIT',
  'GITHUB',
  'BitBucket',
  'CI/CD',
  'AWS Ec2',
  'S3',
  'IAM',
  'GLACIER',
  'Spring Boot', 'MVC',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jravali2204@gmail.com',
}

export { header, about, projects, skills, contact }
