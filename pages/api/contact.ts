import type { NextApiRequest, NextApiResponse } from 'next';

// Define the Monday API URL
const MONDAY_API_URL = 'https://api.monday.com/v2';

// Environment variable storing the API Key
const MONDAY_API_KEY = process.env.MONDAY_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Extract form data from the request body
    const { name, phone, email, message } = req.body;

    // Validate required fields
    if (!name || (!phone && !email)) {
      return res.status(400).json({ message: 'Name and either Phone or Email are required' });
    }

    // Map form data to the appropriate Monday.com column IDs
    const columnValues = {
      text: name, // Namn (Name)
      text1: phone, // Telefon (Phone field)
      email: { email, text: email }, // E-post (Email field)
      text2: message, // Meddelande (Message field)
    };

    // Build the GraphQL query for creating the item
    const query = `
      mutation {
        create_item (
          board_id: 1658552722,
          group_id: "topics",
          item_name: "${name}",
          column_values: "${JSON.stringify(columnValues).replace(/"/g, '\\"')}"
        ) {
          id
          name
        }
      }
    `;

    try {
      // Send the query to the Monday.com API
      const response = await fetch(MONDAY_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: MONDAY_API_KEY || '', // Authorization header
        },
        body: JSON.stringify({ query }),
      });

      // Parse the response
      const data = await response.json();

      // Check for errors in the response
      if (data.errors) {
        return res.status(500).json({ message: 'Error creating item in Monday.com' });
      }

      // Send a successful response back to the client
      res.status(200).json({ message: 'Item created successfully in Monday.com', itemId: data.data.create_item.id });
    } catch {
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    // If not a POST request, return a 405 Method Not Allowed error
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
