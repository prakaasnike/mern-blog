import { InputBox } from '../components/input.component';

const UserAuthForm = ({ type }) => {
    return (
        <section className="flex items-center justify-center h-cover">
            <form action="" className="w-[80%] max-w-[400px]">
                <h1 className="mb-24 text-4xl text-center capitalize font-gelasio">
                    {type === 'sign-in' ? 'welcome back' : 'join us today'}
                </h1>

                {type !== 'sign-in' ? (
                    <InputBox
                        name="fullname"
                        type="text"
                        placeholder="Full Name"
                        icon="fi-rr-user"
                    />
                ) : (
                    ''
                )}

                <InputBox
                    name="email"
                    type="email"
                    placeholder="Email"
                    icon="fi-rr-envelope"
                />

                <InputBox
                    name="password"
                    type="password"
                    placeholder="Password"
                    icon="fi-rr-key"
                />
            </form>
        </section>
    );
};

export default UserAuthForm;
