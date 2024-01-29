# SnapAndRent

SnapAndRent is a full-stack real estate web application built using Vite and React. This platform empowers users to explore, list, and manage property listings with ease. Whether you are searching for a property, creating a listing, or updating your profile, SnapAndRent provides a seamless experience for real estate transactions.

## Features

- **User Authentication:**

  - Signup and login using email and password.
  - Secure authentication process for user privacy.

- **Property Listings:**

  - Create, edit, and delete property listings.
  - Upload up to 6 images while creating a listing.

- **Contact Owner:**

  - Easily contact the owner of a property through email.

- **Search and Filter:**

  - Search for listings based on parameters like type (rent, sale, all), amenities (furnished, parking), and more.

- **Sorting:**

  - Sort listings based on different parameters (latest, oldest, price high to low, price low to high).

- **User Profile Management:**
  - Update username, password, and email for user accounts.

## Technologies Used

- **Frontend:** Vite, React
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** bcryptjs, JWT
- **Image Storage:** Firebase
- **Other Dependencies:** dotenv, cookie-parser

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/lovishbansal00/SnapAndRent.git
   cd SnapAndRent
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

   Now, again create a `.env` file in client directory and add the following

   ```env
   VITE_FIREBASE_API_KEY = your_vite_firebase_api_key
   ```

4. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   This will start both the frontend and backend in development mode.

5. **Open the App:**

   Open your browser and visit [http://localhost:3000](http://localhost:3000).

   For running the backend also on `localhost:3000`, add the following in `vite.config.js` file

   ```vite.config.js
   server: {
    proxy: {
      '/api': {
        target: 'https://localhost:3000',
        secure: false,
      },
    },
   },
   ```

## Contributing

Contributions are welcome! If you'd like to contribute to SnapAndRent.

## License

This project is licensed under the [MIT License](LICENSE).

## Connect with Us

Connect with me on LinkedIn for more updates:

- [Lovish Bansal](https://www.linkedin.com/in/lovishbansal00/)

---
