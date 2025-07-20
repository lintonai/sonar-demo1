import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Main function to make the API call
async function makeApiCall() {
    // Check if API key exists
    const apiKey = process.env.PERPLEXITY_API_KEY;
    if (!apiKey) {
        console.error('PERPLEXITY_API_KEY is not set in environment variables');
        return;
    }

    // Set up the API endpoint and headers
    const url = 'https://api.perplexity.ai/chat/completions';
    const headers = {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    };

    // Define the request payload
    const payload = {
        model: 'sonar-pro',
        messages: [
            { role: 'user', content: 'What were the results of the 2025 French Open Finals?' }
        ]
    };

    try {
        // Make the API call
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        // Print the AI's response
        console.log(data); // replace with console.log(data.choices[0].message.content) for just the content
    } catch (error) {
        console.error('Error making API call:', error);
    }
}

// Call the function
makeApiCall();