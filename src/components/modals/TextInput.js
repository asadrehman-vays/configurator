import {useState} from "react";
import successIcon from "../../assets/images/succes.svg"

export default function TextInput({ type, label }) {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className="input-container">
            <input type={type} value={value} onChange={handleChange} />
            <label className={value && 'filled'} htmlFor="name">
                {label}
            </label>
            <img className={value && 'dataIn'} src={successIcon} alt="successIcon"/>
        </div>
    );
}