import React from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './styles/credit-card.css'

export default function CreditCard() {
    return (
        <Cards
            cvc="456"
            expiry="12/24"
            focused="name"
            name="Infas Mohommed"
            number="3701 9484 95860 8550"
        />
    )
}
