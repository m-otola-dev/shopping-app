import React, { useState } from 'react';
import { MdAddBox, MdIndeterminateCheckBox } from 'react-icons/md';

function HowMany() {
    const [quantity, setNumber] = useState(0);
    const increment = () => setNumber(quantity === 10 ? quantity : quantity +1);
    const decrement = () => setNumber(quantity === 0 ? 0 : quantity - 1);

    return (
        <div class="control">
            <MdIndeterminateCheckBox onClick={decrement} />
            <span class="qv">{quantity}</span>
            <MdAddBox onClick={increment} />
        </div>
    );
}

export default HowMany;