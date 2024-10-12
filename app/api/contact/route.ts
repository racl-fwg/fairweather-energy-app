import { NextResponse } from 'next/server';

// Define the Monday API URL
const MONDAY_API_URL = 'https://api.monday.com/v2';

// Use the correct environment variable for the API token
const MONDAY_API_TOKEN = process.env.MONDAY_API_TOKEN || '';

export async function POST(req: Request) {
  try {
    // Extract form data from the request body
    const { name, phone, email, message } = await req.json();

    // Validate required fields
    if (!name || (!phone && !email)) {
      return NextResponse.json({ message: 'Name and either Phone or Email are required.' }, { status: 400 });
    }

    // Get the current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split('T')[0];

    // Map form data to the appropriate Monday.com column IDs
    const columnValues = {
      text__1: name, // Name column
      text_1__1: phone, // Phone column
      e_post2__1: { email, text: email }, // Email column (requires both email and text field)
      text8__1: message, // Message column
      date4: { date: currentDate }, // Date column
    };

    // Properly escape the columnValues for the Monday.com API
    const columnValuesString = JSON.stringify(columnValues).replace(/"/g, '\\"');

    // Build the GraphQL query for creating the item in the "Kontakta oss tickets" group
    const query = `
      mutation {
        create_item (
          board_id: 1658552722,
          group_id: "topics",
          item_name: "${name}",
          column_values: "${columnValuesString}"
        ) {
          id
          name
        }
      }
    `;

    // Send the query to the Monday.com API
    const response = await fetch(MONDAY_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: MONDAY_API_TOKEN, // Use the correct API token
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    // Check for errors in the response
    if (data.errors) {
      console.error('Error creating item in Monday.com:', data.errors); // Log the error details
      return NextResponse.json({ message: 'Error creating item in Monday.com', errors: data.errors }, { status: 500 });
    }

    // Send a successful response back to the client
    return NextResponse.json({ message: 'Item created successfully in Monday.com', itemId: data.data.create_item.id });
  } catch (error) {
    console.error('Error in API request:', error); // Log the detailed error message
    return NextResponse.json({ message: 'Internal server error', error }, { status: 500 });
  }
}
