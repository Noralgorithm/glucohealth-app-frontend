/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-color': 'var(--ion-text-color)',
        'text-color-step-400': 'var(--ion-text-color-step-400)',
        'bg-datetime-customized-color-light': '#F4F5F8',
        //'bg-datetime-customized-color-dark': '#222428',
        'accent-color': 'var(--ion-color-accent)',
        'primary-color-shade': 'var(--ion-color-primary-shade)',
        'primary-color': 'var(--ion-color-primary)',
        'bg-page1': 'var(--page1-bg-color)', // Color para la página 1 Dashboard
        'text-page1': 'var(--page1-text-color)', // Color de texto para la página 1
        'bg-page2': 'var(--page2-bg-color)', // Color para la página 2 Pacientes
        'text-page2': 'var(--page2-text-color)', // Color de texto para la página 2
        'bg-page3': 'var(--page3-bg-color)', // Color para la página 3 Settings
        'text-page3': 'var(--page3-text-color)', // Color de texto para la página 3
      },
    },
  },
  plugins: [],
}
