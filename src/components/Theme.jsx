import React from 'react'

const toHex = x => `0${parseInt(x, 10).toString(16)}`.slice(-2)
const rgbToHex = s => {
  if (/^#[0-9A-F]{6}$/i.test(s)) return s;
  const rgb = s.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return `#${toHex(rgb[1])}${toHex(rgb[2])}${toHex(rgb[3])}`;
};

class Theme extends React.Component {
  constructor(props) {
    super(props)

    this.switchTheme = this.switchTheme.bind(this)

    let theme = 'dark'
    if (typeof window !== 'undefined') document.body.className = document.body.className || theme

    this.color = this.color === '#fff' ? '#000' : '#fff'
    this.state = { theme }
  }

  switchTheme(e) {

    e.target.style.backgroundColor = rgbToHex(window.getComputedStyle(document.body).getPropertyValue('background-color'))
    const theme = this.state.theme === 'white' ? 'dark' : 'white'
    this.setState({ theme })
    document.body.className = theme
  
    
    const bgcolor = rgbToHex(window.getComputedStyle(document.body).getPropertyValue('background-color'))
    const color = rgbToHex(window.getComputedStyle(document.body).getPropertyValue('color'))
  
    window.CANVAS_BACKGROUND.setColors(color, bgcolor);

  }

  render() {
    return (
      <div  className='theme-palette'>
        <div style={{backgroundColor: this.color}} onClick={this.switchTheme} />
      </div>
    );
  }
}

export default Theme