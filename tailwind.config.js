module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      backgrounImage:{
       bg1:"url('./src/utils/bg.jpg')",
      },
      colors: {
        customBlue: '#212121',
        custompeach :'#F1FAEE',
        customBlack : '#404040',
        customGreen : '	#d0ded8',
      },
    },
    fontFamily: {
      'custom': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}



