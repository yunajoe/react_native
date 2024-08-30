import {Email, EmailObject} from '@/types/item';

export const images = [
  {
    id: 1,
    image: require('../assets/images/syqypv1486981727.jpg'),
    title: '이미지1',
    release: '2023',
    languages: 'English',
    genre: 'Action',
  },
  {
    id: 2,
    image: require('../assets/images/sywswr1511383814.jpg'),
    title: '이미지2',
    release: '2023',
    languages: 'English',
    genre: 'Action',
  },
  {
    id: 3,
    image: require('../assets/images/ywwrsp1511720277.jpg'),
    title: '이미지3',
    release: '2023',
    languages: 'English',
    genre: 'Action',
  },
  {
    id: 4,
    image: require('../assets/images/vdwloy1713225718.jpg'),
    title: '이미지4',
    release: '2023',
    languages: 'English',
    genre: 'Action',
  },
  {
    id: 5,
    image: require('../assets/images/wyrqqq1468233628.jpg'),
    title: '이미지5',
    release: '2023',
    languages: 'English',
    genre: 'Action',
  },
];

export const filterMatchText = (email: string) => {
  const beforeAtLetterRegex = /^[^@]+/;
  const afterAtLetterRegex = /(?<=@).+/;
  const beforeMathcedRegex = email.match(beforeAtLetterRegex);
  const afterMatchedRegex = email.match(afterAtLetterRegex);
  if (beforeMathcedRegex !== null && afterMatchedRegex !== null) {
    const email = beforeMathcedRegex[beforeMathcedRegex.length - 1];
    const domain = afterMatchedRegex[afterMatchedRegex.length - 1];
    return {
      email,
      domain,
    };
  }
  if (beforeMathcedRegex !== null && afterMatchedRegex === null) {
    return {
      email,
      domain: '',
    };
  }
  if (beforeMathcedRegex === null && afterMatchedRegex === null) {
    return {
      email: '',
      domain: '',
    };
  }
};

export const processLocalPart = (email: string) => {
  if (email.includes('@')) {
    const processedEmail = email.replace('@', '');
    return processedEmail;
  }
  return email;
};

export const processDomainPart = (index: number) => {
  let email;
  switch (index) {
    case 0:
      email = 'gmail.com';
      break;
    case 1:
      email = 'naver.com';
      break;
    case 2:
      email = 'daum.net';
      break;
    case 3:
      email = 'kakao.com';
      break;
    case 4:
      email = 'hanmail.net';
      break;
    case 5:
      email = 'icloud.com';
      break;
    case 6:
      email = 'nate.com';
      break;
    case 7:
      email = 'hotmail.com';
      break;
  }
  return email;
};

export const emailProcessTwo = (data: Email | undefined) => {
  let arr: EmailObject[] = [];
  let emailId = 0;

  const emailDomains = [
    'gmail.com',
    'naver.com',
    'daum.net',
    'kakao.com',
    'icloud.com',
    'hanmail.net',
    'nate.com',
    'hotmail.com',
  ];

  if (data) {
    const {domain, email} = data;
    emailDomains.forEach(item => {
      if (item.startsWith(domain)) {
        arr.push({
          id: emailId++,
          title: `${email}@${item}`,
        });
      }
    });

    return arr;
  }
};

export const convertString = (minute: number, second: number) => {
  const formatMinutes = String(minute).padStart(2, '0');
  const formatSeconds = String(second).padStart(2, '0');
  return {
    formatMinutes,
    formatSeconds,
  };
};

export const formatting = (time: number | null) => {
  if (time == null) {
    return {
      formatMinutes: '00',
      formatSeconds: '00',
    };
  }
  const totalSeconds = Math.floor(time / 1000);
  const minutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;

  const {formatMinutes, formatSeconds} = convertString(minutes, seconds);

  return {
    formatMinutes,
    formatSeconds,
  };
};

export const convertDateFormat = (currentTime: number, expiredTime: number) => {
  if (currentTime && expiredTime) {
    const diffTime = expiredTime - currentTime;
    return diffTime;
  }
  return 0;
};
