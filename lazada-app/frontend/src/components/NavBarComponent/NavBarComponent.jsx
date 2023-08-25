import Form from 'react-bootstrap/Form'
import React from 'react'
import {
  WrapperContent,
  WrapperLableText,
  WrapperTextPrice,
  WrapperTextValue
} from './style'

const NavBarComponent = () => {
  const onChange = () => {}

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
      case 'checkbox':
        return (
          <Form>
            {['checkbox'].map(type =>
              <div key={`default-${type}`} className='mb-3'>
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onChange={onChange}
                >
                  {options.map(option => {
                    return (
                      <Form.Check
                        style={{ marginLeft: 0 }}
                        value={option.value}
                      >
                        {option.label}
                      </Form.Check>
                    )
                  })}
                </Form.Check>
              </div>
            )}
          </Form>
        )
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
    </div>
  )
}

export default NavBarComponent
