module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET_NAME'),
      },
    },
  },
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY', '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'),
    },
    settings: {
      defaultFrom: 'hi@yefri.dev',
      defaultReplyTo: 'hi@yefri.dev',
    },
  },
});