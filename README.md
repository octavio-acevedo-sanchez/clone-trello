# Next.js 14 - Trello Clone

Trello Clone application, uses TypeScript (StandardJS), Tailwind + Shadcn/UI, MongoDB, the application only has basic functionalities. This project is a test one.

- Create organizations using Clerk.
- Create boards, lists and cards.
- Drag and drop lists and cards using @hello-pangea/dnd.
- Activity history.
- Integration with Stripe to receive webhooks and be able to update the subscription status.

## Configure environment variables

Rename the file **.env.template** to **.env.local**

- Clerk: Create an account on https://clerk.com, create an application and then go to Api Keys and copy the values of NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

- MongoDB URL:

```
DATABASE_URL="mongodb+srv://user:password@domain.com/name_bd"
```

- Unplash: Go to unsplash.com, create an account, after logging in, go to unsplash.com/oauth/applications and copy Access Key.

```
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=
```

- Stripe: Go to stripe.com and sign up. After logging in, create an account. Then go to the Developers option and in the API Keys section you must copy the public and secret key. In the Webhook section you can test a local environment and then add an endpoint, where you must add the project URL, for example https://domain.com/api/webhooks, select the option to listen for events and select all the events. Then copy the content of the Signed Secret variable into STRIPE_WEBHOOK_SECRET

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

- Rebuild the node modules and build Next

```
npm install
npm run dev
```
