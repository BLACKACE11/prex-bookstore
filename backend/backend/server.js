const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51...'); // ← Replace with your real Secret Key

const app = express();
app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { bookId, amount } = req.body;   // amount in dollars

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,        // Stripe expects amount in cents
      currency: 'usd',
      metadata: { bookId: bookId }
    });

    res.send({
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Stripe backend running on http://localhost:${PORT}`);
});