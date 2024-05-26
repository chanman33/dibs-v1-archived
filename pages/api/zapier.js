// pages/api/zapier.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const webhookUrl = 'https://hooks.zapier.com/hooks/catch/18940505/3vnnbfh/'; // Replace with your Zapier webhook URL
  
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req.body),
        });
  
        if (response.ok) {
          res.status(200).json({ message: 'Success' });
        } else {
          res.status(response.status).json({ message: 'Failed to submit form' });
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  