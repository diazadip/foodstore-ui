import * as React from 'react';
import {
    LayoutOne, Card, FormControl, InputText, InputPassword,
    Button
} from 'upkit';
// (1) import useForm
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import { rules } from './validation';
import { registerUser } from '../../api/auth';
import StoreLogo from '../../components/StoreLogo';


const statuslist = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error',
}

export default function Register() {
    // (2) keluarkan fungsi yang diperlukan dari useForm
    const { register, formState: { errors }, handleSubmit, setError } = useForm({
        criteriaMode: "all"
    });

    let [status, setStatus] = React.useState(statuslist.idle);
    let history = useHistory();


    const onSubmit = async formData => {
        // (1) dapatkan variabel password dan password_confirmation
        let { password, password_confirmation } = formData;
        // (2) cek password vs password_confirmation
        if (password !== password_confirmation) {
            return setError('password_confirmation', {
                type: 'equality',
                message: 'Konfirmasi password harus dama dengan password'
            });
        }

        setStatus(statuslist.process);

        let { data } = await registerUser(formData);
        // (1) cek apakah ada error
        if (data.error) {
            // (2) dapatkan field terkait jika ada errors
            let fields = Object.keys(data.fields);
            // (3) untuk masing-masing field kita terapkan error dan tangkap pesan errornya
            fields.forEach(field => {
                setError(field, {
                    type: 'server', message:
                        data.fields[field]?.properties?.message
                })
            });
            setStatus(statuslist.error);
            return;
        }
        setStatus(statuslist.success);
        history.push('/register/berhasil');
    }

    return (
        <LayoutOne size="small">
            <Card color="white">

                {/* (4) gunakan onSubmit dengan terlebih dahulu dimasukan dalam handleSubmit */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* gunakan ref={register} */}
                    <div className="text-center mb-5">
                        <StoreLogo />
                    </div>
                    <FormControl errorMessage={errors.validation_fullname?.message}>
                        <InputText
                            name="full_name"
                            placeholder="Nama Lengkap"
                            fitContainer
                            {...register("validation_fullname", rules.full_name)}
                        />
                    </FormControl>

                    {/* gunakan ref={register} */}
                    <FormControl errorMessage={errors.validation_email?.message}>
                        <InputText
                            name="email"
                            placeholder="Email"
                            fitContainer
                            {...register("validation_email", rules.email)}
                        />
                    </FormControl>
                    {/* gunakan ref={register} */}
                    <FormControl errorMessage={errors.validation_password?.message}>
                        <InputPassword
                            name="password"
                            placeholder="Password"
                            fitContainer
                            {...register("validation_password", rules.password)}
                        />
                    </FormControl>
                    {/* gunakan ref={register} */}
                    <FormControl errorMessage={errors.validation_confirmation_password?.message}>
                        <InputPassword
                            name="password_confirmation"
                            placeholder="Konfirmasi Password"
                            fitContainer
                            {...register("validation_confirmation_password", rules.password_confirmation)}
                        />
                    </FormControl>
                    <Button
                        size="large"
                        fitContainer
                        disabled={status === statuslist.process}
                    > {status === statuslist.process ? "Sedang memproses" : "Mendaftar"}
                    </Button>
                </form>
                <div className="text-center mt-2">
                    Sudah punya akun? <Link to="/login"> <b> Masuk Sekarang. </b> </Link>
                </div>

            </Card>
        </LayoutOne>
    )
}
