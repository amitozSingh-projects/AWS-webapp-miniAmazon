const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB();

exports.handler = async (event, context) => {
    try {
        console.log(JSON.stringify(event, null, 2));
        
        // Parse the event to get user input
        const userInput = JSON.parse(event.body);
        const { email, phoneNumber } = userInput;
        
        // Prepare DynamoDB parameters
        const params = {
            TableName: 'UserDetailsTable', // Replace with your DynamoDB table name
            Item: {
                'email': { S: email },
                'phoneNumber': { S: phoneNumber },
                // Add more attributes as needed
            }
        };
        
        // Put user details into DynamoDB
        await dynamoDB.putItem(params).promise();
        
        const response = {
            statusCode: 200,
            body: JSON.stringify('User details captured successfully'),
        };
        return response;
    } catch (error) {
        console.error('Error:', error);
        const response = {
            statusCode: 500,
            body: JSON.stringify('An error occurred'),
        };
        return response;
    }
};
