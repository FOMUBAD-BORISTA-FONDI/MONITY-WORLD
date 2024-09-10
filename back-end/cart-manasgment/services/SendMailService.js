const AWS = require('aws-sdk');
require('dotenv').config();


class SendMailService {
    constructor() {
        this.sns = new AWS.SNS({
            region:process.env.AWS_REGION,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });
    }
    async sendEmail(subject, message, emailAddress) {
        const params = {
            Message: message,
            Subject: subject,
            TopicArn: 'arn:aws:sns:us-east-1:123456789012:MyTopic', // Replace with your SNS topic ARN
            MessageAttributes: {
                'email': {
                    DataType: 'String',
                    StringValue: emailAddress
                }
            }
        };

        try {
            const result = await this.sns.publish(params).promise();
            console.log('Email sent:', result.MessageId);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }
}

module.exports = SendMailService;