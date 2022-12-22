import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { priceId } = req.body

    if (!priceId) return res.status(400).json({ error: 'PriceId is required' })

    const checkoutSession = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        //payment_method_types: ['card'],
        success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
    })
    return res.status(201).json({ checkoutUrl: checkoutSession.url })
}