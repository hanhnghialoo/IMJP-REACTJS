const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, 'Full name is required'],
            trim: true,
            maxlength: 100,
        },

        normalizedFullName: {
            type: String,
            trim: true,
        },

        searchTokens : {
            type: [String],
            default: []
        },

        gender: {
            type: String,
            enum: ['male', 'female',],
            required: true,
        },

        dateOfBirth: {
            type: Date,
            // required: true,
        },
    },
    {
        _id: false,
    }
);

const contactSchema = new mongoose.Schema(
    {
        phone: {
            type: String,
            // required: true,
            trim: true,
            match: [
                /^(0|\+84)[0-9]{9,10}$/,
                'Invalid phone number',
            ],
        },

        newHomeTown: {
            type: String,
            trim: true,
            default: '',
        },

        oldHomeTown: {
            type: String,
            trim: true,
            default: '',
        },

        email: {
            type: String,
            trim: true,
            lowercase: true,
            default: '',
            match: [
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                'Invalid email address',
            ],
        },

        address: {
            type: String,
            trim: true,
            default: '',
            maxlength: 255,
        },

        familyMember: {
            type: String,
            trim: true,
            default: '',
        },

        familyMemberPhone: {
            type: String,
            trim: true,
            default: '',
            match: [
                /^$|^(0|\+84)[0-9]{9,10}$/,
                'Invalid family member phone number',
            ],
        },

        region: {
            type: String,
            enum: ['', 'north', 'central', 'south'],
            default: '',
        },
    },
    {
        _id: false,
    }
);

const consultationSchema = new mongoose.Schema(
    {
        consultationDate: {
            type: Date,
            default: null,
        },

        preference: {
            type: String,
            trim: true,
            default: '',
            maxlength: 2000,
        },

        note: {
            type: String,
            trim: true,
            default: '',
            maxlength: 2000,
        },

        personalCharacteristics: {
            type: String,
            trim: true,
            default: '',
            maxlength: 2000,
        },
    },
    {
        _id: false,
    }
);

const eligibilitySchema = new mongoose.Schema(
    {
        eligibility: {
            type: String,
            enum: ['eligible', 'ineligible', 'pending',''],
            default: '',
            // required: true,
        },

        reason: {
            type: String,
            trim: true,
            default: '',
            maxlength: 1000,
        },
    },
    {
        _id: false,
    }
);

const documentSchema = new mongoose.Schema(
    {
        documentStatus: {
            type: String,
            enum: [
                'unsubmitted',
                'submitted',
            ],
            default: 'unsubmitted',
        },

        submissionDate: {
            type: Date,
            default: null,
        },

        submissionMethod: {
            type: String,
            enum: ['', 'COLAB', 'ESC', 'postalService', 'other'],
            default: '',
        },

        recordedDate: {
            type: Date,
            default: null,
        },

        note: {
            type: String,
            trim: true,
            default: '',
            maxlength: 2000,
        },
    },
    {
        _id: false,
    }
);

const candidateStatusSchema = new mongoose.Schema(
    {
        status: {
            type: String,
            enum: [
                'agreed',
                'considering',
                'interested',
                'notInterested',
                'undecided',
                'familyApproval',
                '',
            ],
            default: '',
        },

        detail: {
            type: String,
            trim: true,
            default: '',
            maxlength: 500,
        },

        noteStatus: {
            type: String,
            trim: true,
            default: '',
            maxlength: 2000,
        },
    },
    {
        _id: false,
    }
);

const resultSchema = new mongoose.Schema(
    {
        result: {
            type: String,
            enum: [
                'passed',
                'failedRetest',
                'failedNonRetest',
                'postponed',
                'absent',
                'notEnrolled',
                'enrolled',
                ''
            ],
            default: '',
        },

        reason: {
            type: String,
            trim: true,
            default: '',
            maxlength: 1000,
        },

        noteResult: {
            type: String,
            trim: true,
            default: '',
            maxlength: 2000,
        },

        resultedDate: {
            type: Date,
            default: null,
        },

        batchCode: {
            type: String,
            trim: true,
            uppercase: true,
            default: '',
            maxlength: 50,
        },
    },
    {
        _id: false,
    }
);

const timelineSchema = new mongoose.Schema(
    {
        currentStep: {
            type: String,
            enum: [
                'consulting',
                'profile',
                'exam',
                'result',
                '',
            ],
            default: '',
        },

        status: {
            type: String,
            enum: [
                'pending',
                'current',
                'warning',
                'rejected',
                'complete',
            ],
            default: 'pending',
        },
    },
    {
        _id: false,
    }
);

const updatedBySchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: null,
        },

        name: {
            type: String,
            trim: true,
            default: '',
        },
    },
    {
        _id: false,
    }
);

const candidateSchema = new mongoose.Schema(
    {
        
        info: {
            type: infoSchema,
            required: true,
        },

        contact: {
            type: contactSchema,
            default: () => ({}),
        },
        sourceChannel: {
            type: String,
            trim: true,
            enum:[
                'Facebook',
                'Zalo',
                'Tiktok',
                'Imjp',
                'Colab',
                'Cantho',
                'SanGDVL',
                'TTS',
                'Unknown'
            ],
            default: 'Unknown',
        },

        consultation: {
            type: consultationSchema,
            default: () => ({})
        },
        
        eligibility: {
            type: eligibilitySchema,
            default: () => ({})
        },
        
        document: {
            type: documentSchema,
            default: () => ({})
        },
        
        candidateStatus: {
            type: candidateStatusSchema,
            default: () => ({})
        },
        
        result: {
            type: resultSchema,
            default: () => ({})
        },
        
        timeline: {
            type: timelineSchema,
            default: () => ({})
        },
        
        updatedBy: {
            type: updatedBySchema,
            default: () => ({})
        },

        isDeleted: {
            type: Boolean,
            default: false,
            index: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        collection: 'candidates',
    }
);

candidateSchema.index(
    {
        isDeleted: 1,
        createdAt: -1,
        _id: -1,
    },
    {
        name: 'idx_candidate_active_created',
    }
);
candidateSchema.index(
    {
        isDeleted: 1,
        'info.normalizedFullName': 1,
    },
    {
        name: 'idx_candidate_active_name',
    }
);
candidateSchema.index(
    {
        isDeleted: 1,
        'contact.newHomeTown': 1,
        createdAt: -1,
        _id: -1,
    },
    {
        name: 'idx_candidate_new_hometown_created',
    }
);
candidateSchema.index(
    {
        isDeleted: 1,
        'contact.oldHomeTown': 1,
        createdAt: -1,
        _id: -1,
    },
    {
        name: 'idx_candidate_old_hometown_created',
    }
);
candidateSchema.index(
    {
        isDeleted: 1,
        'result.batchCode': 1,
        createdAt: -1,
        _id: -1,
    },
    {
        name: 'idx_candidate_exam_created',
    }
);
candidateSchema.index(
    {
        isDeleted: 1,
        sourceChannel: 1,
        createdAt: -1,
        _id: -1,
    },
    {
        name: 'idx_candidate_source_created',
    }
);
candidateSchema.index(
    {
        isDeleted: 1,
        'info.searchTokens': 1,
    },
    {
        name: 'idx_candidate_active_name_tokens'
    }
)

const Candidate = mongoose.model(
    'Candidate',
    candidateSchema
);

module.exports = Candidate;