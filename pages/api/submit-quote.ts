import type { NextApiRequest, NextApiResponse } from 'next';

// Define the Monday API URL
const MONDAY_API_URL = 'https://api.monday.com/v2';

// Environment variable storing the API Key
const MONDAY_API_KEY = process.env.MONDAY_API_KEY || '';

// Define the board ID and group ID
const BOARD_ID = '1589367456'; // Replace with your board ID
const GROUP_ID = 'ny_grupp__1'; // Group ID for "Nya leads fairweather.energy"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Extract form data from the request body
    const {
      firstName,
      lastName,
      email,
      address,
      zipCode,
      city,
      propertyType,
      phone,
      interestedIn,
      message,
    } = req.body;

    // Map form data to the appropriate Monday.com column IDs
    const columnValues = {
      text: `${firstName}`, // Namn (First Name)
      text__1: `${lastName}`, // Efternamn (Last Name)
      e_post__1: { email, text: email }, // E-post (Email field)
      text_12__1: address, // Adress (Address field)
      text5__1: zipCode, // Postnummer (Zip Code field)
      text3__1: city, // Ort (City field)
      text6__1: propertyType, // Fastighetstyp (Property Type dropdown)
      text8__1: phone, // Telefonnummer (Phone field)
      text4__1: `${interestedIn.solceller ? 'Solceller' : ''}${interestedIn.batterier ? ', Batterier' : ''}`, // Intresserad av (Interested In)
    };

    // Build the GraphQL query for creating the item
    const query = `
      mutation {
        create_item (
          board_id: ${BOARD_ID},
          group_id: "${GROUP_ID}",
          item_name: "${firstName} ${lastName}",
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
          Authorization: MONDAY_API_KEY || '', // Use the environment variable for security
        },
        body: JSON.stringify({ query }),
      });

      // Parse the response
      const data = await response.json();

      // Check for errors in the response
      if (data.errors) {
        console.error('Error creating item:', data.errors);
        return res.status(500).json({ message: 'Error creating item in Monday.com' });
      }

      // Send a successful response back to the client
      res.status(200).json({ message: 'Item created successfully in Monday.com', itemId: data.data.create_item.id });
    } catch (error) {
      console.error('Error in API request:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    // If not a POST request, return a 405 Method Not Allowed error
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
