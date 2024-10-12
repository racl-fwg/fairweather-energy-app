import { NextResponse } from 'next/server';

const MONDAY_API_URL = 'https://api.monday.com/v2';
const MONDAY_API_TOKEN = process.env.MONDAY_API_TOKEN || '';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Validate the email field
    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    // Map the email to the appropriate Monday.com column ID
    const columnValues = {
      email: { email, text: email }, // E-post (Email field in Monday)
    };

    // Build the GraphQL query for creating the item in the "Newsletter subscribers" group
    const query = `
      mutation {
        create_item (
          board_id: 1658552722,
          group_id: "group_title",
          item_name: "${email}",
          column_values: "${JSON.stringify(columnValues).replace(/"/g, '\\"')}"
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
        Authorization: MONDAY_API_TOKEN, // Use the environment variable for security
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    // Check for errors in the response from Monday.com
    if (data.errors) {
      const errorMessage = process.env.NEXT_PUBLIC_DEBUG === 'true' 
        ? `Error creating item in Monday: ${JSON.stringify(data.errors)}`
        : 'Error creating item. Please try again later.';

      return NextResponse.json({ message: errorMessage }, { status: 500 });
    }

    const successMessage = process.env.NEXT_PUBLIC_DEBUG === 'true' 
      ? `Email added successfully: ${JSON.stringify(data.data.create_item)}`
      : 'Email added successfully to the newsletter!';

    return NextResponse.json({ message: successMessage, itemId: data.data.create_item.id });

  } catch (error) {
    const errorMessage = process.env.NEXT_PUBLIC_DEBUG === 'true' 
      ? `Error processing request: ${error}`
      : 'An internal error occurred. Please try again later.';

    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
