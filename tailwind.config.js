module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage:{
        'Login-page':'url(../../assets/Loginpage.jpg)'
      },
      height:{
        'navbar' : '5vh',
        '90vh' : '90vh',
        '80vh' : '80vh',
        '40vh' : '40vh',
      },
      fontFamily:{
        lato : ['Lato','sans-serif'],
        poppins : ['Poppins', 'sans-serif'],
      },
      colors:{
        buybutton : '#E2703A',
      }
    },

  },
  plugins: [],
}
