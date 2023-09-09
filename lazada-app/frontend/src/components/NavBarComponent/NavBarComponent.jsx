import Form from 'react-bootstrap/Form'
import React from 'react'
import {
  WrapperContent,
  WrapperLableText,
  WrapperTextPrice,
  WrapperTextValue,
  LineBreak,
} from './style'

const NavBarComponent = () => {

  
  const renderContent = (type, options) => {
    switch (type) {
      case 'text':
        return options.map(option => {
          return (
            <WrapperTextValue>
              {option}
            </WrapperTextValue>
          )
        })
    
      case 'price':
        return options.map(option => {
          return (
            <WrapperTextPrice>
              {option}
            </WrapperTextPrice>
          )
        })
      default:
        return {}
    }
  }
  
  return (
    <div>
      <WrapperLableText>Lable</WrapperLableText>
      <WrapperContent>
        {renderContent('text', ['Tu lanh', 'TV', 'Laptop'])}
      </WrapperContent>

      <LineBreak></LineBreak>
      
      <WrapperLableText>Giá</WrapperLableText>
      <WrapperContent>
        {renderContent('price', ['dưới 40,000', 'trên 50,000'])}
      </WrapperContent>
    </div>
  )
}

export default NavBarComponent
