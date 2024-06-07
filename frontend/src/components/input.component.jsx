import { useState } from 'react';

export const InputBox = ({ name, type, id, value, placeholder, icon }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePassword = () => {
        setPasswordVisible(currentValue => !currentValue);
    };

    return (
        <div className="relative w-[100%] mb-4">
            <input
                name={name}
                type={
                    type == 'password'
                        ? passwordVisible
                            ? 'text'
                            : 'password'
                        : type
                }
                placeholder={placeholder}
                defaultValue={value}
                id={id}
                className="input-box"
            />
            <i className={'fi ' + icon + ' input-icon'}></i>

            {type == 'password' ? (
                <i
                    onClick={togglePassword}
                    className={
                        'fi fi-rr-eye' +
                        (!passwordVisible ? '-crossed' : '') +
                        ' input-icon left-[auto] right-4 cursor-pointer'
                    }
                ></i>
            ) : (
                ''
            )}
        </div>
    );
};
