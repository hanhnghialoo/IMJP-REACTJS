export const fakeCandidates = [
  {
    id: 'CAND-001',
    info:{
      fullName: 'Nguyen Van An',
      gender: 'male',
      dateOfBirth: '12/05/2001',
    },
    contact:{
        phone: '0901234567',
        newHomeTown: 'QUANG_NGAI',
        oldHomeTown: '',
        email: 'an.nguyen@gmail.com',
        address: 'Ha Noi, Viet Nam',
        familyMember: 'Mẹ',
        familyMemberPhone:'0344566788',
        region:''
    },
    sourceChannel: 'Cantho',
    consultation:{
        consultationDate: '20/05/2026',
        preference: 'Tham gia chương trình vào năm sau. Tuy nhiên nếu năm nay thay đổi kế hoạch thì sẽ tham gia chương trình vào tháng 9',
        note: 'Cộng hoà xã hội chủ nghĩa Việt Nam. Độc lập tự do hạnh phúc',
        personalCharacteristics:'',
    },
    eligibility:{
      eligibility: 'eligible',
      reason:''
    },
    document:{
        documentStatus: 'submitted',
        submissionDate:'12/02/2026',
        submissionMethod:'other',
        recordedDate:'22/02/2026',
        note:''  
    },
    status:{
      status: 'agreed',
      detail:'Đã đồng ý, đang đợi làm hồ sơ',
      noteStatus:''
    },
    result:{
      result: 'passed',
      reason: '',
      noteResult:'',
      resultedDate:'02/06/2026',
      batchCode: 'V123',
    },
    timeline:{
      currentStep:'profile',
      status:'current'
    },
    update:{
      updatedBy:{
        id:1,
        name:'Hoàng Đức Hạnh'
      },
      updatedAt:'2026-06-10T22:00:00Z'
    },
     
  },
  
    {
      id: 'CAND-002',

    info:{
      fullName: 'Le Thi Mai',
      gender: 'female',
      dateOfBirth: '02/11/2001',
      avatar:
        'https://i.pravatar.cc/150?img=32',
    },

    contact:{
        phone: '0988888888',
        newHomeTown: 'AN_GIANG',
        oldHomeTown: 'Kiên Giang',
        email: 'mai.le@gmail.com',
        address: 'Hai Phong, Viet Nam',
        familyMember: '',
        familyMemberPhone:'',
    },
    
    consultation:{
        consultationDate: '18/05/2026',
        preference: 'Chưa có ý định tham gia năm nay'
    },
  
    eligibility:{
      eligibility: 'eligible',
      reason:''
    },
      sourceChannel: 'SanGDVL',
    
    document:{
      documentStatus: 'submitted',
      submissionDate:'',
      submissionMethod:'COLAB',
      recordedDate:''
      
    },

      documentType: 'Offline',
      conditionResult: 'Pending',
      consultationResult: 'Consulted',
  
    status:{
      status: 'considering',
      detail:'',
      noteStatus:''
    },
    
    result:{
      result: 'absent',
      reason:'',
      batchCode: 'V124',
    },

    timeline:{
      currentStep:'exam',
      status:''
    },
    },
  
    {
      id: 'CAND-003',

    info:{
      fullName: 'Pham Duc Minh',
      gender: 'male',
      dateOfBirth: '08/21/1998',
      avatar:
        'https://i.pravatar.cc/150?img=15',
    },

    contact:{
        phone: '0912349999',
        newHomeTown: 'HA_NOI',
        oldHomeTown: 'Hà Nội',
        email: 'minh.pham@gmail.com',
        address: 'Da Nang, Viet Nam',
        familyMember: '',
        familyMemberPhone:'',
    },
    
    consultation:{
        consultationDate: '15/05/2026',
    },

      sourceChannel: 'TTS',
      consultant: 'Nguyen Thanh Dat',
  
      course: 'Tokutei',
      batchCode: '',
      examTerm: '03/2027',

      eligibility:{
        eligibility: 'ineligible',
        reason:''
      },
  
      conditionResult: 'Failed',
      consultationResult: 'Rejected',
    
    document:{
      documentStatus: 'submitted',
      submissionDate:'',
      submissionMethod:'postalService',
      recordedDate:''
    },
      documentType: 'Online',
    
    status:{
      status: 'notInterested',
      detail:'',
      noteStatus:''
    },
    
    result:{
      result: 'enrolled',
      reason:'',
      batchCode: 'V123',
    },
    timeline:{
      currentStep:'result',
      status:''
    },
    },
    {
        id: 'CAND-004',

    info:{
        fullName: 'Chau Kiet Luan',
        gender: 'male',
        dateOfBirth: '02/21/1999',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },

    contact:{
        phone: '',
        newHomeTown: 'LAO_CAI',
        oldHomeTown: 'Yên Bái',
        email: 'minh.pham@gmail.com',
        address: 'Van Chan, Viet Nam',
        familyMember: '',
        familyMemberPhone:'',
    },
    
    consultation:{
        consultationDate: '15/05/2026',
    },
        sourceChannel: 'Imjp',
        consultant: 'Nguyen Thanh Dat',
    
        course: 'Tokutei',
        batchCode: 'V125',
        examTerm: '03/2027',

    eligibility:{
      eligibility: 'pending',
      reason:''
    },
    
        conditionResult: 'Failed',
        consultationResult: 'Rejected',
    
    document:{
      documentStatus: '',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''
    },
        documentType: 'Online',
    
    status:{
      status: 'undecided',
      detail:'',
      noteStatus:''
    },
    
    result:{
      result:'failedNonRetest',
      reason:''
    },
    timeline:{
      currentStep:'exam',
      status:'warning'
    },
      },
  {
    id: 'CAND-005',
    info:{
        fullName: 'Ly Lien Kiet',
        gender: 'Female',
        dateOfBirth: '12/29/1997',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'TP_HO_CHI_MINH',
        oldHomeTown: '',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'0334567891',
    },
    consultation:{
        consultationDate: '',
    },
        sourceChannel: 'Colab',
        consultant: 'Nguyen Thanh Dat',
    
        course: 'Tokutei',
        batchCode: 'V125',
        examTerm: '03/2027',
      eligibility:{
        eligibility: 'pending',
        reason:''
      },
    
        conditionResult: 'Failed',
        consultationResult: 'Rejected',
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''
    },
        documentType: 'Online',
    status:{
      status: 'familyApproval',
      detail:'',
      noteStatus:''
    },
    result:{
      result: 'empty',
      reason:'',
      batchCode: 'V123',
    },
    timeline:{
      currentStep:'consulting',
      status:'warning'
    }, 
  },

  {
    id: 'CAND-006',
    info:{
        fullName: 'Hoac Kien Hoa',
        gender: 'Female',
        dateOfBirth: '12/29/2006',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: '',
        oldHomeTown: '',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
    sourceChannel: 'Facebook',
    batchCode: 'V125',
    eligibility:{
      eligibility: 'pending',
      reason:''
    },
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''

    },
    status:{
      status: 'empty',
      detail:'',
      noteStatus:''
    },

    result:{
      result: 'postponed',
      reason:'',
      batchCode: 'V123',
    },
    timeline:{
      currentStep:'profile',
      status:'warning'
    }, 
  },

  {
    id: 'CAND-007',
    info:{
        fullName: 'Hoac Kien Hoa',
        gender: 'Female',
        dateOfBirth: '12/29/2006',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'Ha Noi',
        oldHomeTown: 'Ha Noi',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
    sourceChannel: 'Facebook',
    batchCode: 'V125',
    eligibility:{
      eligibility: 'ineligible',
      reason:''
    },
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''

    },
    status:{
      status: 'empty',
      detail:'',
      noteStatus:''
    },

    result:{
      result: 'postponed',
      reason:''
    },
        note: 'Japanese level not sufficient.',
  },

  {
    id: 'CAND-008',
    info:{
        fullName: 'Hoac Kien Hoa',
        gender: 'Female',
        dateOfBirth: '12/29/2006',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'Ha Noi',
        oldHomeTown: 'Ha Noi',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
    sourceChannel: 'Facebook',
    batchCode: 'V125',
    eligibility:{
      eligibility: 'pending',
      reason:''
    },
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''

    },
    status:{
      status: 'familyApproval',
      detail:'',
      noteStatus:''
    },

    result:{
      result: 'postponed',
      reason:''
    },
        note: 'Japanese level not sufficient.',
  },

  {
    id: 'CAND-009',
    info:{
        fullName: 'Hoac Kien Hoa',
        gender: 'Female',
        dateOfBirth: '12/29/2006',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'Ha Noi',
        oldHomeTown: 'Ha Noi',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
    sourceChannel: 'Facebook',
    batchCode: 'V125',
    eligibility:{
      eligibility: 'pending',
      reason:''
    },
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''

    },
    status:{
      status: 'familyApproval',
      detail:'',
      noteStatus:''
    },

    result:{
      result: 'postponed',
      reason:''
    },
        note: 'Japanese level not sufficient.',
  },

  {
    id: 'CAND-010',
    info:{
        fullName: 'Hoac Kien Hoa',
        gender: 'Female',
        dateOfBirth: '12/29/2006',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'Ha Noi',
        oldHomeTown: 'Ha Noi',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
    sourceChannel: 'Facebook',
    batchCode: 'V125',
    eligibility:{
      eligibility: 'pending',
      reason:''
    },
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''

    },
    status:{
      status: 'familyApproval',
      detail:'',
      noteStatus:''
    },

    result:{
      result: 'postponed',
      reason:''
    },
        note: 'Japanese level not sufficient.',
  },
  {
    id: 'CAND-011',
    info:{
        fullName: 'Hoac Kien Hoa',
        gender: 'Female',
        dateOfBirth: '12/29/2006',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'Ha Noi',
        oldHomeTown: 'Ha Noi',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
    sourceChannel: 'Facebook',
    batchCode: 'V125',
    eligibility:{
      eligibility: 'pending',
      reason:''
    },
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''

    },
    status:{
      status: 'familyApproval',
      detail:'',
      noteStatus:''
    },

    result:{
      result: 'postponed',
      reason:''
    },
        note: 'Japanese level not sufficient.',
  },

  {
    id: 'CAND-012',
    info:{
        fullName: 'Hoac Kien Hoa',
        gender: 'Female',
        dateOfBirth: '12/29/2006',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'Ha Noi',
        oldHomeTown: 'Ha Noi',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
    sourceChannel: 'Facebook',
    batchCode: 'V125',
    eligibility:{
      eligibility: 'pending',
      reason:''
    },
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''

    },
    status:{
      status: 'familyApproval',
      detail:'',
      noteStatus:''
    },

    result:{
      result: 'postponed',
      reason:''
    },
        note: 'Japanese level not sufficient.',
  },

  {
    id: 'CAND-013',
    info:{
        fullName: 'Hoac Kien Hoa',
        gender: 'Female',
        dateOfBirth: '12/29/2006',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'Ha Noi',
        oldHomeTown: 'Ha Noi',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
    sourceChannel: 'Facebook',
    batchCode: 'V125',
    eligibility:{
      eligibility: 'pending',
      reason:''
    },
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''

    },
    status:{
      status: 'familyApproval',
      detail:'',
      noteStatus:''
    },

    result:{
      result: 'postponed',
      reason:''
    },
        note: 'Japanese level not sufficient.',
  },

  {
    id: 'CAND-014',
    info:{
        fullName: 'Hoac Kien Hoa',
        gender: 'Female',
        dateOfBirth: '12/29/2006',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'Ha Noi',
        oldHomeTown: 'Ha Noi',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
    sourceChannel: 'Facebook',
    batchCode: 'V125',
    eligibility:{
      eligibility: 'pending',
      reason:''
    },
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''

    },
    status:{
      status: 'familyApproval',
      detail:'',
      noteStatus:''
    },

    result:{
      result: 'postponed',
      reason:''
    },
        note: 'Japanese level not sufficient.',
  },
  {
    id: 'CAND-015',
    info:{
        fullName: 'Hoac Kien Hoa',
        gender: 'Female',
        dateOfBirth: '12/29/2006',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'Ha Noi',
        oldHomeTown: 'Ha Noi',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
    sourceChannel: 'Facebook',
    batchCode: 'V125',
    eligibility:{
      eligibility: 'pending',
      reason:''
    },
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''

    },
    status:{
      status: 'familyApproval',
      detail:'',
      noteStatus:''
    },

    result:{
      result: 'postponed',
      reason:''
    },
        note: 'Japanese level not sufficient.',
  },
  {
    id: 'CAND-016',
    info:{
        fullName: 'Hoac Kien Hoa',
        gender: 'Female',
        dateOfBirth: '12/29/2006',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'Ha Noi',
        oldHomeTown: 'Ha Noi',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
    sourceChannel: 'Facebook',
    batchCode: 'V125',
    eligibility:{
      eligibility: 'pending',
      reason:''
    },
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''

    },
    status:{
      status: 'familyApproval',
      detail:'',
      noteStatus:''
    },

    result:{
      result: 'postponed',
      reason:''
    },
        note: 'Japanese level not sufficient.',
  },
  {
    id: 'CAND-017',
    info:{
        fullName: 'Hoac Kien Hoa',
        gender: 'Female',
        dateOfBirth: '12/29/2006',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'Ha Noi',
        oldHomeTown: 'Ha Noi',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
    sourceChannel: 'Facebook',
    batchCode: 'V125',
    eligibility:{
      eligibility: 'pending',
      reason:''
    },
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''

    },
    status:{
      status: 'familyApproval',
      detail:'',
      noteStatus:''
    },

    result:{
      result: 'postponed',
      reason:''
    },
        note: 'Japanese level not sufficient.',
  },

  {
    id: 'CAND-018',

info:{
    fullName: 'Chau Kiet Luan',
    gender: 'male',
    dateOfBirth: '02/21/1999',
    avatar:
      'https://i.pravatar.cc/150?img=15',
},

contact:{
    phone: '',
    newHomeTown: 'Lao Cai',
    oldHomeTown: 'Yen Bai',
    email: 'minh.pham@gmail.com',
    address: 'Van Chan, Viet Nam',
    familyMember: '',
    familyMemberPhone:'',
},

consultation:{
    consultationDate: '15/05/2026',
},
    sourceChannel: 'Imjp',
    consultant: 'Nguyen Thanh Dat',

    course: 'Tokutei',
    batchCode: 'V125',
    examTerm: '03/2027',

eligibility:{
    eligibility: 'pending',
    reason:''
},

    conditionResult: 'Failed',
    consultationResult: 'Rejected',

document:{
  documentStatus: 'unsubmitted',
  submissionDate:'',
  submissionMethod:'',
  recordedDate:''
},
    documentType: 'Online',

status:{
  status: 'undecided',
  detail:'',
  noteStatus:''
},

result:{
  result:'failedNonRetest',
  reason:''
},
    note: 'Japanese level not sufficient.',
  },
  {
    id: 'CAND-019',

info:{
    fullName: 'Chau Kiet Luan',
    gender: 'male',
    dateOfBirth: '02/21/1999',
    avatar:
      'https://i.pravatar.cc/150?img=15',
},

contact:{
    phone: '',
    newHomeTown: 'Lao Cai',
    oldHomeTown: 'Yen Bai',
    email: 'minh.pham@gmail.com',
    address: 'Van Chan, Viet Nam',
    familyMember: '',
    familyMemberPhone:'',
},

consultation:{
    consultationDate: '15/05/2026',
},
    sourceChannel: 'Imjp',
    consultant: 'Nguyen Thanh Dat',

    course: 'Tokutei',
    batchCode: 'V125',
    examTerm: '03/2027',

eligibility:{
    eligibility: 'pending',
    reason:''
},

    conditionResult: 'Failed',
    consultationResult: 'Rejected',

document:{
  documentStatus: 'unsubmitted',
  submissionDate:'',
  submissionMethod:'',
  recordedDate:''
},
    documentType: 'Online',

status:{
  status: 'undecided',
  detail:'',
  noteStatus:''
},

result:{
  result:'failedNonRetest',
  reason:''
},
    note: 'Japanese level not sufficient.',
  },
  {
    id: 'CAND-020',

info:{
    fullName: 'Chau Kiet Luan',
    gender: 'male',
    dateOfBirth: '02/21/1999',
    avatar:
      'https://i.pravatar.cc/150?img=15',
},

contact:{
    phone: '',
    newHomeTown: 'Lao Cai',
    oldHomeTown: 'Yen Bai',
    email: 'minh.pham@gmail.com',
    address: 'Van Chan, Viet Nam',
    familyMember: '',
    familyMemberPhone:'',
},

consultation:{
    consultationDate: '15/05/2026',
},
    sourceChannel: 'Imjp',
    consultant: 'Nguyen Thanh Dat',

    course: 'Tokutei',
    batchCode: 'V125',
    examTerm: '03/2027',

eligibility:{
  eligibility: 'pending',
      reason:''
},

    conditionResult: 'Failed',
    consultationResult: 'Rejected',

document:{
  documentStatus: 'unsubmitted',
  submissionDate:'',
  submissionMethod:'',
  recordedDate:''
},
    documentType: 'Online',

status:{
  status: 'undecided',
  detail:'',
  noteStatus:''
},

result:{
  result:'failedNonRetest',
  reason:''
},
    note: 'Japanese level not sufficient.',
  },
  {
    id: 'CAND-021',

info:{
    fullName: 'Chau Kiet Luan',
    gender: 'male',
    dateOfBirth: '02/21/1999',
    avatar:
      'https://i.pravatar.cc/150?img=15',
},

contact:{
    phone: '',
    newHomeTown: 'Lao Cai',
    oldHomeTown: 'Yen Bai',
    email: 'minh.pham@gmail.com',
    address: 'Van Chan, Viet Nam',
    familyMember: '',
    familyMemberPhone:'',
},

consultation:{
    consultationDate: '15/05/2026',
},
    sourceChannel: 'Imjp',
    consultant: 'Nguyen Thanh Dat',

    course: 'Tokutei',
    batchCode: 'V125',
    examTerm: '03/2027',

eligibility:{
    eligibility: 'pending',
    reason:''
},

    conditionResult: 'Failed',
    consultationResult: 'Rejected',

document:{
  documentStatus: 'unsubmitted',
  submissionDate:'',
  submissionMethod:'',
  recordedDate:''
},
    documentType: 'Online',

status:{
  status: 'undecided',
  detail:'',
  noteStatus:''
},

result:{
  result:'failedNonRetest',
  reason:''
},
    note: 'Japanese level not sufficient.',
  },
  {
    id: 'CAND-022',

  info:{
    fullName: 'Nguyen Van An',
    gender: 'male',
    dateOfBirth: '12/05/2001',
    avatar:
      'https://i.pravatar.cc/150?img=11',
  },

  contact:{
      phone: '0901234567',
      newHomeTown: 'Quang Nam',
      oldHomeTown: '',
      email: 'an.nguyen@gmail.com',
      address: 'Ha Noi, Viet Nam',
      familyMember: 'Mẹ',
      familyMemberPhone:'0344566788',
  },

  consultation:{
      consultationDate: '20/05/2026',
      preference: 'Tham gia chương trình vào năm sau',
      note: 'Cộng hoà xã hội chủ nghĩa Việt Nam. Độc lập tự do hạnh phúc'
  },

    sourceChannel: 'Cantho',
    consultant: 'Tran Thi Linh',
    course: 'N4',
    batchCode: 'V123',
    examTerm: '07/2026',
  eligibility:{
    eligibility: 'pending',
    reason:''
  },
  
  document:{
      documentStatus: 'submitted',
      submissionDate:'',
      submissionMethod:'other',
      recordedDate:''
      
  },
    documentType: 'Online',
    conditionResult: 'Passed',
    consultationResult: 'Interested',
  
  status:{
    status: 'agreed',
    detail:'Đã đồng ý, đang đợi làm hồ sơ',
    noteStatus:''
  },
    
  result:{
    result: 'passed',
    reason: ''
  },
  
    // Note
    note: 'Need follow-up after interview.',

  },
  {
    id: 'CAND-023',

  info:{
    fullName: 'Nguyen Van An',
    gender: 'male',
    dateOfBirth: '12/05/2001',
    avatar:
      'https://i.pravatar.cc/150?img=11',
  },

  contact:{
      phone: '0901234567',
      newHomeTown: 'Quang Nam',
      oldHomeTown: '',
      email: 'an.nguyen@gmail.com',
      address: 'Ha Noi, Viet Nam',
      familyMember: 'Mẹ',
      familyMemberPhone:'0344566788',
  },

  consultation:{
      consultationDate: '20/05/2026',
      preference: 'Tham gia chương trình vào năm sau',
      note: 'Cộng hoà xã hội chủ nghĩa Việt Nam. Độc lập tự do hạnh phúc'
  },

    sourceChannel: 'Cantho',
    consultant: 'Tran Thi Linh',
    course: 'N4',
    batchCode: 'V123',
    examTerm: '07/2026',
  eligibility:{
      eligibility: 'pending',
      reason:''
  },
  
  document:{
      documentStatus: 'submitted',
      submissionDate:'',
      submissionMethod:'other',
      recordedDate:''
      
  },
    documentType: 'Online',
    conditionResult: 'Passed',
    consultationResult: 'Interested',
  
  status:{
    status: 'agreed',
    detail:'Đã đồng ý, đang đợi làm hồ sơ',
    noteStatus:''
  },
    
  result:{
    result: 'passed',
    reason: ''
  },
  
    // Note
    note: 'Need follow-up after interview.',

  },
  {
    id: 'CAND-024',

  info:{
    fullName: 'Nguyen Van An',
    gender: 'male',
    dateOfBirth: '12/05/2001',
    avatar:
      'https://i.pravatar.cc/150?img=11',
  },

  contact:{
      phone: '0901234567',
      newHomeTown: 'Quang Nam',
      oldHomeTown: '',
      email: 'an.nguyen@gmail.com',
      address: 'Ha Noi, Viet Nam',
      familyMember: 'Mẹ',
      familyMemberPhone:'0344566788',
  },

  consultation:{
      consultationDate: '20/05/2026',
      preference: 'Tham gia chương trình vào năm sau',
      note: 'Cộng hoà xã hội chủ nghĩa Việt Nam. Độc lập tự do hạnh phúc'
  },

    sourceChannel: 'Cantho',
    consultant: 'Tran Thi Linh',
    course: 'N4',
    batchCode: 'V123',
    examTerm: '07/2026',
  eligibility:{
      eligibility: 'pending',
      reason:''
  },
  
  document:{
      documentStatus: 'submitted',
      submissionDate:'',
      submissionMethod:'other',
      recordedDate:''
      
  },
    documentType: 'Online',
    conditionResult: 'Passed',
    consultationResult: 'Interested',
  
  status:{
    status: 'agreed',
    detail:'Đã đồng ý, đang đợi làm hồ sơ',
    noteStatus:''
  },
    
  result:{
    result: 'passed',
    reason: ''
  },
  
    // Note
    note: 'Need follow-up after interview.',

  },
  {
    id: 'CAND-025',

  info:{
    fullName: 'Nguyen Van An',
    gender: 'male',
    dateOfBirth: '12/05/2001',
    avatar:
      'https://i.pravatar.cc/150?img=11',
  },

  contact:{
      phone: '0901234567',
      newHomeTown: 'Quang Nam',
      oldHomeTown: '',
      email: 'an.nguyen@gmail.com',
      address: 'Ha Noi, Viet Nam',
      familyMember: 'Mẹ',
      familyMemberPhone:'0344566788',
  },

  consultation:{
      consultationDate: '20/05/2026',
      preference: 'Tham gia chương trình vào năm sau',
      note: 'Cộng hoà xã hội chủ nghĩa Việt Nam. Độc lập tự do hạnh phúc'
  },

    sourceChannel: 'Cantho',
    consultant: 'Tran Thi Linh',
    course: 'N4',
    batchCode: 'V123',
    examTerm: '07/2026',
  eligibility:{
      eligibility: 'pending',
      reason:''
  },
  
  document:{
      documentStatus: 'submitted',
      submissionDate:'',
      submissionMethod:'other',
      recordedDate:''
      
  },
    documentType: 'Online',
    conditionResult: 'Passed',
    consultationResult: 'Interested',
  
  status:{
    status: 'agreed',
    detail:'Đã đồng ý, đang đợi làm hồ sơ',
    noteStatus:''
  },
    
  result:{
    result: 'passed',
    reason: ''
  },
  
    // Note
    note: 'Need follow-up after interview.',

  },
  {
    id: 'CAND-026',

  info:{
    fullName: 'Nguyen Van An',
    gender: 'male',
    dateOfBirth: '12/05/2001',
    avatar:
      'https://i.pravatar.cc/150?img=11',
  },

  contact:{
      phone: '0901234567',
      newHomeTown: 'Quang Nam',
      oldHomeTown: '',
      email: 'an.nguyen@gmail.com',
      address: 'Ha Noi, Viet Nam',
      familyMember: 'Mẹ',
      familyMemberPhone:'0344566788',
  },

  consultation:{
      consultationDate: '20/05/2026',
      preference: 'Tham gia chương trình vào năm sau',
      note: 'Cộng hoà xã hội chủ nghĩa Việt Nam. Độc lập tự do hạnh phúc'
  },

    sourceChannel: 'Cantho',
    consultant: 'Tran Thi Linh',
    course: 'N4',
    batchCode: 'V123',
    examTerm: '07/2026',
  eligibility:{
      eligibility: 'pending',
      reason:''
  },
  
  document:{
      documentStatus: 'submitted',
      submissionDate:'',
      submissionMethod:'other',
      recordedDate:''
      
  },
    documentType: 'Online',
    conditionResult: 'Passed',
    consultationResult: 'Interested',
  
  status:{
    status: 'agreed',
    detail:'Đã đồng ý, đang đợi làm hồ sơ',
    noteStatus:''
  },
    
  result:{
    result: 'passed',
    reason: ''
  },
  
    // Note
    note: 'Need follow-up after interview.',

  },
  {
    id: 'CAND-027',
    info:{
        fullName: 'Ly Lien Kiet',
        gender: 'Female',
        dateOfBirth: '12/29/1997',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'Ha Noi',
        oldHomeTown: 'Ha Noi',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
        sourceChannel: 'Colab',
        consultant: 'Nguyen Thanh Dat',
    
        course: 'Tokutei',
        batchCode: 'V125',
        examTerm: '03/2027',

    eligibility:{
      eligibility: 'pending',
      reason:''
    },
    
        conditionResult: 'Failed',
        consultationResult: 'Rejected',
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''
    },
        documentType: 'Online',
    status:{
      status: 'familyApproval',
      detail:'',
      noteStatus:''
    },
    result:{
      result: 'postponed',
      reason:''
    },
        note: 'Japanese level not sufficient.',
  },
  {
    id: 'CAND-028',
    info:{
        fullName: 'Ly Lien Kiet',
        gender: 'Female',
        dateOfBirth: '12/29/1997',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'Ha Noi',
        oldHomeTown: 'Ha Noi',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
        sourceChannel: 'Colab',
        consultant: 'Nguyen Thanh Dat',
    
        course: 'Tokutei',
        batchCode: 'V125',
        examTerm: '03/2027',

    eligibility:{
      eligibility: 'pending',
      reason:''
    },
    
        conditionResult: 'Failed',
        consultationResult: 'Rejected',
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''
    },
        documentType: 'Online',
    status:{
      status: 'familyApproval',
      detail:'',
      noteStatus:''
    },
    result:{
      result: 'postponed',
      reason:''
    },
        note: 'Japanese level not sufficient.',
  },
  {
    id: 'CAND-029',
    info:{
        fullName: 'Ly Lien Kiet',
        gender: 'Female',
        dateOfBirth: '12/29/1997',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'Ha Noi',
        oldHomeTown: 'Ha Noi',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
        sourceChannel: 'Colab',
        consultant: 'Nguyen Thanh Dat',
    
        course: 'Tokutei',
        batchCode: 'V125',
        examTerm: '03/2027',

    eligibility:{
        eligibility: 'pending',
        reason:''
    },
    
        conditionResult: 'Failed',
        consultationResult: 'Rejected',
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''
    },
        documentType: 'Online',
    status:{
      status: 'familyApproval',
      detail:'',
      noteStatus:''
    },
    result:{
      result: 'postponed',
      reason:''
    },
        note: 'Japanese level not sufficient.',
  },
  {
    id: 'CAND-030',
    info:{
        fullName: 'Ly Lien Kiet',
        gender: 'Female',
        dateOfBirth: '12/29/1997',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'Ha Noi',
        oldHomeTown: 'Ha Noi',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
        sourceChannel: 'Colab',
        consultant: 'Nguyen Thanh Dat',
    
        course: 'Tokutei',
        batchCode: 'V125',
        examTerm: '03/2027',

    eligibility:{
        eligibility: 'pending',
        reason:''
    },
    
        conditionResult: 'Failed',
        consultationResult: 'Rejected',
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''
    },
        documentType: 'Online',
    status:{
      status: 'familyApproval',
      detail:'',
      noteStatus:''
    },
    result:{
      result: 'postponed',
      reason:''
    },
        note: 'Japanese level not sufficient.',
  },
  {
    id: 'CAND-031',
    info:{
        fullName: 'Ly Lien Kiet',
        gender: 'Female',
        dateOfBirth: '12/29/1997',
        avatar:
          'https://i.pravatar.cc/150?img=15',
    },
    contact:{
        phone: '',
        newHomeTown: 'Ha Noi',
        oldHomeTown: 'Ha Noi',
        email: 'minh.pham@gmail.com',
        address: 'Long Bien, Ha Noi',
        familyMember: 'Chị gái',
        familyMemberPhone:'033456789',
    },
    consultation:{
        consultationDate: '',
    },
        sourceChannel: 'Colab',
        consultant: 'Nguyen Thanh Dat',
    
        course: 'Tokutei',
        batchCode: 'V125',
        examTerm: '03/2027',

    eligibility:{
        eligibility: 'pending',
        reason:''
    },
    
        conditionResult: 'Failed',
        consultationResult: 'Rejected',
    document:{
      documentStatus: 'unsubmitted',
      submissionDate:'',
      submissionMethod:'',
      recordedDate:''
    },
        documentType: 'Online',
    status:{
      status: 'familyApproval',
      detail:'',
      noteStatus:''
    },
    result:{
      result: 'postponed',
      reason:''
    },
        note: 'Japanese level not sufficient.',
  },
];