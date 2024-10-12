import { NextResponse } from 'next/server';

// Define the Monday API URL
const MONDAY_API_URL = 'https://api.monday.com/v2';

// Environment variable storing the API Token
const MONDAY_API_TOKEN = process.env.MONDAY_API_TOKEN || '';

// Define the board ID and group ID
const BOARD_ID = '1658552722'; // FWE Kontaktformulär Board ID
const GROUP_ID = 'ny_grupp__1'; // Group ID for "Offertleads"

// Check the debug flag (set to true for development)
const DEBUG = process.env.NEXT_PUBLIC_DEBUG === 'true';

export async function POST(req: Request) {
  try {
    // Extract form data from the request body
    const {
      firstName,
      lastName,
      email,
      address,
      city, // Use Ort instead of Postnummer
      propertyType,
      phone,
      interestedIn,
      message,
    } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { message: DEBUG ? 'First Name, Last Name, Email, and Phone are required.' : 'Fyll i alla obligatoriska fält.' },
        { status: 400 }
      );
    }

    // Current date in a format that Monday.com expects (ISO format)
    const currentDate = new Date().toISOString().split('T')[0];

    // Map form data to the appropriate Monday.com column IDs
    const columnValues = {
      text__1: firstName, // Namn (First Name)
      text1__1: lastName, // Efternamn (Last Name)
      e_post2__1: { email, text: email }, // E-post (Email field)
      text6__1: address, // Adress (Address field)
      text0__1: city, // Ort (City field) instead of Postnummer
      text9__1: propertyType || '', // Fastighetstyp (Property Type, optional)
      text_1__1: phone, // Telefon (Phone field)
      rullgardin__1: {
        labels: [
          ...(interestedIn.solceller ? ['Solceller'] : []),
          ...(interestedIn.batteri ? ['Batteri'] : []), // Corrected "Batterier" to "Batteri"
          ...(interestedIn.konsultation ? ['Konsultation'] : []),
          ...(interestedIn.ci ? ['C&I'] : []), // Add C&I to the interested labels
        ], // Intresserad av (Interested In dropdown)
      },
      text8__1: message || '', // Meddelande (Message field, optional)
      date4: { date: currentDate }, // Automatically add the submission date (ISO format)
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
      console.error('Error creating item in Monday:', data.errors);
      return NextResponse.json(
        { message: DEBUG ? `Error creating item in Monday.com: ${JSON.stringify(data.errors)}` : 'Något gick fel vid skickandet.' },
        { status: 500 }
      );
    }

    // Send a successful response back to the client
    return NextResponse.json({
      message: DEBUG ? 'Item created successfully in Monday.com' : 'Tack för din förfrågan! Vi återkommer snart.',
      itemId: data.data.create_item.id
    });

  } catch (error) {
    // Safely handle the error
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('Error in API request:', errorMessage);

    return NextResponse.json(
      {
        message: DEBUG ? `Internal server error: ${errorMessage}` : 'Något gick fel vid anslutning till servern.'
      },
      { status: 500 }
    );
  }
}
