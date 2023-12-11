const themeSwithcer = document.getElementById('theme-switcher')

const defaultTheme = localStorage.getItem('theme') || "theme-light"
setTheme(defaultTheme)
themeSwithcer.addEventListener('change',function(e){
        setTheme(e.target.value)
    })
    
    function setTheme(theme){
            document.documentElement.classList = theme
            localStorage.setItem('theme',theme,)
        }
        