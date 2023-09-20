export const useThemeStore = definePiniaStore('theme', () => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ]

  // const storage = localStorage.getItem('theme')

  const theme = ref(storage)
  // const doubleCount = computed(() => count.value * 2)
  function setTheme(param) {
    // localStorage.setItem('theme', param)
    theme.value = param
  }

  return { theme, themes, setTheme }
})
