import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('[Act Development Lead Ingestion]:', body);

    // In production with PostgreSQL/Drizzle, this inserts into the leads table.
    // For local dev/demo, we validate and return a rich success response.
    const { name, phone, email, type } = body;

    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { error: 'Name and either a phone number or email are required.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out to Act Development. Our luxury concierge will contact you within 2 business hours.',
      data: {
        referenceId: `ACT-${Date.now().toString(36).toUpperCase()}`,
        receivedAt: new Date().toISOString(),
        inquiryType: type || 'general',
      },
    });
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json(
      { error: 'Internal server error processing your request.' },
      { status: 500 }
    );
  }
}
